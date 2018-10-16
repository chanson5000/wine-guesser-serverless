import React from 'react';
import {shallow} from 'enzyme';
import Landing from '../../../../src/frontend/components/layout/Landing';
import WineGlassLink from '../../../../src/frontend/components/common/WineGlassLink';

describe('<Landing />', () => {
  let wrapper,
      h2,
      redWineGlassLink,
      whiteWineGlassLink;

  const renderComponent = () => {
    wrapper = shallow(
        <Landing/>
    );

    h2 = wrapper.childAt(0);
    redWineGlassLink = wrapper.childAt(1).childAt(0).childAt(0);
    whiteWineGlassLink = wrapper.childAt(1).childAt(1).childAt(0);
  };

  describe('when component is rendered', () => {

    beforeAll(() => {
      renderComponent();
    });

    test('it should render', () => {
      expect(wrapper.exists()).toBe(true);
    });

    test('with \'div\' as the root element', () => {
      expect(wrapper.type()).toEqual('div');
    });

    test('and div has correct properties', () => {
      expect(wrapper.props().className).toEqual('container p-4 text-center');
    });

    test('with <h2> child', () => {
      expect(h2.type()).toEqual('h2');
    });

    test('that has "Guess a wine." text', () => {
      expect(h2.text()).toEqual('Guess a wine.');
    });

    test('with <div> at second child', () => {
      expect(wrapper.childAt(1).type()).toEqual('div');
    });

    test('with correct properties', () => {
      expect(wrapper.childAt(1).props().className).toEqual('row justify-content-center');
    });

    test('with correct div\'s at children', () => {
      expect(wrapper.childAt(1).childAt(0).type()).toEqual('div');
      expect(wrapper.childAt(1).childAt(0).props().className).toEqual('col-auto');
      expect(wrapper.childAt(1).childAt(1).type()).toEqual('div');
      expect(wrapper.childAt(1).childAt(1).props().className).toEqual('col-auto');
    });

    test('with red <WineGlassLink/>', () => {
      expect(redWineGlassLink.type()).toEqual(WineGlassLink);
    });

    test('with isRedWine=true', () => {
      expect(redWineGlassLink.props().isRedWine).toEqual(true);
    });

    test('with white <WineGlassLink/>', () => {
      expect(whiteWineGlassLink.type()).toEqual(WineGlassLink);
    });

    test('with isRedWine=false', () => {
      expect(whiteWineGlassLink.props().isRedWine).toEqual(false);
    });
  });
});