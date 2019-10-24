import { useState } from 'react';
import { addWine } from '../actions/WineRestService';

export default function useNewWineForm(initialWineFormState, isRedWine) {
  const [wineForm, setWineForm] = useState(initialWineFormState);
  const [errors, setErrors] = useState({});
  const [redirect, setRedirect] = useState();
  // const [state, dispatch] = useReducer(wineReducer, initialWineFormState);

  function handleWineFormChange(e) {
    console.log(e.target.value);
    console.log(e.target.type);
    console.log(e.target.id);

    if (e.target.type === 'checkbox') {
      // dispatch({
      //   property: []
      // });
      setWineForm({
        [e.target.id]: {
          ...this.state[e.target.id],
          [e.target.name]: e.target.checked
        }
      });
    } else {
      // dispatch({
      //   property: e.target.name,
      //   value: e.target.value
      // });
      setWineForm({ [e.target.name]: e.target.value });
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
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
      sweetness
    } = wineForm;

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
    setRedirect(pushRoute);
  }

  return { wineForm, handleWineFormChange, errors, onSubmit, redirect };
}
//
// function wineReducer(state, wine) {
//   switch (wine.property) {
//     case 'varietal':
//       return { varietal: wine.value };
//     case 'world':
//       return { world: wine.value };
//     case 'color':
//       return { color: wine.value };
//     case 'condition':
//       return { condition: wine.value };
//     case 'type':
//       return { type: wine.value };
//     case 'tannin':
//       return { tannin: wine.value };
//     case 'nonFruit':
//       return { nonFruit: wine.value };
//     case 'sweetness':
//       return { sweetness: wine.value };
//     default:
//       throw new Error(`Invalid wine property, ${wine.name}.`);
//   }
// }
