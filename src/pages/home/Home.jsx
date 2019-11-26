import React, {useEffect, useReducer} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import requestTimeout from 'nk-request-timeout';

import {
  GuitarNeck,
  StringSelect,
  Slider,
  Checkbox,
} from '~components';
import {
  shuffle,
  removeConsecutiveMatches,
} from '~util/array';

import {
  notes,
  // fourOctives,
  noteNames,
  notesInAnOctive,
  // noteIndex,
  // noteAtIndex,
  // majorTriad,
  standardTuning,
  // fretsForTuning,
  // chordDefinition,
  // chordFretIndexes,
  // addOctives,
  selectPreferencesInitialized,
  selectPreferences,
  getPreferences,
  setPreference,
} from '~store';

import './Home.scss';

function generateShuffledNotes(includeSharps, previous) {
  const shuffled = shuffle( includeSharps ? notes : noteNames );
  const newNotes = removeConsecutiveMatches(shuffled);

  // If the first note of the new list matches the
  // last note of the old list, remove the first note
  // from the new list so we don't get the same letter twice.
  if (previous && newNotes[0] === previous[previous.length - 1]) {
    newNotes.shift();
  }

  // TODO Handle the case that we now have a the same note twice
  // due to removing the first note.

  return newNotes;
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
  const fretCount = Math.round(notesInAnOctive * 1.5);

  const [{index, shuffledNotes, timer}, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {},
    () => ({
      index: 0,
      shuffledNotes: generateShuffledNotes(useSharps),
      timer: null,
    })
  );
  const note = shuffledNotes[index];

  const nextNote = (timer) => {
    if (index >= shuffledNotes.length - 1) {
      setState({
        index: 0,
        shuffledNotes: generateShuffledNotes(useSharps, shuffledNotes),
        timer,
      });
    } else {
      setState({
        index: index + 1,
        timer
      });
    }
  };

  const changeSpeed = (s) => {
    setSpeed(s);
    if (timer) requestTimeout.clear(timer);
    setState({timer: null});
  };

  const changeSharps = () => {
    setUseSharps(!useSharps);
    if (timer) requestTimeout.clear(timer);
    setState({
      timer: null,
      shuffledNotes: generateShuffledNotes(!useSharps, shuffledNotes)
    });
  };

  useEffect(() => {
    const t = requestTimeout(speed * 1000, () => {
      nextNote(t);
    });
    return () => {
      requestTimeout.clear(t);
    };
  });

  // const string = Math.round(Math.random() * 3);
  // let grouped = chordDefinition(majorTriad(note), string, 0, tuning);
  // const indexes = chordFretIndexes(tuning, grouped);
  // const maxFret = Math.max.apply(Math, indexes);
  //
  // // See if we can add any additional octives.
  // if (maxFret + notesInAnOctive < fretCount) {
  //   grouped = addOctives([grouped], maxFret, fretCount);
  // }

  return (
    <div className="home">
      <div className="big-note" onClick={nextNote}>{ note }</div>
      <div className="guitar-display">
        <StringSelect
          tuning={tuning}
          selected={currentStrings}
          onChange={setCurrentStrings}
        />
        <GuitarNeck
          tuning={tuning}
          fretCount={fretCount}
          notesToShow={note}
          stringsToShow={currentStrings}
        />
      </div>
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

