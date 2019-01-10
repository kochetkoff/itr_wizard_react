import React, {Component} from 'react';
import './App.css';

import Title from '../Title';
import Options from '../Options';
import Controls from '../Controls';
import Result from '../Result';
import cars from '../../data/cars.js';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      brand: 'Mazda',
      model: '',
      gearbox: '',
      color: '',
      pageId: 1
    };
  }

  getBrands() {
    return cars.brands.map(item => item.brand);
  }

  getModels() {

    let models = [];

    cars.brands.forEach(item => {
      if (item.brand.toLowerCase() === this.state.brand.toLowerCase()) {
        models = item.models;
      }
    });

    return models;
  }

  getGearboxTypes() {
    return cars.gearboxTypes;
  }

  getColors() {
    return cars.colors;
  }

  getOptionsByPageId(id) {

    switch (id) {

      case 1:
        return this.getBrands();

      case 2:
        return this.getModels();

      case 3:
        return this.getGearboxTypes();

      case 4:
        return this.getColors();

      default:
        return [];
    }
  }

  render() {

    let options = this.getOptionsByPageId(this.state.pageId);

    return (
        <div className="App">
          <Title pageId={this.state.pageId}/>
          {this.state.pageId === 5 ?
              <Result/> :
              <Options pageId={this.state.pageId} options = {options} />
          }
          <Controls pageId={this.state.pageId}/>
        </div>
    );
  }
}

export default App;
