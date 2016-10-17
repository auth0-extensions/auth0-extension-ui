import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TableBody from './';

const { describe, it } = global;

describe('TableBody', () => {
  it('should render one tbody item', () => {
    const text = 'This is the TableBody children.';
    const wrapper = mount(<TableBody>{text}</TableBody>);
    expect(wrapper.find('tbody')).to.have.length(1);
    expect(wrapper.find('tbody').text()).to.exist;
    expect(wrapper.find('tbody').text()).to.equal(text);
  });
});
