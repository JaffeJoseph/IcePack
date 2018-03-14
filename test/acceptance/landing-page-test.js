import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { expect } from 'chai';
import { describe, beforeEach, it, afterEach } from '@bigtest/mocha';
import { describeApplication } from '../helpers';


import LandingPage from '../pages/landing-page';
import AppRoot from '../../src/root';

let landingPage = new LandingPage('.landing-page');

describe('LandingPage', () => {
  let rootElement;
  beforeEach(function() {

    // create the app root DOM node
    rootElement = document.createElement('div');
    rootElement.id = 'testing-root';
    document.body.appendChild(rootElement);

    // mount our app
    this.app = render(<AppRoot test/>, rootElement);
  });
  afterEach(() => {
    unmountComponentAtNode(rootElement);
    document.body.removeChild(rootElement);
    rootElement = null;
  });

  it('has a "Austin Digital Jobs" heading', () => {
    expect(landingPage.heading).to.eq('Austin Digital Jobs');
  });

  describe('Click Sign In', () => {
    beforeEach(() => {
      return landingPage.signInButton();
    });
    it('should render the sign in component', () => {
      expect(landingPage.signIn).to.exist;
    });
  });
});