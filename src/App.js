import React, { useState, useEffect } from 'react';
import toastr from 'toastr';

import './App.css'

const App = () => {
  const [hexaDecimal, setHexaDecimal] = useState('');
  const [binary, setBinary] = useState('');

  useEffect(() => {
    setHexaDecimal(convertToHexaDecimal);
  }, [binary]);  

  const convertToHexaDecimal = () => {

    const binaryArray = binary ? binary.split('').map(Number).reverse() : [0];
    
    const result = binaryArray && binaryArray.reduce(
      (accumulator, currentValue, idx) => {
        return accumulator + currentValue * Math.pow(2, idx)
      }
    );
      
    return result;
  }

  return (
    <div className="container">
      <h1>Bin2DeC</h1>
      <div>
        <input 
          placeholder="Binary Here" 
          value={binary} 
          onChange={e => {
            e.target.value.match(/^[0-1]+$/g) || e.target.value === '' 
            ? setBinary(e.target.value) : toastr.info("You only can use 0 and 1");
          }}
        />
      </div>
      <div>
        <h2>
          {hexaDecimal}
        </h2>
      </div>
    </div>
  );
}

export default App;