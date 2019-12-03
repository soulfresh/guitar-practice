import React from 'react';

import {
  MainLayout,
  WithPreferences,
} from '~components';

import {
  notesInAnOctive,
  majorTriad,
  chordDefinition,
  chordFretIndexes,
  addOctives,
} from '~store';

import {
  useNoteTimer,
} from '~util';

import './MajorTriads.scss';

export function MajorTriads({
  fretCount,
  tuning,
  setTuning,
  speed,
  setSpeed,
  useSharps,
  setUseSharps,
  currentStrings,
  setCurrentStrings,
}) {
  const {note, nextNote, resetTimer} = useNoteTimer(speed, useSharps);

  const changeSpeed = (s) => {
    setSpeed(s);
    resetTimer();
  };

  const changeSharps = () => {
    setUseSharps(!useSharps);
    resetTimer(!useSharps);
  };

  const string = Math.round(Math.random() * 3);
  let grouped = chordDefinition(majorTriad(note), string, 0, tuning);
  const indexes = chordFretIndexes(tuning, grouped);
  const maxFret = Math.max.apply(Math, indexes);

  // See if we can add any additional octives.
  if (maxFret + notesInAnOctive < fretCount) {
    grouped = addOctives([grouped], maxFret, fretCount);
  }

  return (
    <MainLayout
      note={note}
      notesToShow={grouped}
      onNextNote={nextNote}
      tuning={tuning}
      currentStrings={currentStrings}
      setCurrentStrings={setCurrentStrings}
      fretCount={fretCount}
      speed={speed}
      setSpeed={changeSpeed}
      useSharps={useSharps}
      setSharps={changeSharps}
    />
  );
}

export default function Connected() {
  return (
    <WithPreferences>
      <MajorTriads />
    </WithPreferences>
  );
}
