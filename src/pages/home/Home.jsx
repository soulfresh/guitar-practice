import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  GuitarNeck,
  StringSelect,
  Slider,
  Checkbox,
} from '~components';

import {
  notes,
  fourOctives,
  noteNames,
  notesInAnOctive,
  noteIndex as getNoteIndex,
  noteAtIndex,
  standardTuning,
  fretsForTuning,
  selectPreferencesInitialized,
  selectPreferences,
  getPreferences,
  setPreference,
} from '~store';

import './Home.scss';

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  a = a.slice();
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export function Home({
  tuning,
  setTuning,
  speed,
  setSpeed,
  useSharps,
  setUseSharps,
  currentStrings,
  setCurrentStrings,
}) {
  const generateShuffledNotes = (includeSharps) =>
    shuffle( includeSharps ? fourOctives : noteNames );

  const [shuffledNotes, setShuffledNotes] = useState(generateShuffledNotes(useSharps));
  const [noteIndex, setNoteIndex] = useState(
    getNoteIndex(shuffledNotes[0])
  );
  const note = noteAtIndex(noteIndex);

  const randomNote = () => {
    const nextNote = shuffledNotes.pop();
    const next = getNoteIndex(nextNote);

    if (shuffledNotes.length === 0) {
      setShuffledNotes(generateShuffledNotes(useSharps));
    }

    return next === noteIndex ? randomNote() : next;
  }

  const nextNote = () => {
    setNoteIndex(randomNote());
  };

  const changeSpeed = (s) => {
    setSpeed(s);
  };

  const changeSharps = () => {
    setUseSharps(!useSharps);
    setShuffledNotes(generateShuffledNotes(!useSharps));
  };

  useEffect(() => {
    let s = !noteIndex ? 0 : speed;
    const timer = setTimeout(nextNote, s * 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="home">
      <div className="big-note" onClick={nextNote}>{ note }</div>
      <div className="controls">
        <label>Speed
          <Slider
            min={1}
            max={30}
            value={speed}
            onChange={changeSpeed}
          />
        </label>
        <label>Include Sharps
          <Checkbox value={useSharps} onChange={changeSharps} />
        </label>
      </div>
      <div className="guitar-display">
        <StringSelect
          tuning={tuning}
          selected={currentStrings}
          onChange={setCurrentStrings}
        />
        <GuitarNeck
          tuning={tuning}
          fretCount={notesInAnOctive * 1.5}
          notesToShow={notes}
          stringsToShow={currentStrings}
        />
      </div>
    </div>
  );
}

Home.propTypes = {
}

export default function Connected() {
  const dispatch = useDispatch();
  const preferencesInitialized = useSelector(selectPreferencesInitialized);
  const preferences = useSelector(selectPreferences);

  if (preferencesInitialized) {
    const tuning = preferences.tuning || standardTuning;
    const nextProps = {
      tuning,
      setTuning: (tuning) => dispatch(setPreference('tuning', tuning)),
      speed: preferences.speed || 3,
      setSpeed: (speed) => dispatch(setPreference('speed', speed)),
      useSharps: !!preferences.useSharps,
      setUseSharps: (sharps) => dispatch(setPreference('useSharps', sharps)),
      currentStrings: preferences.currentStrings || tuning.map((n, i) => i),
      setCurrentStrings: (strings) => dispatch(setPreference('currentStrings', strings)),
    };

    return <Home {...nextProps} />
  } else {
    dispatch(getPreferences());
    // TODO show loader
    return null;
  }
}

