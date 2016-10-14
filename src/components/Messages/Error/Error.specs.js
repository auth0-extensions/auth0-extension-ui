import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Error from './';

const { describe, it } = global;

describe('Error', () => {
  let field;
  let wrapper;

  beforeEach((done) => {
    field = {
      message: 'This is the error message'
    };
    wrapper = mount(<Error message={field.message} />);
    done();
  });

  it('should render one alert', () => {
    expect(wrapper.find('.alert')).to.have.length(1);
  });

  it('should show error message', () => {
    expect(wrapper.find('p').text()).to.equal(field.message);
  });

  it('should have a close button', () => {
    expect(wrapper.find('button.close').length).to.be.above(0);
  });
});
