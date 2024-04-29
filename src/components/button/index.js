import React from 'react';
import './styles.css'
// import { Container } from './styles';

function Button({label}) {
  return (
    <button className='button-primary'>{label}</button>
  );
}

export default Button;