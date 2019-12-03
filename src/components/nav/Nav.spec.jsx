import React from 'react';

import Nav from './Nav.jsx';
import NavPageObject from './Nav.page-object';

describe('Nav', function() {
  let page;

  beforeEach(function() {
    page = new NavPageObject();
  });

  afterEach(function() {
    page.destroySandbox();
  });

  beforeEach(function() {
    page.render(
      <Nav />
    );
  });
});
