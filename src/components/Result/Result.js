import React from 'react';
import './Result.css';

const Result = function ({brand = '', model = '', gearbox = '', color = ''}) {

  return (
      <ul className="Result">
        <li>Brand: {brand}</li>
        <li>Model: {model}</li>
        <li>Gearbox: {gearbox}</li>
        <li>Color: {color}</li>
      </ul>
  );

};

export default Result;
