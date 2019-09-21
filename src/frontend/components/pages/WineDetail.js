import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { addWine, getWine } from '../../actions/WineRestService';
import { Form, Button } from 'react-bootstrap';
import { RedWineFields, WhiteWineFields } from '../../model';
import { redWineDefaultState, whiteWineDefaultState } from '../../constants';
import { SelectListGroup, TextInput, CheckboxGroup } from '../common';

export default function WineDetail(match, isRedWine) {
  const defaultWineState = isRedWine
    ? redWineDefaultState
    : whiteWineDefaultState;
  const [errors, setErrors] = useState({});
  const [wine, setWine] = useState(defaultWineState);

  const {
    varietal,
    world,
    color,
    condition,
    type,
    nonFruit,
    acidity,
    alcohol,
    climate,
    tannin,
    sweetness,
    confusion,
    description
  } = wine;

  useEffect(() => {
    loadWine();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();

    if (varietal === '') {
      setErrors({ varietal: 'Varietal name is required' });
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

    updateWine = isRedWine
      ? { ...updateWine, tannin }
      : { ...updateWine, sweetness };

    console.log('WineDetail>AddWine');
    console.log(updateWine);
    try {
      await addWine(updateWine, this.props.isRedWine);
    } catch (e) {
      console.log('Failed to add wine to database.');
    }
  }

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

  async function loadWine() {
    const toLoad = {
      varietal: match.params.varietal,
      world: match.params.world
    };
    try {
      const response = await getWine(toLoad, isRedWine);
      let newState = {
        varietal: response.varietal,
        world: response.world,
        descriptors: response.descriptors,
        description: response.description,
        confusion: response.confusion,
        acidity: response.acidity,
        tannin: response.tannin,
        alcohol: response.tannin,
        climate: response.climate
      };

      if (response.condition) {
        newState.condition = response.condition;
      }
      if (response.type) {
        newState.type = response.type;
      }
      if (response.nonFruit) {
        newState.nonFruit = response.nonFruit;
      }
      setWine(newState);
    } catch (e) {
      setWine({ description: 'Unable to retrieve wine details.' });
    }
  }

  return (
    <div className="container p-4 text-center">
      <h2>Wine Details</h2>
      <h3>{varietal}</h3>
      <h4>{world.charAt(0).toUpperCase() + world.slice(1)} World</h4>
      {description && <p>{description}</p>}
      {confusion && <p>{confusion}</p>}
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
          options={isRedWine ? RedWineFields.climate : WhiteWineFields.climate}
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

WineDetail.propTypes = {
  isRedWine: Proptypes.bool.isRequired,
  match: Proptypes.any
};

WineDetail.defaultProps = {
  isRedWine: false
};
