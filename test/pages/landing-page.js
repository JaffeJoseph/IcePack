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
  signInUsername = find('input.Username');
  signInPassword = find('input.Password');
  signInSubmit = clickable('a.sign-in-submit');
  signInCancel = clickable('a.sign-in-cancel');

  signUp = find('form.sign-up');
  signUpEmail = find('input.Email');
  signUpUsername = find('input.Username');
  signUpPassword = find('input.Password');
  signUpSubmit = clickable('a.sign-up-submit');
  signUpCancel = clickable('a.sign-up-cancel');

}

export default LandingPage;
