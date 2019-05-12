import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { addWine, getWine } from '../../actions/WineRestService';
import { Form, Button } from 'react-bootstrap';
import { RedWineFields, WhiteWineFields } from '../../model';
import {
  SelectListGroup,
  CheckboxGrooup,
  TextInput,
  CheckboxGroup
} from '../common';

const redWineDefaultState = {
  varietal: '',
  world: 'old',
  color: 'garnet',
  confusion: '',
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
  confusion: '',
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

class WineDetail extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.isRedWine
      ? redWineDefaultState
      : whiteWineDefaultState;
  }

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

    let updateWine = {
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

    updateWine = this.props.isRedWine
      ? { ...updateWine, tannin }
      : { ...updateWine, sweetness };

    console.log('WineDetail>AddWine');
    console.log(updateWine);
    try {
      await addWine(updateWine, this.props.isRedWine);
    } catch (e) {
      console.log('Failed to add wine to database.');
    }
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
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  componentDidMount() {
    this.loadWine();
  }

  loadWine = () => {
    const wine = {
      varietal: this.props.match.params.varietal,
      world: this.props.match.params.world
    };
    getWine(wine, this.props.isRedWine)
      .then(response => {
        this.setState({
          varietal: response[0].varietal,
          world: response[0].world,
          descriptors: response[0].descriptors,
          description: response[0].description,
          confusion: response[0].confusion
        });
      })
      .catch(() => {
        this.setState({
          description: 'Unable to retrieve wine details.'
        });
      });
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
      description,
      confusion,
      errors
    } = this.state;
    return (
      <div className="container p-4 text-center">
        <h2>Wine Details</h2>
        <h3>{varietal}</h3>
        <h4>{world.charAt(0).toUpperCase() + world.slice(1)} World</h4>
        {description && <p>{description}</p>}
        {confusion && <p>{confusion}</p>}
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
            Save
          </Button>
        </Form>
        {/*<div className="card card-body mb-3">*/}
        {/*  <ul>*/}
        {/*    {descriptors &&*/}
        {/*    Object.keys(descriptors).map(descriptor => (*/}
        {/*      <li key={descriptor}>{descriptor}</li>*/}
        {/*    ))}*/}
        {/*  </ul>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <ul>*/}
        {/*    {Object.keys(RedWine).map(entry => (*/}
        {/*      <li key={entry}>{entry}</li>*/}
        {/*    ))}*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </div>
    );
  }
}

WineDetail.propTypes = {
  isRedWine: Proptypes.bool.isRequired,
  match: Proptypes.any
};

WineDetail.defaultProps = {
  isRedWine: false
};

export default connect()(WineDetail);
