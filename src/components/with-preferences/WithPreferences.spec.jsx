import React from 'react';

import WithPreferences from './WithPreferences.jsx';
import WithPreferencesPageObject from './WithPreferences.page-object';

describe('WithPreferences', function() {
  let page;

  beforeEach(function() {
    page = new WithPreferencesPageObject();
  });

  afterEach(function() {
    page.destroySandbox();
  });

  beforeEach(function() {
    page.render(
      <WithPreferences />
    );
  });
});
