import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Field } from 'redux-form';

import { addFormDecorator } from '../../utils/formUtils';
import InputCombo from './';

const { describe, it } = global;

describe('InputCombo', () => {
  it('should render one select element', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      options: [ ]
    };
    const wrapper = mount(addFormDecorator(
      <Field
        name={field.name}
        component={InputCombo}
        label={field.label}
        options={field.options}
      />
    ));
    expect(wrapper.find('select')).to.have.length(1);
  });

  it('should show the given values', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      options: [ { value: 1, text: 'Option 1' }, { value: 2, text: 'Option 2' } ]
    };

    const wrapper = mount(addFormDecorator(
      <Field
        name={field.name}
        component={InputCombo}
        label={field.label}
        options={field.options}
      />
    ));
    expect(wrapper.find('select').props().id).to.be.equal(field.name);
    expect(wrapper.find('span').text()).to.be.equal(field.label);
    expect(wrapper.find('option')).to.have.length(3); // two options plus default message
  });

  it('should call onChange func if exists', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      options: [ ]
    };
    const onChange = sinon.spy();

    const wrapper = mount(addFormDecorator(
      <Field
        name={field.name}
        component={InputCombo}
        label={field.label}
        options={field.options}
        onChange={onChange}
      />
    ));
    wrapper.find('select').simulate('change', { target: { value: 1 } });
    expect(wrapper.find('select').props().value).to.equal(1);
    expect(onChange.calledOnce).to.equal(true);
  });
});
