import React, { useState, useReducer } from 'react';

export default function useNewWineForm(initialWineState) {
  const [state, dispatch] = useReducer(wineReducer, initialWineState);

  return state;
}

function wineReducer(state, wine) {
  switch (wine.name) {
    case 'varietal':
      return { varietal: wine.value };
    case 'world':
      return { world: wine.value };
    case 'color':
      return { color: wine.value };
    case 'condition':
      return { condition: wine.value };
    case 'type':
      return { type: wine.value };
    case 'tannin':
      return { tannin: wine.value };
    case 'nonFruit':
      return { nonFruit: wine.value };
    case 'sweetness':
      return { sweetness: wine.value };
  }
}
