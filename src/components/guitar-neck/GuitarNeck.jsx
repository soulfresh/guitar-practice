import React from 'react';
import PropTypes from 'prop-types';
import classSet from 'react-classset';

import {
  notesInAnOctive,
  standardTuning,
  noteIndex,
  noteAtIndex,
  TuningPropType,
  StringListPropType,
} from '~store/music-theory';

import './GuitarNeck.scss';

export function Note({
  name,
  open,
  show,
}) {
  const classes = classSet({
    note: true,
    open: open,
    visible: show,
  });

  return (
    <div className={classes} data-test="note" data-note={name}>
      <span className="note-name">{ name }</span>
    </div>
  );
}

export default function GuitarNeck({
  tuning,
  fretCount,
  notesToShow,
  stringsToShow,
}) {
  tuning = tuning || standardTuning;
  fretCount = fretCount || notesInAnOctive;
  notesToShow = Array.isArray(notesToShow) ? notesToShow : [notesToShow];
  stringsToShow = stringsToShow || tuning.map((note, i) => i);

  const strings = tuning.map((openNote, s) => {
    let frets = [];
    let openNoteIndex = noteIndex(openNote);

    for (let i = 0; i < fretCount; i++) {
      const noteIndex = openNoteIndex + i;
      const noteName = noteAtIndex(noteIndex);
      const show = notesToShow.indexOf(noteName) > -1 &&
        stringsToShow.indexOf(s) > -1;

      frets.push(
        <Note
          show={show}
          name={noteName}
          open={i === 0}
          key={i}
        />
      );
    }

    return (
      <div className="string" data-open-note={openNote} key={s}>
        { frets }
      </div>
    );
  });

  return (
    <div className="guitar-neck">
      { strings }
    </div>
  );
}

GuitarNeck.propTypes = {
  tuning: TuningPropType,
  fretCount: PropTypes.number,
  notesToShow: PropTypes.oneOfType([TuningPropType, PropTypes.string]),
  stringsToShow: PropTypes.oneOfType([StringListPropType, PropTypes.number]),
};
