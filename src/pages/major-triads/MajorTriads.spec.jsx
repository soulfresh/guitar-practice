import React from 'react';

import MajorTriads from './MajorTriads.jsx';
import MajorTriadsPageObject from './MajorTriads.page-object';

describe('MajorTriads', function() {
  let page;

  beforeEach(function() {
    page = new MajorTriadsPageObject();
  });

  afterEach(function() {
    page.destroySandbox();
  });

  beforeEach(function() {
    page.render(
      <MajorTriads />
    );
  });
});
