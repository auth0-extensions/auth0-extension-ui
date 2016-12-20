import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { Field } from 'redux-form';

import { addFormDecorator } from '../../utils/formUtils';
import InputCheckBox from './';

const { describe, it } = global;

describe('InputCheckBox', () => {
  let field;
  let wrapper;

  beforeEach((done) => {
    field = {
      name: 'FieldName',
      label: 'My Label'
    };
    wrapper = mount(addFormDecorator(
      <Field
        name={field.name}
        component={InputCheckBox}
        label={field.label}
      />
    ));
    done();
  });

  it('should render one input element', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('should have input with type checkbox', () => {
    expect(wrapper.find('input').props().type).to.equal('checkbox');
  });
  it('should show the given value', () => {
    expect(wrapper.find('input').props().id).to.be.equal(field.name);
    expect(wrapper.find('label').text()).to.be.equal(field.label);
  });
});
