import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Field } from 'redux-form';

import { addFormDecorator } from '../../utils/formUtils';
import ScopeGroup from './';

const { describe, it } = global;

describe('ScopeGroup', () => {
  xit('should show one group with two input fields', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      options: [ { value: 'op1', text: 'Option 1' }, { value: 'op2', text: 'Option 2' } ]
    };

    const wrapper = render(addFormDecorator(
      <Field
        name={field.name}
        component={ScopeGroup}
        label={field.label}
        options={field.options}
      />
    ));
    // NOTE: only work with it.only
    expect(wrapper.find('.form-group')).to.have.length(1);
    expect(wrapper.find('input')).to.have.length(2);
    expect(wrapper.find('label')).to.have.length(3); // 1 ScopeGroup + 2 Options
  });
});
