import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';

import './Home.scss';

export default function Home(props) {
  const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  const [speed, setSpeed] = useState(10);
  const [noteIndex, setNoteIndex] = useState();

  const randomNote = () => {
    const next = Math.round(Math.random() * (notes.length - 1));
    return next === noteIndex ? randomNote() : next;
  }

  const nextNote = () => {
    setNoteIndex(randomNote());
  };

  const changeSpeed = (s) => {
    setSpeed(s);
  }

  useEffect(() => {
    let s = !noteIndex ? 0 : speed;
    const timer = setTimeout(nextNote, s * 1000);
    return () => clearTimeout(timer);
  })

  return (
    <div className="home">
      <div className="note">{ notes[noteIndex] }</div>
      <div className="controls">
        <label>Speed
          <ReactSlider
            min={3}
            max={30}
            value={speed}
            className="slider"
            thumbClassName="thumb"
            trackClassName="track"
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            onChange={changeSpeed}
          />
        </label>
      </div>
    </div>
  );
}

Home.propTypes = {
};
