import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import chai from 'chai';
import chaiDOM from 'chai-dom';
import chaiAsPromised from 'chai-as-promised';
import { describe, beforeEach, afterEach } from '@bigtest/mocha';
import Convergence from '@bigtest/convergence';

import WebSocket from './mock-websocket';
import AppRoot from '../src/root';

// use chai dom matchers
chai.use(chaiDOM);
// and chai as promised
chai.use(chaiAsPromised);

/**
 * Visits a path using the provided push function and returns
 * a convergence instance
 * @param {Function} push - function to push the current history
 * @param {Mixed} path - the argument provided to `push`
 * @returns {Convergence}
 */
function visit(push, path) {
  return new Convergence().do(() => push(path));
}

/**
 * Navigates backwards by calling the provided goBack function and
 * returns a convergence instance
 * @param {Function} goBack - function to go back in the current history
 * @returns {Convergence}
 */
function goBack(goBack) {
  return new Convergence().do(() => goBack());
}

/**
 * Starts a mock websocket server and mounts our app
 * @param {String} name - name of the test suite
 * @param {Function} setup - suite definition
 * @param {Boolean} only - use describe.only
 */
export function describeApplication(name, setup, only) {
  let descr = only ? describe.only : describe;

  descr(name, function() {
    let rootElement, unsubscribeFromStore;

    // app setup
    beforeEach(function() {

      // create the app root DOM node
      rootElement = document.createElement('div');
      rootElement.id = 'testing-root';
      document.body.appendChild(rootElement);

      // mount our app
      this.app = render(<AppRoot test/>, rootElement);

      // useful things to assert against
      this.state = this.app.store.getState();
      this.location = this.state.router.location;

      // keep local contexts up to date with the app
      unsubscribeFromStore = this.app.store.subscribe(() => {
        this.state = this.app.store.getState();
        this.location = this.state.router.location;
      });

      // helpers specific to this context
      this.visit = visit.bind(this, this.app.history.push);
      this.goBack = goBack.bind(this, this.app.history.goBack);

      // wait until our app has finished loading
      return new Convergence().once(() => {
        chai.expect(this.state.app.waiting).to.not.include('connected');
      });
    });

    // teardown
    afterEach(function() {
      unsubscribeFromStore();
      unsubscribeFromStore = null;

      unmountComponentAtNode(rootElement);
      document.body.removeChild(rootElement);
      rootElement = null;

      // sometimes our context can hang around
      this.visit = null;
      this.pauseTest = null;
      this.location = null;
      this.state = null;
      this.app = null;
    });

    // passthrough to our tests
    setup.call(this);
  });
}

// convenience helper for describe.only
describeApplication.only = (name, setup) => {
  describeApplication(name, setup, true);
};