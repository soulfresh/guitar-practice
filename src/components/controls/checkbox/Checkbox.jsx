import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as Circle} from '~assets/icons/circle.svg';
import {ReactComponent as Check} from '~assets/icons/check-circle.svg';

import './Checkbox.scss';

export default function Checkbox({
  value,
  onChange,
}) {
  const icon = value
    ? <Check className="icon checked" />
    : <Circle className="icon unchecked" />;

  return (
    <span className="checkbox">
      <input type="checkbox" onChange={onChange} />
      {icon}
    </span>
  );
}

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
