import React from 'react';
import './Options.css';

const Options = function ({pageId, options}) {

  return (
      <div className="Options">
        { options.map(option => <label key={option}><input type="radio" value={option} name={pageId}/> {option} </label>) }
      </div>
  );
};

export default Options;
