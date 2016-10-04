import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import InputText from './InputText';

const { describe, it } = global;

describe('InputText', () => {
  it('should render one input element', () => {
    const wrapper = shallow(<InputText />);
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('should show the given value', () => {
    const field = {
      value: 'The Text'
    };
    const wrapper = shallow(<InputText field={field} />);
    expect(wrapper.find('input').props().value).to.be.equal(field.value);
  });
  it('should have input with type sent in props', () => {
    const field = {
      type: 'text'
    };
    const wrapper = shallow(<InputText field={field} />);
    expect(wrapper.find('input').props().type).to.equal('text');
  });
});
