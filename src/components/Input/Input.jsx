import React from 'react';
import s from './Input.module.css';

const input = (props) => {
  return (
    <input
      type="text"
      value={props.value}
      className={s.input}
      onChange={(e) => props.onChange(e.target.value)}
      onKeyDown={props.onKeyDown}
      placeholder={props.placeholder}
    />
  );
};

export default input;