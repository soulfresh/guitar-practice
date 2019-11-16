import React, { Suspense, lazy, useState } from 'react';

import { PageLoader, LoaderService } from './components';
import { BundleLoadError } from './pages/bundle-load-error';
import AuthAPI from './store/services/auth';
import defaultHistory from './store/history';

import './App.scss';

// Create two separate bundles so the login page can
// load as quickly as possible.
const Main = lazy(() => import('./pages/main/Main.jsx'));

export default function App({
  history
}) {
  history = history || defaultHistory;
  const token = AuthAPI.getToken();

  const [, setAuthenticated] = useState(!!token);

  // const onAuthSuccess = () => setAuthenticated(true);
  const onAuthFailure = () => setAuthenticated(false);

  const view = <Main onAuthFailure={onAuthFailure} history={history} />;

  LoaderService.stop();

  return (
    <div className="App">
      <BundleLoadError>
        <Suspense fallback={<PageLoader />}>
          { view }
        </Suspense>
      </BundleLoadError>
    </div>
  );
}
