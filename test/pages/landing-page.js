import {
  page,
  find,
  text,
  clickable,
  isPresent
} from '@bigtest/interaction';

@page class LandingPage {
  heading = text('h1.heading');
}

export default LandingPage;
