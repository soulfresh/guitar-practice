import React from 'react';
import requestTimeout from 'nk-request-timeout';

import {
  shuffle,
  removeConsecutiveMatches,
} from './array';

import {
  notes,
  noteNames,
} from '~store';

export function generateShuffledNotes(includeSharps, previous) {
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

export function useNoteTimer(speed, useSharps) {
  const [{index, shuffledNotes, timer}, setState] = React.useReducer(
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

  const resetTimer = (useSharps) => {
    if (timer) requestTimeout.clear(timer);

    const state = {timer: null};
    if (useSharps != null) {
      state.shuffledNotes = generateShuffledNotes(useSharps, shuffledNotes);
    }

    setState(state);
  }

  React.useEffect(() => {
    const t = requestTimeout(speed * 1000, () => {
      nextNote(t);
    });
    return () => {
      requestTimeout.clear(t);
    };
  });

  return {
    note,
    nextNote,
    resetTimer,
  };
}
