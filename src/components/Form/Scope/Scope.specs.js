import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Scope from './';

const { describe, it } = global;

describe('Scope', () => {
  let field;
  let input;
  let wrapper;

  beforeEach((done) => {
    field = {
      value: 'FieldValue',
      text: 'FieldText'
    };
    input = { };
    wrapper = shallow(
      <Scope key={field.value} field={input} text={field.text} value={field.value} />
    );
    done();
  });

  it('should render one input element', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have input with type checkbox', () => {
    expect(wrapper.find('input').props().type).to.equal('checkbox');
  });

  it('should show the given value and label', () => {
    expect(wrapper.find('input').props().defaultValue).to.equal(field.value);
    expect(wrapper.find('label').text()).to.be.equal(field.text);
  });
});
