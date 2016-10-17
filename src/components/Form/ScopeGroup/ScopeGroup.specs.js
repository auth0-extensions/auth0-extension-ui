import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Field } from 'redux-form';

import { addFormDecorator } from '../../utils/formUtils';
import ScopeGroup from './';

const { describe, it } = global;

describe('ScopeGroup', () => {
  it('should show two input fields', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      options: [ { value: 'op1', text: 'Option 1' }, { value: 'op2', text: 'Option 2' } ]
    };

    const wrapper = mount(addFormDecorator(
      <Field
        name={field.name}
        component={ScopeGroup}
        label={field.label}
        options={field.options}
      />
    ));
    expect(wrapper.find('input')).to.have.length(2);
  });
});
