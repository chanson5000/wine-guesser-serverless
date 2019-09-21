import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { SelectListGroup, CheckboxGroup } from '../common';
import { RedWineFields, WhiteWineFields } from '../../model';
import { redDefaultState, whiteDefaultState } from '../../constants';

export default function GuessWine({isRedWine}) {
  const defaultWineState = isRedWine ? redDefaultState : whiteDefaultState;
  const [wine, setWine] = useState(defaultWineState);
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
  } = wine;

  function onChange(e) {
    if (e.target.type === 'checkbox') {
      setWine({
        [e.target.id]: {
          ...wine[e.target.id],
          [e.target.name]: e.target.checked
        }
      });
    } else {
      setWine({ [e.target.name]: e.target.value });
    }
  }

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
          Guess
        </Button>
      </Form>
    </div>
  );
}

GuessWine.propTypes = {
  isRedWine: PropTypes.bool.isRequired
};

GuessWine.defaultProps = {
  isRedWine: false
};
