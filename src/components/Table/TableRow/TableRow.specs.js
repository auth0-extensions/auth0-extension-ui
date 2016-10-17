import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TableRow from './';

const { describe, it } = global;

describe('TableRow', () => {
  it('should render one tr item', () => {
    const text = 'This is the TableRow children.';
    const wrapper = mount(<TableRow>{text}</TableRow>);
    expect(wrapper.find('tr')).to.have.length(1);
    expect(wrapper.find('tr').text()).to.exist;
    expect(wrapper.find('tr').text()).to.equal(text);
  });
});
