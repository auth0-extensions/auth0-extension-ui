import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { Field } from 'redux-form';

import { addFormDecorator } from '../../utils/formUtils';
import InputText from './';

const { describe, it } = global;

describe('InputText', () => {
  it('should render one input element', () => {
    const wrapper = shallow(<InputText />);
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('should have input with type text', () => {
    const wrapper = shallow(<InputText />);
    expect(wrapper.find('input').props().type).to.equal('text');
  });
  it('should show the given value', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      placeholder: 'My placeholder'
    };
    const wrapper = mount(addFormDecorator(
      <Field
        name={field.name}
        component={InputText}
        label={field.label}
        placeholder={field.placeholder}
      />
    ));
    expect(wrapper.find('input').props().id).to.be.equal(field.name);
    expect(wrapper.find('input').props().placeholder).to.be.equal(field.placeholder);
    expect(wrapper.find('span').text()).to.be.equal(field.label);
  });
});
