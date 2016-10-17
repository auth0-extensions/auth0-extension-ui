import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Field } from 'redux-form';

import { addFormDecorator } from '../../utils/formUtils';
import Multiselect from './';

const { describe, it } = global;

describe('Multiselect', () => {
  let field;
  let wrapper;

  beforeEach((done) => {
    field = {
      name: 'FieldName',
      options: [
        { value: 'ariel', label: 'Ariel Gerstein', email: 'ariel@auth0.com' },
        { value: 'victor', label: 'Victor Fernandez', email: 'victor@auth0.com' },
        { value: 'ricky', label: 'Ricky Rauch', email: 'ricky@auth0.com' },
        { value: 'cherna', label: 'Tomas Cherna', email: 'cherna@auth0.com' }
      ]
    };
    wrapper = mount(addFormDecorator(
      <Field
        name={field.name}
        component={Multiselect}
        options={field.options}
      />
    ));
    done();
  });

  it('should have input element', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('should have input without content', () => {
    expect(wrapper.find('input').text()).to.have.length(0);
  });
  it('should have input with content once is one options is selected', () => {
    wrapper.find('input').simulate('change', { target: { value: 'ariel' } });
    expect(wrapper.find('input').props().value).to.equal('ariel');
    expect(wrapper.find('input')).to.have.length(1);
  });
});
