import { expect } from 'chai';
import { describe, beforeEach, it } from '@bigtest/mocha';
import { describeApplication } from '../helpers';

import LandingPage from '../pages/landing-page';

describeApplication('WelcomeScreen', function() {
  beforeEach(function() {
    return this.visit('/', () => {
      expect(LandingPage.$root).to.exist;
    });
  });
  it('should display the app name', function() {
    expect(LandingPage.h1).to.equal('MonopolyWallet');
  });
});