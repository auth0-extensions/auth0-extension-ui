import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TableHeader from './';

const { describe, it } = global;

describe('TableHeader', () => {
  const text = 'This is the TableHeader children.';
  const wrapper = mount(<TableHeader>{text}</TableHeader>);
  it('should render one thead item', () => {
    expect(wrapper.find('thead')).to.have.length(1);
    expect(wrapper.find('thead').text()).to.exist;
    expect(wrapper.find('thead').text()).to.equal(text);
  });
  it('should render one table row (tr) item', () => {
    expect(wrapper.find('tr')).to.have.length(1);
  });
});
