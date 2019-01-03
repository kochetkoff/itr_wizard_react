import React from 'react';
import './Controls.css';

const Controls = function ({pageId}) {

  return (
      <div className="Controls">
        {pageId !== 1 && <button type='button' className='prev'>prev</button>}
        {pageId !== 5 && <button type='button' className='next'>next</button>}
      </div>
  );

};

export default Controls;
