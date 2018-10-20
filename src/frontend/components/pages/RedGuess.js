import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import RedWineFields from '../../model/RedWineFields';
import { SelectListGroup, CheckboxGroup } from '../common';
import Button from 'react-bootstrap/lib/Button';

class RedGuess extends Component {
  state = {
    color: '',
    tannin: '',
    acidity: '',
    alcohol: '',
    climate: ''
  };

  onChange = e => {
    console.log('Value: ' + e.target.value);
    this.setState({[e.target.controlId]: e.target.value});
  };

  render() {
    const { color, tannin, acidity, alcohol, climate } = this.state;

    return (
      <div className="container text-center">
        <h2 className="p-2">Select red wine characteristics.</h2>
        <Form>
          <SelectListGroup
            name="color"
            label="Color"
            value={color}
            onChange={this.onChange}
            options={RedWineFields.color}
          />

          <CheckboxGroup
            controlId="condition"
            label="Condition"
            onChange={this.onChange}
            options={RedWineFields.condition}
          />

          <CheckboxGroup
            controlId="fruit"
            label="Fruit Type"
            onChange={this.onChange}
            options={RedWineFields.type}
          />

          <CheckboxGroup
            controlId="nonFruit"
            label="Non-Fruit"
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
