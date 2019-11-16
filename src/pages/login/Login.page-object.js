import PageObject from '~/PageObject';
import { LabeledInputPageObject } from '~components/page-objects';

export const selectors = {
  form: '[data-test=loginForm]',
  usernameLabel: '[data-test=usernameLabel]',
  passwordLabel: '[data-test=passwordLabel]',
  submit: '[data-test=submit]',
};

export default class LoginPageObject extends PageObject {
  selectors = selectors;

  get usernamePage() {
    return new LabeledInputPageObject(
      this.select(selectors.usernameLabel)
    );
  }

  get usernameError() {
    return this.usernamePage.message;
  }

  get usernameIsInErrorState() {
    return this.usernamePage.isInErrorState;
  }

  setUsernameValue(value) {
    this.usernamePage.input.value = value;
  }

  get passwordPage() {
    return new LabeledInputPageObject(
      this.select(selectors.passwordLabel)
    );
  }

  get passwordError() {
    return this.passwordPage.message;
  }

  get passwordIsInErrorState() {
    return this.passwordPage.isInErrorState;
  }

  setPasswordValue(value) {
    this.passwordPage.input.value = value;
  }
}
