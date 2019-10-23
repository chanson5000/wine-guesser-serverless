import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { RedWineFields, WhiteWineFields } from '../../model';
import { SelectListGroup, CheckboxGroup, TextInput } from '../common';
import {
  redWineFormDefaultState,
  whiteWineFormDefaultState
} from '../../constants';
import useNewWineForm from '../../hooks/use-new-wine-form';

export default function NewWine({ isRedWine }) {
  const history = useHistory();
  const initialWineFormState = isRedWine
    ? redWineFormDefaultState
    : whiteWineFormDefaultState;
  const { wineForm, handleWineFormChange, onSubmit } = useNewWineForm(
    initialWineFormState,
    isRedWine,
    history
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

NewWine.propTypes = {
  isRedWine: PropTypes.bool.isRequired
};

NewWine.defaultProps = {
  isRedWine: false
};
