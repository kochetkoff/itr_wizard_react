import React, {Component} from 'react';
import './App.css';

import Title from '../Title';
import Options from '../Options';
import Controls from '../Controls';
import Result from '../Result';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Title />
          <Options />
          <Controls />
          <Result />
        </div>
    );
  }
}

export default App;
