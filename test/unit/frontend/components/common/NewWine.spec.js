import React from 'react';
import { render } from '@testing-library/react';
import NewWine from '../../../../../src/frontend/components/pages/NewWine';
// import WineRestService from '../../../../../src/frontend/actions/WineRestService';

jest.mock('../../../../../src/frontend/actions/WineRestService');

function renderNewWineForm(isRedWine = false) {
  return render(<NewWine isRedWine={isRedWine}/>);
}

describe('New Wine form', function() {
  it('should render header if red wine', function() {
    const { getByText } = renderNewWineForm(true);

    expect(getByText('Add a red wine to the database.')).toBeVisible();
  });
  it('should render header if white wine', function() {
    const { getByText } = renderNewWineForm();

    expect(getByText('Add a white wine to the database.')).toBeVisible();
  });
});
