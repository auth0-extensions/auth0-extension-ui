import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import TableTextCell from './';

const { describe, it } = global;

describe('TableTextCell', () => {
  const text = 'This is the TableTextCell children.';

  it('should render one TableCell item', () => {
    const wrapper = mount(<TableTextCell>{text}</TableTextCell>);
    expect(wrapper.find('TableCell')).to.have.length(1);
    expect(wrapper.find('TableCell').text()).to.exist;
    expect(wrapper.find('TableCell').text()).to.equal(text);
  });

  it('should call onClick when cell is clicked', () => {
    const onClick = sinon.spy();
    const wrapper = mount(<TableTextCell onClick={onClick}>{text}</TableTextCell>);
    expect(wrapper.find('a')).to.have.length(1);
    wrapper.find('a').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
});
