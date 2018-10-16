import React from 'react';
import {shallow} from 'enzyme';
import Chance from 'chance';

import ExternalLink from '../../../../src/frontend/components/common/ExternalLink';

const chance = new Chance();

describe('<ExternalLink />', () => {
  let wrapper,
      url,
      text;

  const renderComponent = (withNewWindow = false) => {
    url = chance.url();
    text = chance.string();

    if (withNewWindow) {
      wrapper = shallow(
          <ExternalLink url={url} text={text} newWindow={true}/>
      );
    } else {
      wrapper = shallow(
          <ExternalLink url={url} text={text}/>
      );
    }
  };

  describe('when component is rendered with new window true', () => {

    beforeAll(() => {
      renderComponent(true);
    });

    test('component renders', () => {
      expect(wrapper.exists()).toBe(true);
    });

    test('with <a> tag', () => {
      expect(wrapper.type()).toEqual('a');
    });

    test('with href url', () => {
      expect(wrapper.props().href).toEqual(url);
    });

    test('with rel="noopener noreferrer"', () => {
      expect(wrapper.props().rel).toEqual('noopener noreferrer');
    });

    test('with target="_blank"', () => {
      expect(wrapper.props().target).toEqual('_blank');
    });

    test('with children', () => {
      expect(wrapper.text()).toEqual(text);
    });
  });

  describe('when component is rendered with new window false', () => {

    beforeAll(() => {
      renderComponent();
    });

    test('without target="_blank"', () => {
      expect(wrapper.props().target).not.toEqual('_blank');
    });
  });
});
