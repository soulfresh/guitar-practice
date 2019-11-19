import PropTypes from 'prop-types';

export const noteNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
export const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
export const fourOctives = notes.concat(notes, notes, notes);
export const notesInAnOctive = notes.length;

export const standardTuning = ['E', 'A', 'D', 'G', 'B', 'E'];

export function noteIndex(note, list) {
  list = list || notes;
  return list.indexOf(note);
}

export function noteAtIndex(index, list) {
  list = list || fourOctives;
  return list[index];
}

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
