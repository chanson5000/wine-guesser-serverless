import React, {useState, useReducer} from 'react';

export default function useWineForm(defaultWineState) {
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
  } = defaultWineState;

}

function wineReducer(state, property) {
  switch (property) {
    case 'varietal':
      return {varietal: property};
    case 'world':
      return {world: property};

  }
}