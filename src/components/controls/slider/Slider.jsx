import React from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';

import './Slider.scss';

export default function Slider({
  min,
  max,
  value,
  onChange,
}) {
  return (
    <ReactSlider
      min={min}
      max={max}
      value={value}
      className="slider"
      thumbClassName="thumb"
      trackClassName="track"
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      onChange={onChange}
    />
  );
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};
