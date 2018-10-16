import React from 'react';
import {shallow} from 'enzyme';
import Form from 'react-bootstrap/lib/Form';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Chance from 'chance';

import DescriptorFormGroup from '../../../../src/frontend/components/common/DescriptorFormGroup';

const chance = new Chance();

describe('<DescriptorFormGroup/>', () => {
  let wrapper,
      label,
      controlId,
      type,
  options;

  const renderComponent = (doType) => {
    label = chance.string();
    controlId = chance.string();
    type = doType;
    options = [{value: chance.string(), label: chance.string()}, {value: chance.string(), label: chance.string()}];

    wrapper = shallow(
        <DescriptorFormGroup controlId={controlId} label={label} type="select" options={options}/>
    )
  };

  describe('when component is rendered with select type', () => {

    beforeAll(() => {
      renderComponent('select');
    });

    test('component renders', () => {
      expect(wrapper.exists()).toBe(true);
    });

    test('with root of <Form.Group>', () => {
      expect(wrapper.type()).toEqual(Form.Group);
    });

  });

});