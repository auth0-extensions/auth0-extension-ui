import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TableCell from './';

const { describe, it } = global;

describe('TableCell', () => {
  it('should render one td item', () => {
    const text = 'This is the TableCell children.';
    const wrapper = mount(<TableCell>{text}</TableCell>);
    expect(wrapper.find('td')).to.have.length(1);
    expect(wrapper.find('td').text()).to.exist;
    expect(wrapper.find('td').text()).to.equal(text);
  });

  it('should render one item with style', () => {
    const text = 'This is the TableCell children.';
    const wrapper = mount(<TableCell style={{ color: 'blue' }}>{text}</TableCell>);
    expect(wrapper.find('td').props().style).to.exist;
  });
});
