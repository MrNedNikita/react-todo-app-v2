import React from 'react';
import s from './Button.module.css';

const Button = (props) => {
  return (
    <button 
      className={s.button} 
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;