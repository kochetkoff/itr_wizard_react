import React, {Component} from 'react';
import './App.css';

import Title from '../Title';
import Options from '../Options';
import Controls from '../Controls';
import Result from '../Result';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      brand: '',
      model: '',
      gearbox: '',
      color: '',
      pageId: 1
    };
  }

  render() {
    return (
        <div className="App">
          <Title pageId={this.state.pageId}/>
          <Options />
          <Controls />
          <Result />
        </div>
    );
  }
}

export default App;
