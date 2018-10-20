import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import WhiteWineFields from '../../model/WhiteWineFields';
import { SelectListGroup, CheckboxGroup, TextInput } from '../common';
import Button from 'react-bootstrap/lib/Button';

class NewWhiteWine extends Component {
  state = {
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

  onSubmit = e => {
    e.preventDefault();

    const { varietal } = this.state;

    if (varietal === '') {
      this.setState({ errors: { varietal: 'Varietal name is required' } });
    }
  };

  render() {
    const {
      varietal,
      world,
      color,
      condition,
      type,
      nonFruit,
      sweetness,
      acidity,
      alcohol,
      climate,
      errors
    } = this.state;

    return (
      <div className="container text-center">
        <h2 className="p-2">Add a white wine to the database.</h2>
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
            name="color"
            options={WhiteWineFields.world}
          />

          <SelectListGroup
            name="color"
            label="Color"
            value={color}
            onChange={this.onChange}
            options={WhiteWineFields.color}
          />

          <CheckboxGroup
            name="condition"
            label="Condition"
            values={condition}
            onChange={this.onChange}
            options={WhiteWineFields.condition}
          />

          <CheckboxGroup
            name="type"
            label="Fruit Type"
            values={type}
            onChange={this.onChange}
            options={WhiteWineFields.type}
          />

          <CheckboxGroup
            name="nonFruit"
            label="Non-Fruit"
            values={nonFruit}
            onChange={this.onChange}
            options={WhiteWineFields.nonFruit}
          />

          <SelectListGroup
            name="sweetness"
            label="Sweetness"
            value={sweetness}
            onChange={this.onChange}
            options={WhiteWineFields.structure}
          />

          <SelectListGroup
            name="acidity"
            label="Acidity"
            value={acidity}
            onChange={this.onChange}
            options={WhiteWineFields.structure}
          />

          <SelectListGroup
            name="alcohol"
            label="Alcohol"
            value={alcohol}
            onChange={this.onChange}
            options={WhiteWineFields.structure}
          />

          <SelectListGroup
            name="climate"
            label="Climate"
            value={climate}
            onChange={this.onChange}
            options={WhiteWineFields.climate}
          />

          <Button type="submit" className="guess-btn m-2">
            Add
          </Button>
        </Form>
      </div>
    );
  }
}

export default NewWhiteWine;
