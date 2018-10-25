import React from 'react';
import { shallow } from 'enzyme';

import WineGlassLink from '../../../../src/frontend/components/common/WineGlassLink/WineGlassLink';
import { Link } from 'react-router-dom';
import redGlass from '../../../../src/frontend/components/common/WineGlassLink/red-glass-full.png';
import whiteGlass from '../../../../src/frontend/components/common/WineGlassLink/white-glass-full.png';

describe('<WineGlassLink />', () => {
  let wrapper, imageTag;

  const renderComponent = (isRedWine = false) => {
    if (isRedWine) {
      wrapper = shallow(<WineGlassLink isRedWine={true} />);
    } else {
      wrapper = shallow(<WineGlassLink />);
    }

    imageTag = wrapper.childAt(0);
  };

  describe('when component is rendered as red wine', () => {
    beforeAll(() => {
      renderComponent(true);
    });

    test('component renders', () => {
      expect(wrapper.exists()).toBe(true);
    });

    test('as <Link/>', () => {
      expect(wrapper.type()).toEqual(Link);
    });

    test('to "/guess-red"', () => {
      expect(wrapper.props().to).toEqual('/wine/red/guess');
    });

    test("as 'img' tag", () => {
      expect(imageTag.type()).toEqual('img');
    });

    // TODO: Figure out how to test this.
    // test('with src=redGlass', () => {
    //   expect(imageTag.props().src).toEqual(redGlass);
    // });

    test('with alt="Guess a red wine"', () => {
      expect(imageTag.props().alt).toEqual('Guess a red wine.');
    });
  });

  describe('when component is rendered as white wine', () => {
    beforeAll(() => {
      renderComponent();
    });

    test('links to "/guess-white"', () => {
      expect(wrapper.props().to).toEqual('/wine/white/guess');
    });

    // TODO: Figure out how to test this, as well.
    // test('with src=whiteGlass', () => {
    //   expect(imageTag.props().src).toEqual(whiteGlass);
    // });

    test('with alt="Guess a white wine."', () => {
      expect(imageTag.props().alt).toEqual('Guess a white wine.');
    });
  });
});
