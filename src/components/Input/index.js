import React from 'react';
import './styles.css'
// import { Container } from './styles';

function Input({ placeholder }) {
  return (
    <div className="input">
        <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default Input;