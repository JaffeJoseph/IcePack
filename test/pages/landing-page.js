import {
  page,
  find,
  text,
  clickable,
  isPresent
} from '@bigtest/interaction';

@page class LandingPage {
  heading = text('[data-test-find-landing-page-heading]');
}

export default new LandingPage('[data-test-landing-page]');