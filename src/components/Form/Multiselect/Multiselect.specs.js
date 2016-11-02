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
});
