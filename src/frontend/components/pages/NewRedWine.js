import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/lib/Form';
import RedWineFields from '../../model/RedWineFields';
import SelectListGroup from '../common/SelectListGroup';
import CheckboxGroup from '../common/CheckboxGroup';
import Button from 'react-bootstrap/lib/Button';

export class NewRedWine extends Component {
  constructor() {
    super();
    this.state = {
      color: '',
      condition: [],
      fruit: [],
      floral: '',
      vegetalPyrazine: '',
      vegetalTomatoLeaf: '',
      herbalTobacco: '',
      herbalMint: '',
      herbalThyme: '',
      herbalTea: '',
      herbalOregano: '',
      herbalDried: '',
      spicePepper: '',
      spiceAnise: '',
      spiceOther: '',
      coffee: '',
      cocoa: '',
      game: '',
      smoke: '',
      balsamic: '',
      carbonicMaceration: '',
      volatileOxidation: '',
      organic: '',
      inorganic: '',
      oak: '',
      tanninLow: '',
      tanninModerate: '',
      tanninModeratePlus: '',
      tanninHigh: '',
      acidLow: '',
      acidModerate: '',
      acidModeratePlus: '',
      acidHigh: '',
      alcoholLow: '',
      alcoholModerate: '',
      alcoholModeratePlus: '',
      alcoholHigh: '',
      climateCool: '',
      climateModerate: '',
      climateWarm: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const newWine = {};
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container text-center">
        <h2 className="p-2">Add a red wine to the database.</h2>
        <Form onSubmit={this.onSubmit}>
          <SelectListGroup
            controlId="color"
            label="Color"
            value={this.state.color}
            options={RedWineFields.color}
          />

          <CheckboxGroup
            controlId="condition"
            label="Condition"
            values={this.state.condition}
            options={RedWineFields.condition}
          />

          <CheckboxGroup
            controlId="fruit"
            label="Fruit Type"
            values={this.state.fruit}
            options={RedWineFields.type}
          />

          <Button type="submit" className="guess-btn m-2">
            Add
          </Button>
        </Form>
      </div>
    );
  }
}
