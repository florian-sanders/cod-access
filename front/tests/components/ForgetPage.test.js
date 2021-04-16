import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ForgetPage from 'src/components/ForgetPage';

describe('ForgetPage Component', () => {
    const wrapper = shallow(<ForgetPage />);

    it('should have a className forget', () => {
        expect(wrapper.props().className).to.be.equal('content');
        // © Diane
        expect(wrapper.hasClass('forget')).to.be.true;
      });
})