import PropTypes from 'prop-types';

export const noteNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
export const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
export const fourOctives = notes.concat(notes, notes, notes);
export const notesInAnOctive = notes.length;

export const standardTuning = ['E', 'A', 'D', 'G', 'B', 'E'];

/*
 * Get the index of a note name in the list of note
 * names provided. You can pass a startIndex to look
 * for the note past the first octive.
 */
export function noteIndex(note, list, startIndex = 0) {
  list = list || notes;
  return list.indexOf(note, startIndex);
}

/*
 * Get the index of a note name in the provided list.
 * If you don't pass a list, the `fourOctives` list
 * is used.
 */
export function noteAtIndex(index, list) {
  list = list || fourOctives;
  return list[index];
}

/*
 * Get a map of all the notes on a fretboard
 * for a specific tuning. The return value
 * is a nested array where the first level
 * matches a string in the tuning and the
 * nested level represents the sequence of
 * notes on that string.
 */
export function fretsForTuning(tuning) {
  return tuning.map((openNote, stringIndex) => {
    const stringNotes = [];
    const start = noteIndex(openNote);
    const end = start + notesInAnOctive;
    for (let i = start; i < end; i++) {
      stringNotes.push({
        note: noteAtIndex(i),
        string: stringIndex,
        octive: 1,
      })
    }
    return stringNotes;
  });
}

/*
 * Determine the index of each note in a chord
 * based on the given tuning.
 */
export function chordFretIndexes(tuning, chord) {
  return chord.map((n) => {
    const openNoteIndex = noteIndex(tuning[n.string]);
    return noteIndex(n.note, fourOctives, openNoteIndex) - openNoteIndex;
  });
}

/*
 * Get a list of note definition objects
 * from a list of note names ensuring that the
 * notes fall on consecutive strings and are
 * within a reasonable fret span.
 *
 * Ex:
 * ['A', 'B'] => [{note: 'A', string: 0, octive: 0}, {...}]
 */
export function chordDefinition(notes, string = 0, octive = 0, tuning = standardTuning, maxStretch = 5) {
  const chord = notes.map((n, i) => ({
    note: n,
    string: string + i,
    octive: octive,
  }));
  // TODO Do I need to make this copy?
  let grouped = chord.slice();

  // Determine the fret index of each note.
  const indexes = chordFretIndexes(tuning, chord)
  const minFret = Math.min.apply(this, indexes);
  const maxFret = Math.max.apply(this, indexes);

  // If the notes aren't close together,
  // calculate the octives for each note that
  // would keep them close to the highest note
  // on the fretboard.
  if (maxFret - minFret > maxStretch) {
    grouped = chord.map((n, i) => {
      const index = indexes[i];
      if (index < maxFret - maxStretch) {
        n.octive += 1;
      }
      return n;
    });
  }

  return grouped;
}

export function addOctives(chords, maxFret, fretCount) {
  maxFret += notesInAnOctive;

  // If we can add another chord.
  if (maxFret < fretCount) {
    const chord = chords[chords.length - 1];
    if (chord) {
      const nextOctive = chord.map(
        (n) => ({...n, octive: n.octive + 1})
      );
      chords.push(nextOctive);
      return addOctives(chords, maxFret, fretCount);
    }
  }

  return chords;
};

export function major3rd(root) {
  return fourOctives[ noteIndex(root) + 4 ];
}

export function minor3rd(root) {
  return fourOctives[ noteIndex(root) + 3 ];
}

export function perfect5th(root) {
  return minor3rd(major3rd(root));
}

export function diminished5th(root) {
  return minor3rd(minor3rd(root));
}

export function augmented5th(root) {
  return major3rd(major3rd(root));
}

export function majorTriad(root) {
  return [root, major3rd(root), perfect5th(root)];
}

export function minorTriad(root) {
  return [root, minor3rd(root), perfect5th(root)];
}

export function dimishedTriad(root) {
  return [root, minor3rd(root), diminished5th(root)];
}

export function augmentedTriad(root) {
  return [root, major3rd(root), augmented5th(root)];
}

export const NotePropType = PropTypes.shape({
  note: PropTypes.string.isRequired,
  string: PropTypes.number,
  octive: PropTypes.number,
});
export const TuningPropType = PropTypes.arrayOf(PropTypes.string);
export const StringListPropType = PropTypes.arrayOf(PropTypes.number);
