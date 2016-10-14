import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Sidebar from './';

const { describe, it } = global;

describe('Sidebar', () => {
  it('should have sidebar', () => {
    const wrapper = mount(<Sidebar />);
    expect(wrapper.find('#sidebar')).to.exist;
  });
});
