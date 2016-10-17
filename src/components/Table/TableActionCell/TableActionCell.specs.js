import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TableActionCell from './';

const { describe, it } = global;

describe('TableActionCell', () => {
  it('should render one td item', () => {
    const text = 'This is the TableActionCell children.';
    const wrapper = mount(<TableActionCell>{text}</TableActionCell>);
    expect(wrapper.find('td')).to.have.length(1);
    expect(wrapper.find('td').text()).to.exist;
    expect(wrapper.find('td').text()).to.equal(text);
  });
});
