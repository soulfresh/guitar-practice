import React, { Suspense } from 'react';
import { Provider } from 'react-redux';

import {
  Router,
  Route,
  Switch
} from "react-router-dom";
// import Router from './DebugRouter';

import createStore from '../../store';
import { getRoute } from '../../store/routes';
import {
  PageLoader,
  Nav
} from '~components';
import {
  NotFound,
  Home,
  MajorTriads,
} from '~pages';

import './Main.scss';

let store;
let _authFailure;
let handleAuthFailure = () => {
  // Wait until the current render is complete
  // before re-rendering to the Login page.
  setTimeout(_authFailure);
}

export default function Main({
  onAuthFailure,
  history,
}) {
  _authFailure = onAuthFailure;
  if (!store) {
    store = createStore(handleAuthFailure);
  }

  const pages = [{
    name: 'Note Names', path: getRoute('NOTES'), component: Home
  }, {
    name: 'Triads', path: getRoute('MAJOR_TRIADS'), component: MajorTriads
  }];

  const routes = pages.map((p, i) => <Route {...p} key={i} />);

  return (
    <div className="main">
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<PageLoader />}>
            <Nav pages={pages}>
              <Switch>
                <Route component={Home} path={getRoute('HOME')} exact />
                { routes }
                <Route component={NotFound} />
              </Switch>
            </Nav>
          </Suspense>
        </Router>
      </Provider>
    </div>
  );
}
