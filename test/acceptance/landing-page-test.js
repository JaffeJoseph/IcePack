import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { expect } from 'chai';
import { describe, beforeEach, it, afterEach } from '@bigtest/mocha';
import Convergence from '@bigtest/convergence';


import LandingPage from '../pages/landing-page';
import HomePage from '../pages/home-page';
import AppRoot from '../../src/root';

let landingPage = new LandingPage('.landing-page');
let homePage = new HomePage('.home');

describe('LandingPage', () => {
  let rootElement;
  beforeEach(function() {

    // create the app root DOM node
    rootElement = document.createElement('div');
    rootElement.id = 'testing-root';
    document.body.appendChild(rootElement);

    // mount our app
    this.app = render(<AppRoot test />, rootElement);

  });
  afterEach(function() {
    unmountComponentAtNode(rootElement);
    document.body.removeChild(rootElement);
    rootElement = null;
  });

  it('has a "Austin Digital Jobs" heading', () => {
    expect(landingPage.heading).to.eq('Austin Digital Jobs');
  });

  describe('Sign In', () => {
    beforeEach(function() {
      return landingPage.signInButton();
    });
    it('should render the sign in form', () => {
      expect(landingPage.signIn).to.exist;
    });
    it('should render an email and password field', () => {
      expect(landingPage.signInUsername).to.exist;
      expect(landingPage.signInPassword).to.exist;
    });
    // describe('Submit sign in form', () => {
    //   beforeEach(function() {
    //     return landingPage.signInSubmit();
    //   });
    //   it('should render the home route', () => {
    //     expect(homePage.$root).to.exist;
    //   });
    // });
    // describe('Cancel sign in form', () => {
    //   beforeEach(() => {
    //     return landingPage.signInCancel();
    //   });
    //   it('should go back to landing page, no forms', () => {

    //   });
    // });
  });

  describe('Sign Up', () => {
    beforeEach(function() {
      return landingPage.signUpButton();
    });
    it('should render the sign up form', () => {
      expect(landingPage.signUp).to.exist;
    });
    it('should render an email password and username fields', () => {
      expect(landingPage.signUpEmail).to.exist;
      expect(landingPage.signUpUsername).to.exist;
      expect(landingPage.signUpPassword).to.exist;
    });
    describe('Submit sign in form', () => {
      beforeEach(function() {
        return landingPage.signUpSubmit();
      });
      it('should render the home route', () => {
        expect(homePage.$root).to.exist;
      });
    });
    // describe('Cancel sign up form', () => {
    //   beforeEach(() => {
    //     return landingPage.signUpCancel();
    //   });
    //   it('should go back to landing page, no forms', () => {

    //   });
    // });
  });
  
});