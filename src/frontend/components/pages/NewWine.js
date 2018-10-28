import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { RedWineFields, WhiteWineFields } from '../../model';
import { addWine } from '../../actions/wineActions';
import { SelectListGroup, CheckboxGroup, TextInput } from '../common';

const redWineDefaultState = {
  varietal: '',
  world: 'old',
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
  climate: 'moderateMinus',
  errors: {}
};

const whiteWineDefaultState = {
  varietal: '',
  world: 'new',
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
  climate: 'cool',
  errors: {}
};

class NewWine extends Component {
  state = this.props.isRedWine ? redWineDefaultState : whiteWineDefaultState;

  onSubmit = async e => {
    e.preventDefault();

    const {
      varietal,
      world,
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

    if (varietal === '') {
      this.setState({ errors: { varietal: 'Varietal name is required' } });
      return;
    }

    let newWine = {
      varietal,
      world,
      color,
      condition,
      type,
      nonFruit,
      acidity,
      alcohol,
      climate
    };

    newWine = this.props.isRedWine
      ? { ...newWine, tannin }
      : { ...newWine, sweetness };

    await this.props.addWine(newWine, this.props.isRedWine);
    const pushRoute = this.props.isRedWine ? '/wines/red' : '/wines/white';
    this.props.history.push(pushRoute);
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

  render() {
    const { isRedWine } = this.props;

    const {
      varietal,
      world,
      color,
      condition,
      type,
      nonFruit,
      tannin,
      sweetness,
      acidity,
      alcohol,
      climate,
      errors
    } = this.state;

    return (
      <div className="container text-center">
        <h2 className="p-2">
          Add a {isRedWine ? 'red' : 'white'} wine to the database.
        </h2>
        <Form onSubmit={this.onSubmit}>
          <TextInput
            label="Varietal"
            onChange={this.onChange}
            value={varietal}
            placeholder="Enter a varietal..."
            name="varietal"
            type="text"
            error={errors.varietal}
          />

          <SelectListGroup
            value={world}
            label="World"
            onChange={this.onChange}
            name="world"
            options={isRedWine ? RedWineFields.world : WhiteWineFields.world}
          />

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
            options={isRedWine ? RedWineFields.type : WhiteWineFields.condition}
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
            name={isRedWine ? 'Tannin' : 'Sweetness'}
            label={isRedWine ? 'tannin' : 'sweetness'}
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
            Add
          </Button>
        </Form>
      </div>
    );
  }
}

NewWine.propTypes = {
  addWine: PropTypes.func.isRequired,
  isRedWine: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

NewWine.defaultProps = {
  isRedWine: false
};

export default connect(
  null,
  { addWine }
)(NewWine);
