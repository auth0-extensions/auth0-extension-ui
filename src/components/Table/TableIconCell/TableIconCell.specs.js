import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TableIconCell from './';

const { describe, it } = global;

describe('TableIconCell', () => {
  const wrapper = mount(<TableIconCell color="green" icon="573" />);

  it('should render one TableCell item', () => {
    expect(wrapper.find('TableCell')).to.have.length(1);
  });

  it('should render one icon', () => {
    expect(wrapper.find('i').props().style).to.exist;
    expect(wrapper.find('i').props().style.color).to.equal('green');
    expect(wrapper.find('i.icon-budicon-573')).to.exist;
  });
});
