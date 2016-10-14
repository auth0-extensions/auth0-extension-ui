import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TabPane from './';

const { describe, it } = global;

describe('TabPane', () => {
  it.only('should have TabPane', () => {
    const wrapper = mount(<TabPane title="Users" />);
    // expect(wrapper.find('.script-button')).to.exist;
  });
});
