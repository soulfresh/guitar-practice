import React from 'react';
import PropTypes from 'prop-types';

import {
  GuitarNeck,
  StringSelect,
  Slider,
  Checkbox,
} from '~components';

import './MainLayout.scss';

export default function MainLayout({
  note,
  notesToShow,
  onNextNote,
  tuning,
  currentStrings,
  setCurrentStrings,
  fretCount,
  speed,
  setSpeed,
  useSharps,
  setSharps,
}) {
  return (
    <div className="main-layout">
      <div className="big-note" onClick={onNextNote}>{ note }</div>
      <div className="guitar-display">
        <StringSelect
          tuning={tuning}
          selected={currentStrings}
          onChange={setCurrentStrings}
        />
        <GuitarNeck
          tuning={tuning}
          fretCount={fretCount}
          notesToShow={notesToShow}
          stringsToShow={currentStrings}
        />
      </div>
      <div className="controls">
        <label>Speed
          <Slider
            min={1}
            max={30}
            value={speed}
            onChange={setSpeed}
          />
        </label>
        <label>Include Sharps
          <Checkbox value={useSharps} onChange={setSharps} />
        </label>
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  note: PropTypes.string.isRequired,
  // notesToShow: PropTypes.oneOfType([TuningPropType, PropTypes.string]),
  onNextNote: PropTypes.func.isRequired,
  tuning: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStrings: PropTypes.arrayOf(PropTypes.number).isRequired,
  setCurrentStrings: PropTypes.func.isRequired,
  fretCount: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  setSpeed: PropTypes.func.isRequired,
  useSharps: PropTypes.bool.isRequired,
  setSharps: PropTypes.func.isRequired,
};

