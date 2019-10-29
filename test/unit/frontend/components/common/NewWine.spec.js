import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import NewWine from '../../../../../src/frontend/components/pages/NewWine';
import {
  redWineFormDefaultState,
  whiteWineFormDefaultState
} from '../../../../../src/frontend/constants';
import RedWineFields from '../../../../../src/frontend/model/RedWineFields';
import WhiteWineFields from '../../../../../src/frontend/model/WhiteWineFields';
// import WineRestService from '../../../../../src/frontend/actions/WineRestService';

jest.mock('../../../../../src/frontend/actions/WineRestService');

function renderNewWineForm(isRedWine = false) {
  return render(
    <Router>
      <NewWine isRedWine={isRedWine} />
    </Router>
  );
}

describe('New Wine form', function() {
  describe('when red wine', () => {
    it('should render red wine header', () => {
      const { getByText } = renderNewWineForm(true);

      expect(getByText('Add a red wine to the database.')).toBeVisible();
    });
    it('should render varietal text input', () => {
      const { getByLabelText } = renderNewWineForm(true);
      const varietalTextInput = getByLabelText('Varietal');

      expect(varietalTextInput).toHaveValue(redWineFormDefaultState.varietal);
      expect(varietalTextInput).toHaveAttribute(
        'placeholder',
        'Enter a varietal...'
      );
      expect(varietalTextInput).toHaveAttribute('type', 'text');
    });
    it('should render world select list group', () => {
      const { getByLabelText } = renderNewWineForm(true);
      const worldSelectListGroup = getByLabelText('World');

      expect(worldSelectListGroup).toHaveValue(redWineFormDefaultState.world);
      // TODO: Assert options prop
      // expect(worldSelectListGroup).toHaveFormValues(RedWineFields.world);
      expect(worldSelectListGroup).toHaveAttribute('name', 'world');
    });
    it('should render color select list group', () => {
      const { getByLabelText } = renderNewWineForm(true);
      const colorSelectListGroup = getByLabelText('Color');

      expect(colorSelectListGroup).toHaveValue(redWineFormDefaultState.color);
      expect(colorSelectListGroup).toHaveAttribute('name', 'color');
    });
    it('should render condition check box group', () => {
      const { getByLabelText } = renderNewWineForm(true);
      const conditionCheckboxGroup = getByLabelText('Condition');

      expect(conditionCheckboxGroup).toHaveAttribute('type', 'checkbox');
      expect(conditionCheckboxGroup).toHaveValue(
        redWineFormDefaultState.condition
      );
      expect(conditionCheckboxGroup).toHaveAttribute(
        'options',
        RedWineFields.condition
      );
    });
  });

  describe('when white wine', () => {
    it('should render white wine header', () => {
      const { getByText } = renderNewWineForm();

      expect(getByText('Add a white wine to the database.')).toBeVisible();
    });
    it('should have a Varietal text input', () => {
      const { getByLabelText } = renderNewWineForm();
      const varietalTextInput = getByLabelText('Varietal');

      expect(varietalTextInput).toBeVisible();
      expect(varietalTextInput).toHaveValue(whiteWineFormDefaultState.varietal);
      expect(varietalTextInput).toHaveAttribute(
        'placeholder',
        'Enter a varietal...'
      );
    });
    it('should have World select list group', () => {
      const { getByLabelText } = renderNewWineForm();
      const worldSelectListGroup = getByLabelText('World');

      expect(worldSelectListGroup).toBeVisible();
      expect(worldSelectListGroup).toHaveAttribute('name', 'world');
    });
  });
});
