import {
  getPreferencesSuccess,
} from './preferences.store';
import {
  selectPreferences,
} from '../store';
import { localStorage } from 'global';

const PREFERENCES_KEY = 'preferences';

export const getPreferences = () => dispatch => {
  const data = localStorage.getItem(PREFERENCES_KEY);
  const preferences = JSON.parse(data) || {};
  dispatch(getPreferencesSuccess({preferences}));
}

export const setPreference = (name, value) => (dispatch, getState) => {
  const preferences = {
    ...selectPreferences(getState()),
    [name]: value,
  };

  const data = JSON.stringify(preferences);

  localStorage.setItem(PREFERENCES_KEY, data);

  dispatch(getPreferencesSuccess({preferences}));
}
