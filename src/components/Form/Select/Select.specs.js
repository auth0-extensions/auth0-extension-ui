import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Field } from 'redux-form';

import { addFormDecorator } from '../../utils/formUtils';
import Select from './';

const { describe, it } = global;

describe('Select', () => {
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
        component={Select}
        loadOptions={field.loadOptions}
      />
    ));
    done();
  });

  it('should find element with class Select--single', () => {
    expect(wrapper.find('.react-multiselect.Select--single').exists()).to.be.true; // eslint-disable-line no-unused-expressions
  });
});
