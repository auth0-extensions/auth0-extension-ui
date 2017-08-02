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
      placeholder: 'my placeholder',
      loadOptions: (input, callback) => {
        callback(null, {
          options: [
            { label: 'Ariel Gerstein', value: 'ariel@auth0.com' },
            { label: 'Victor Fernandez', value: 'victor@auth0.com' },
            { label: 'Ricky Rauch', value: 'ricky@auth0.com' },
            { label: 'Tomas Cherna', value: 'cherna@auth0.com' }
          ],
          complete: true
        });
      }
    };
    wrapper = mount(addFormDecorator(
      <Field
        name={field.name}
        placeholder={field.placeholder}
        component={Multiselect}
        loadOptions={field.loadOptions}
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
  it('should not have a label field', () => {
    expect(wrapper.find('label.react-multiselect-label').exists()).to.be.false; // eslint-disable-line no-unused-expressions
  });
  it('should have a label html element when a label value is set', () => {
    const wrappedField = mount(addFormDecorator(
      <Field
        name={field.name}
        placeholder={field.placeholder}
        component={Multiselect}
        loadOptions={field.loadOptions}
        label="My Label"
      />
    ));
    expect(wrappedField.find('label.react-multiselect-label').exists()).to.be.true; // eslint-disable-line no-unused-expressions
    expect(wrappedField.find('label.react-multiselect-label')).to.have.length(1);
    expect(wrappedField.find('label').text()).to.equal('My Label');
  });
  it('should set the name as the htmlFor on the label element', () => {
    const wrappedField = mount(addFormDecorator(
      <Field
        name="custom-field-name"
        placeholder={field.placeholder}
        component={Multiselect}
        loadOptions={field.loadOptions}
        label="My Label"
      />
    ));
    expect(wrappedField.find('[htmlFor="custom-field-name"]').exists()).to.be.true; // eslint-disable-line no-unused-expressions
    expect(wrappedField.find('[htmlFor="custom-field-name"]')).to.have.length(1);
  });
});
