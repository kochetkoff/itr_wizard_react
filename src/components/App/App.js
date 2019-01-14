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
      brand: '',
      model: '',
      gearbox: '',
      color: '',
      pageId: 1
    };

    this.incrementPageId.bind(this);
    this.decrementPageId.bind(this);
    this.getPageId.bind(this);
    this.handleOptionChange.bind(this);
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

  getPageId() {
    return this.state.pageId;
  }

  incrementPageId() {
    this.setState((state, props) => {
      return {pageId: 1 + state.pageId};
    });
  }

  decrementPageId() {
    this.setState((state, props) => {
      return {pageId: state.pageId - 1};
    });
  }

  getCheckedOptionByPageId(pageId) {

    let checkedOption = '';

    switch (pageId) {
      case 1:
        checkedOption = this.state.brand;
        break;

      case 2:
        checkedOption =  this.state.model;
        break;

      case 3:
        checkedOption =  this.state.gearbox;
        break;

      case 4:
        checkedOption =  this.state.color;
        break;

      default:
        break;
    }

    return checkedOption;
  }

  handleOptionChange(val) {
    this.setState((state, props) => {

      const pageId = state.pageId;
      let optionType = '';

      switch (pageId) {
        case 1:
          optionType = 'brand';
          break;

        case 2:
          optionType = 'model';
          break;

        case 3:
          optionType = 'gearbox';
          break;

        case 4:
          optionType = 'color';
          break;

        default:
          break;
      }

      return optionType ? {[optionType]: val} : {};
    });
  }

  render() {

    const { pageId, brand, model, gearbox, color} = this.state;

    let options = this.getOptionsByPageId(this.state.pageId);
    let checkedOption = this.getCheckedOptionByPageId(pageId);

    return (
        <div className="App">
          <Title pageId={pageId}/>
          {pageId === 5 ?
              <Result brand={brand}
                      model={model}
                      gearbox={gearbox}
                      color={color}
              /> :
              <Options pageId={pageId}
                       options={options}
                       checkedOption={checkedOption}
                       handleOptionChange={(val) => this.handleOptionChange(val)}
              />
          }
          <Controls pageId={pageId}
                    getPageId={() => this.getPageId()}
                    incrementPageId={() => this.incrementPageId()}
                    decrementPageId={() => this.decrementPageId()}
          />
        </div>
    );
  }
}

export default App;
