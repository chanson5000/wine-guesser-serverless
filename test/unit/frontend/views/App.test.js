import React from 'react';
import {shallow} from 'enzyme';
// import {expect} from 'chai';
import {RedGuessLink, WhiteGuessLink} from '../../../../src/frontend/components/common';
import {Landing} from '../../../../src/frontend/components/common';

describe('<Landing />', () => {
  let wrapper;

  const renderComponent = () => {
    wrapper = shallow(<Landing/>);
  };

  renderComponent();
  // const redGuessLink = shallow(<RedGuessLink/>);
  // const divContainer = wrapper.childAt(0);
  test('it should render a div as the root element', () => {
    expect(wrapper.type()).equal('div');
  });

  //
  // it('renders first child div', () => {
  //   expect(divContainer.type()).strictEqual('div');
  // });

  it('renders <RedGuessLink/>', () => {
    expect(wrapper.contains(<div className="container p-4 text-center"/>)).to.equal(true);
  });
});