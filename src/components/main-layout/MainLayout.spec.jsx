import React from 'react';

import MainLayout from './MainLayout.jsx';
import MainLayoutPageObject from './MainLayout.page-object';

describe('MainLayout', function() {
  let page;

  beforeEach(function() {
    page = new MainLayoutPageObject();
  });

  afterEach(function() {
    page.destroySandbox();
  });

  beforeEach(function() {
    page.render(
      <MainLayout />
    );
  });
});
