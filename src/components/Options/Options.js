import React from 'react';
import './Options.css';

const Options = function ({pageId, options, handleOptionChange}) {

  return (
      <div className="Options">
        { options.map(option => <label key={option}><input type="radio" value={option} name={pageId} onChange={() => handleOptionChange(option)} /> {option} </label>) }
      </div>
  );
};

export default Options;
