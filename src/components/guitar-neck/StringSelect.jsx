import React from 'react';
import PropTypes from 'prop-types';

import {
  TuningPropType,
  StringListPropType,
} from '~store';
import {
  Checkbox,
} from '~components';

import './StringSelect.scss';

export default function StringSelect({
  tuning,
  selected,
  onChange,
}) {
  const selectString = (index) => {
    const nextStrings = selected.slice();
    const currentIndex = selected.indexOf(index);

    if (currentIndex > -1) {
      nextStrings.splice(currentIndex, 1);
    } else {
      nextStrings.push(index);
    }

    onChange(nextStrings);
  };

  const strings = tuning.map((openNote, i) => {
    return <Checkbox
      key={i}
      value={selected.indexOf(i) > -1}
      onChange={() => selectString(i)}
    />
  });

  return (
    <div className="string-select">
      { strings }
    </div>
  );
}

StringSelect.propTypes = {
  tuning: TuningPropType.isRequired,
  selected: StringListPropType.isRequired,
  onChange: PropTypes.func.isRequired,
};
