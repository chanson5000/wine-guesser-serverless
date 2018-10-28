import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import RedWineFields from '../../model/RedWineFields';
import { SelectListGroup, CheckboxGroup } from '../common';

class RedGuess extends Component {
  state = {
    color: 'garnet',
    condition: {
      tart: false,
      ripe: false,
      overripe: false,
      baked: false
    },
    type: {
      red: false,
      black: false,
      blue: false
    },
    nonFruit: {
      floral: false,
      vegetalPyrazine: false,
      vegetalTomato: false,
      herbalTobacco: false,
      herbalMint: false,
      herbalThyme: false,
      herbalTea: false,
      herbalOregano: false,
      herbalDried: false,
      spicePepper: false,
      spiceAnise: false,
      spiceOther: false,
      coffee: false,
      cocoa: false,
      game: false,
      smoke: false,
      balsamic: false,
      carbonicMaceration: false,
      volatileAcidity: false,
      oxidization: false,
      organic: false,
      inorganic: false,
      oak: false
    },
    tannin: 'moderateMinus',
    acidity: 'moderateMinus',
    alcohol: 'moderateMinus',
    climate: 'moderateMinus'
  };

  onChange = e => {
    if (e.target.type === 'checkbox') {
      this.setState({
        [e.target.id]: {
          ...this.state[e.target.id],
          [e.target.name]: e.target.checked
        }
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  // // Debugging
  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  render() {
    const {
      color,
      condition,
      type,
      nonFruit,
      tannin,
      acidity,
      alcohol,
      climate
    } = this.state;

    return (
      <div className="container text-center">
        <h2 className="p-4">Select red wine characteristics.</h2>
        <Form>
          <SelectListGroup
            name="color"
            label="Color"
            value={color}
            onChange={this.onChange}
            options={RedWineFields.color}
          />

          <CheckboxGroup
            name="condition"
            label="Condition"
            values={condition}
            onChange={this.onChange}
            options={RedWineFields.condition}
          />

          <CheckboxGroup
            name="type"
            label="Fruit Type"
            values={type}
            onChange={this.onChange}
            options={RedWineFields.type}
          />

          <CheckboxGroup
            name="nonFruit"
            label="Non-Fruit"
            values={nonFruit}
            onChange={this.onChange}
            options={RedWineFields.nonFruit}
          />

          <SelectListGroup
            name="tannin"
            label="Tannin"
            value={tannin}
            onChange={this.onChange}
            options={RedWineFields.structure}
          />

          <SelectListGroup
            name="acidity"
            label="Acidity"
            value={acidity}
            onChange={this.onChange}
            options={RedWineFields.structure}
          />

          <SelectListGroup
            name="alcohol"
            label="Alcohol"
            value={alcohol}
            onChange={this.onChange}
            options={RedWineFields.structure}
          />

          <SelectListGroup
            name="climate"
            label="Climate"
            value={climate}
            onChange={this.onChange}
            options={RedWineFields.structure}
          />

          <Button type="submit" className="guess-btn m-2">
            Guess
          </Button>
        </Form>
      </div>
    );
  }
}

export default RedGuess;
