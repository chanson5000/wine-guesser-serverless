import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { RedWineFields, WhiteWineFields } from '../../model';
import { SelectListGroup, CheckboxGroup } from '../common';

const redDefaultState = {
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
  climate: 'cool'
};

const whiteDefaultState = {
  color: 'straw',
  condition: {
    tart: false,
    ripe: false,
    overripe: false,
    baked: false
  },
  type: {
    applePear: false,
    citrus: false,
    stone: false,
    tropical: false
  },
  nonFruit: {
    fruitBlossoms: false,
    redFlowers: false,
    hay: false,
    herbalFresh: false,
    chive: false,
    herbalDried: false,
    herbalSage: false,
    herbalTea: false,
    vegetalPyrazine: false,
    spice: false,
    terpene: false,
    wax: false,
    soap: false,
    oysterShell: false,
    botrytis: false,
    oxidative: false,
    lees: false,
    organic: false,
    inorganic: false,
    oak: false,
    bitter: false
  },
  sweetness: 'dry',
  acidity: 'moderateMinus',
  alcohol: 'moderateMinus',
  climate: 'cool'
};

class GuessWine extends Component {
  state = this.props.isRedWine ? redDefaultState : whiteDefaultState;

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

  render() {
    const { isRedWine } = this.props;
    const {
      color,
      condition,
      type,
      nonFruit,
      tannin,
      sweetness,
      acidity,
      alcohol,
      climate
    } = this.state;

    return (
      <div className="container text-center">
        <h2 className="p-4">
          Select {isRedWine ? 'red' : 'white'} wine characteristics.
        </h2>
        <Form>
          <SelectListGroup
            name="color"
            label="Color"
            value={color}
            onChange={this.onChange}
            options={isRedWine ? RedWineFields.color : WhiteWineFields.color}
          />

          <CheckboxGroup
            name="condition"
            label="Condition"
            values={condition}
            onChange={this.onChange}
            options={
              isRedWine ? RedWineFields.condition : WhiteWineFields.condition
            }
          />

          <CheckboxGroup
            name="type"
            label="Fruit Type"
            values={type}
            onChange={this.onChange}
            options={isRedWine ? RedWineFields.type : WhiteWineFields.type}
          />

          <CheckboxGroup
            name="nonFruit"
            label="Non-Fruit"
            values={nonFruit}
            onChange={this.onChange}
            options={
              isRedWine ? RedWineFields.nonFruit : WhiteWineFields.nonFruit
            }
          />

          <SelectListGroup
            name={isRedWine ? 'tannin' : 'sweetness'}
            label={isRedWine ? 'Tannin' : 'Sweetness'}
            value={isRedWine ? tannin : sweetness}
            onChange={this.onChange}
            options={
              isRedWine ? RedWineFields.structure : WhiteWineFields.structure
            }
          />

          <SelectListGroup
            name="acidity"
            label="Acidity"
            value={acidity}
            onChange={this.onChange}
            options={
              isRedWine ? RedWineFields.structure : WhiteWineFields.structure
            }
          />

          <SelectListGroup
            name="alcohol"
            label="Alcohol"
            value={alcohol}
            onChange={this.onChange}
            options={
              isRedWine ? RedWineFields.structure : WhiteWineFields.structure
            }
          />

          <SelectListGroup
            name="climate"
            label="Climate"
            value={climate}
            onChange={this.onChange}
            options={
              isRedWine ? RedWineFields.structure : WhiteWineFields.structure
            }
          />

          <Button type="submit" className="guess-btn m-2">
            Guess
          </Button>
        </Form>
      </div>
    );
  }
}

GuessWine.propTypes = {
  isRedWine: PropTypes.bool.isRequired
};

GuessWine.defaultProps = {
  isRedWine: false
};

export default GuessWine;
