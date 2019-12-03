import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  notesInAnOctive,
  standardTuning,
  selectPreferencesInitialized,
  selectPreferences,
  getPreferences,
  setPreference,
} from '~store';

import './WithPreferences.scss';

export default function WithPreferences({
  children,
}) {
  const component = React.Children.only(children);

  const dispatch = useDispatch();
  const preferencesInitialized = useSelector(selectPreferencesInitialized);
  const preferences = useSelector(selectPreferences);

  if (preferencesInitialized) {
    const tuning = preferences.tuning || standardTuning;
    const nextProps = {
      fretCount: Math.round(notesInAnOctive * 1.5),
      tuning,
      setTuning: (tuning) => dispatch(setPreference('tuning', tuning)),
      speed: preferences.speed || 3,
      setSpeed: (speed) => dispatch(setPreference('speed', speed)),
      useSharps: !!preferences.useSharps,
      setUseSharps: (sharps) => dispatch(setPreference('useSharps', sharps)),
      currentStrings: preferences.currentStrings || tuning.map((n, i) => i),
      setCurrentStrings: (strings) => dispatch(setPreference('currentStrings', strings)),
    };

    return React.cloneElement(component, nextProps);
  } else {
    dispatch(getPreferences());
    // TODO show loader
    return null;
  }
}

WithPreferences.propTypes = {
  children: PropTypes.any.isRequired,
};

