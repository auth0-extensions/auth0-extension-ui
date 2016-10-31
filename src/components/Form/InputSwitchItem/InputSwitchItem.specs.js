import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { Field } from 'redux-form';

import { addFormDecorator } from '../../utils/formUtils';
import InputSwitchItem from './';

const { describe, it } = global;

describe('InputSwitchItem', () => {
  it('should render one input element', () => {
    const wrapper = mount(addFormDecorator(<Field component={InputSwitchItem} />));
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('should have input with type checkbox', () => {
    const wrapper = mount(addFormDecorator(<Field component={InputSwitchItem} />));
    expect(wrapper.find('input').props().type).to.equal('checkbox');
  });
  it('should show the given value', () => {
    const field = {
      title: 'My Title',
      description: (<span>My Description</span>),
      name: 'FieldName'
    };
    const wrapper = mount(addFormDecorator(
      <Field
        name={field.name}
        component={InputSwitchItem}
        title={field.title}
        description={field.description}
      />
    ));
    expect(wrapper.find('.content > .name').text()).to.be.equal(field.title);
  });
});
