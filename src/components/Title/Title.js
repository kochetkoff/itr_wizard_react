import React from 'react';
import './Title.css';
import pages from '../../data/pages';


const Title = function ({pageId = 1}) {

  const title = pages[pageId] ? pages[pageId].title : pages[1].title;

  return (
      <h1 className="Title">
        {title}
      </h1>
  );
};

export default Title;
