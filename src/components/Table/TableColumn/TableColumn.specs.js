import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TableColumn from './';

const { describe, it } = global;

describe('TableColumn', () => {
  const text = 'TableColumn children.';

  it('should render one th item', () => {
    const wrapper = mount(<TableColumn>{text}</TableColumn>);
    expect(wrapper.find('th')).to.have.length(1);
    expect(wrapper.find('th').text()).to.exist;
    expect(wrapper.find('th').text()).to.equal(text);
  });

  it('should render one item with specific width', () => {
    const wrapper = mount(<TableColumn width="50%">{text}</TableColumn>);
    expect(wrapper.find('th').props().width).to.exist;
    expect(wrapper.find('th').props().width).to.equal('50%');
  });

  it('should render one icon', () => {
    const wrapper = mount(<TableColumn isIcon="true">{text}</TableColumn>);
    expect(wrapper.find('.icon')).to.exist;
  });
});
