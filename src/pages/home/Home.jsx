import React from 'react';

import {
  MainLayout,
  WithPreferences,
} from '~components';

import {
  useNoteTimer,
} from '~util';

import './Home.scss';

export function Home({
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

  return (
    <MainLayout
      note={note}
      notesToShow={note}
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
      <Home />
    </WithPreferences>
  );
}

