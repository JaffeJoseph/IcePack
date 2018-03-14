import {
  page,
  find,
  text,
  clickable,
  isPresent
} from '@bigtest/interaction';

@page class LandingPage {
  heading = text('h1.heading');
  signInButton = clickable('button.sign-in-button');
  signUpButton = clickable('button.sign-up-button');
  signIn = find('form.sign-in');

}

export default LandingPage;
