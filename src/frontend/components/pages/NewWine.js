import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { RedWineFields, WhiteWineFields } from '../../model';
import { addWine } from '../../actions/WineRestService';
import { SelectListGroup, CheckboxGroup, TextInput } from '../common';
import { redWineDefaultState, whiteWineDefaultState } from '../../constants';

export default function NewWine(isRedWine) {
  const defaultWineState = isRedWine ? redWineDefaultState : whiteWineDefaultState;
  const [errors, setErrors] = useState({});
  const [wine, setWine] = useState(defaultWineState);
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
  } = wine;

  async function onSubmit(e) {
    e.preventDefault();

    if (varietal === '') {
      setErrors({ varietal: 'Varietal name is required' });
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

    newWine = isRedWine ? { ...newWine, tannin } : { ...newWine, sweetness };

    try {
      console.log('Adding wine to the database...');
      console.log(newWine);
      await addWine(newWine, isRedWine);
    } catch (e) {
      console.log('Failed to add wine to database.');
    }
    // await this.props.addWine(newWine, this.props.isRedWine);
    const pushRoute = isRedWine ? '/wines/red' : '/wines/white';
    this.props.history.push(pushRoute);
  }

  function onChange(e) {
    if (e.target.type === 'checkbox') {
      setWine({
        [e.target.id]: {
          ...this.state[e.target.id],
          [e.target.name]: e.target.checked
        }
      });
    } else {
      setWine({ [e.target.name]: e.target.value });
    }
  }

  return (
    <div className="container text-center">
      <h2 className="p-2">
        Add a {isRedWine ? 'red' : 'white'} wine to the database.
      </h2>
      <Form onSubmit={onSubmit}>
        <TextInput
          label="Varietal"
          onChange={onChange}
          value={varietal}
          placeholder="Enter a varietal..."
          name="varietal"
          type="text"
          error={errors.varietal}
        />

        <SelectListGroup
          value={world}
          label="World"
          onChange={onChange}
          name="world"
          options={isRedWine ? RedWineFields.world : WhiteWineFields.world}
        />

        <SelectListGroup
          name="color"
          label="Color"
          value={color}
          onChange={onChange}
          options={isRedWine ? RedWineFields.color : WhiteWineFields.color}
        />

        <CheckboxGroup
          name="condition"
          label="Condition"
          values={condition}
          onChange={onChange}
          options={
            isRedWine ? RedWineFields.condition : WhiteWineFields.condition
          }
        />

        <CheckboxGroup
          name="type"
          label="Fruit Type"
          values={type}
          onChange={onChange}
          options={isRedWine ? RedWineFields.type : WhiteWineFields.type}
        />

        <CheckboxGroup
          name="nonFruit"
          label="Non-Fruit"
          values={nonFruit}
          onChange={onChange}
          options={
            isRedWine ? RedWineFields.nonFruit : WhiteWineFields.nonFruit
          }
        />

        <SelectListGroup
          name={isRedWine ? 'tannin' : 'sweetness'}
          label={isRedWine ? 'Tannin' : 'Sweetness'}
          value={isRedWine ? tannin : sweetness}
          onChange={onChange}
          options={
            isRedWine ? RedWineFields.structure : WhiteWineFields.sweetness
          }
        />

        <SelectListGroup
          name="acidity"
          label="Acidity"
          value={acidity}
          onChange={onChange}
          options={
            isRedWine ? RedWineFields.structure : WhiteWineFields.structure
          }
        />

        <SelectListGroup
          name="alcohol"
          label="Alcohol"
          value={alcohol}
          onChange={onChange}
          options={
            isRedWine ? RedWineFields.structure : WhiteWineFields.structure
          }
        />

        <SelectListGroup
          name="climate"
          label="Climate"
          value={climate}
          onChange={onChange}
          options={
            isRedWine ? RedWineFields.climate : WhiteWineFields.climate
          }
        />

        <Button type="submit" className="guess-btn m-2">
          Add
        </Button>
      </Form>
    </div>
  );
}

NewWine.propTypes = {
  isRedWine: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

NewWine.defaultProps = {
  isRedWine: false
};
