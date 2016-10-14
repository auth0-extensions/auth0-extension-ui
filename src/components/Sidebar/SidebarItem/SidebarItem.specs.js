import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import SidebarItem from './';

const { describe, it } = global;

describe('SidebarItem', () => {
  it('should have SidebarItem', () => {
    const wrapper = mount(<SidebarItem title="Users" />);
    // expect(wrapper.find('#SidebarItem')).to.exist;
  });

  // TODO add more tests
});
