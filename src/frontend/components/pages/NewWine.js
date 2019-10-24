import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { RedWineFields, WhiteWineFields } from '../../model';
import { SelectListGroup, CheckboxGroup, TextInput } from '../common';
import {
  redWineFormDefaultState,
  whiteWineFormDefaultState
} from '../../constants';
import useNewWineForm from '../../hooks/use-new-wine-form';
import { Redirect } from 'react-router';

function NewWine({ isRedWine }) {
  const initialWineFormState = isRedWine
    ? redWineFormDefaultState
    : whiteWineFormDefaultState;
  const { wineForm, handleWineFormChange, onSubmit, redirect } = useNewWineForm(
    initialWineFormState,
    isRedWine
  );

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
  } = wineForm;

  if (redirect) {
    return (<Redirect to={redirect}/>);
  }

  return (
    <div className="container text-center">
      <h2 className="p-2">
        Add a {isRedWine ? 'red' : 'white'} wine to the database.
      </h2>
      <Form onSubmit={onSubmit}>
        <TextInput
          label="Varietal"
          onChange={handleWineFormChange}
          value={varietal}
          placeholder="Enter a varietal..."
          name="varietal"
          type="text"
          error={errors.varietal}
        />

        <SelectListGroup
          value={world}
          label="World"
          onChange={handleWineFormChange}
          name="world"
          options={isRedWine ? RedWineFields.world : WhiteWineFields.world}
        />

        <SelectListGroup
          name="color"
          label="Color"
          value={color}
          onChange={handleWineFormChange}
          options={isRedWine ? RedWineFields.color : WhiteWineFields.color}
        />

        <CheckboxGroup
          name="condition"
          label="Condition"
          values={condition}
          onChange={handleWineFormChange}
          options={
            isRedWine ? RedWineFields.condition : WhiteWineFields.condition
          }
        />

        <CheckboxGroup
          name="type"
          label="Fruit Type"
          values={type}
          onChange={handleWineFormChange}
          options={isRedWine ? RedWineFields.type : WhiteWineFields.type}
        />

        <CheckboxGroup
          name="nonFruit"
          label="Non-Fruit"
          values={nonFruit}
          onChange={handleWineFormChange}
          options={
            isRedWine ? RedWineFields.nonFruit : WhiteWineFields.nonFruit
          }
        />

        <SelectListGroup
          name={isRedWine ? 'tannin' : 'sweetness'}
          label={isRedWine ? 'Tannin' : 'Sweetness'}
          value={isRedWine ? tannin : sweetness}
          onChange={handleWineFormChange}
          options={
            isRedWine ? RedWineFields.structure : WhiteWineFields.sweetness
          }
        />

        <SelectListGroup
          name="acidity"
          label="Acidity"
          value={acidity}
          onChange={handleWineFormChange}
          options={
            isRedWine ? RedWineFields.structure : WhiteWineFields.structure
          }
        />

        <SelectListGroup
          name="alcohol"
          label="Alcohol"
          value={alcohol}
          onChange={handleWineFormChange}
          options={
            isRedWine ? RedWineFields.structure : WhiteWineFields.structure
          }
        />

        <SelectListGroup
          name="climate"
          label="Climate"
          value={climate}
          onChange={handleWineFormChange}
          options={isRedWine ? RedWineFields.climate : WhiteWineFields.climate}
        />

        <Button type="submit" className="guess-btn m-2">
          Add
        </Button>
      </Form>
    </div>
  );
}

export default NewWine;

NewWine.propTypes = {
  isRedWine: PropTypes.bool.isRequired
};

NewWine.defaultProps = {
  isRedWine: false
};
