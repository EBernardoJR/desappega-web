import React from 'react';
import './styles.css'
// import { Container } from './styles';

function ButtonSecondary({label}) {
  return (
    <button className='button-secondary'>{label}</button>
  );
}

export default ButtonSecondary;