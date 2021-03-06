import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import { createLogger } from 'redux-logger';

import preferencesReducer, {
  selectPreferences as subSelectPreferences,
  selectInitialized as subSelectPreferencesInitialized,
  selectPreferenceByName as subSelectPreferenceByName,
} from './preferences/preferences.store';

const middlewares = [...getDefaultMiddleware()];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(createLogger({
    // See options at:
    // https://www.npmjs.com/package/redux-logger
    collapsed: true
  }));
}

export const reducerConfig = {
  preferences: preferencesReducer
};

const rootReducer = combineReducers(reducerConfig);

/*
 * You can use this action to reset the store
 * to it's initial state.
 */
export function reset() {
  return {
    type: 'RESET',
    payload: null
  }
}

export function authFailure() {
  return {
    type: 'AUTH_FAILURE',
    payload: null
  }
}

export default function createStore(onAuthFailure, initialState) {
  return configureStore({
    reducer: (state, action) => {
      switch (action.type) {
        case 'RESET':
          // Reset to the initial store state.
          return rootReducer(undefined, action);
        case 'AUTH_FAILURE':
          onAuthFailure();
          return state;
        default:
          return rootReducer(state, action);
      }
    },
    middleware: middlewares,
    preloadedState: initialState,
  });
}

// Another potential option for combining selectors:
// https://cmichel.io/redux-selectors-structure
const prefs = state => state.preferences;
export const selectPreferences = (state) =>
  subSelectPreferences(prefs(state));
export const selectPreferencesInitialized = (state) =>
  subSelectPreferencesInitialized(prefs(state));
export const selectPreferenceByName = (state, name) =>
  subSelectPreferenceByName(prefs(state), name);
