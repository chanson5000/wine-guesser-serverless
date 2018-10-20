import React from 'react';
import { shallow } from 'enzyme';
// import Form from 'react-bootstrap/lib/Form';
// import Row from 'react-bootstrap/lib/Row';
// import Col from 'react-bootstrap/lib/Col';
import Chance from 'chance';

import SelectListGroup from '../../../../../src/frontend/components/common/SelectListGroup';

const chance = new Chance();

describe('<SelectListGroup/>', () => {
  let wrapper, label, name, options, value, onChange;

  const renderComponent = () => {
    label = chance.string();
    name = chance.string();
    options = [
      { value: chance.string(), label: chance.string() },
      { value: chance.string(), label: chance.string() }
    ];
    value = chance.string();
    onChange = jest.fn();

    wrapper = shallow(
      <SelectListGroup
        value={value}
        label={label}
        onChange={onChange}
        name={name}
        options={options}
      />
    );
  };

  describe('when compenent renders', () => {

    beforeAll(() => {
      renderComponent();
    });

    test('component renders', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
