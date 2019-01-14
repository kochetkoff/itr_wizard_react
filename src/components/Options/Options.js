import React from 'react';
import './Options.css';

const Options = function ({pageId, options, handleOptionChange, checkedOption}) {

  return (
      <div className="Options">
        {options.map(option => {

          return <label key={option}>
            <input
                type="radio"
                value={option}
                checked={option === checkedOption}
                name={pageId}
                onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        })
        }
      </div>
  );
};

export default Options;
