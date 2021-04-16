import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ForgetPage from 'src/components/ForgetPage';

describe('ForgetPage Component', () => {
  const wrapper = shallow(<ForgetPage email="lorem@ipsum.com" />);

  it('should have 1 section inside', () => {
    expect(wrapper.find('section')).to.have.lengthOf(1);
  });

  it('should have a className forget', () => {
    expect(wrapper.props().className).to.be.equal('forget');
    expect(wrapper.hasClass('forget')).to.be.true;
  });
});
