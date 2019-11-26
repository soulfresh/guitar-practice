import React from 'react';

import { Login } from './Login.jsx';
import LoginPageObject from './Login.page-object';

// Skipping until I need it.
xdescribe('Login', function() {
  let page, onSubmit;

  beforeEach(function() {
    page = new LoginPageObject();
  });

  afterEach(function() {
    page.destroySandbox();
  });

  beforeEach(function() {
    onSubmit = jasmine.createSpy('onSubmit');
    page.render(
      <Login onSubmit={onSubmit} />
    );
  });

  describe('after submitting without any data', function() {
    beforeEach(function(done) {
      page.form.submit();
      setTimeout(done);
    });

    it('should show an error for the username.', () => {
      expect(page.usernameError.text).toEqual('is required');
    });

    it('should show an error for the password.', () => {
      expect(page.passwordError.text).toEqual('is required');
    });
  });

  describe('after submitting with valid data', function() {
    beforeEach(function(done) {
      page.setUsernameValue('Batman');
      page.setPasswordValue('Joker Sucks');
      page.submit();
      setTimeout(done);
    });

    it('should not show any errors', () => {
      expect(page.usernameIsInErrorState)
        .withContext('username should not show an error')
        .toBe(false);
      expect(page.passwordIsInErrorState)
        .withContext('password should not show an error')
        .toBe(false);
    });

    it('should call on submit.', () => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
