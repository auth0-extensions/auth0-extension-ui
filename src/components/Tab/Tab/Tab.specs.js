import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Tab from './';

const { describe, it } = global;

describe('Tab', () => {
  it('should have Tab', () => {
    const wrapper = mount(<Tab />);
    expect(wrapper.find('.row > .col-xs-12.wrapper > .widget-title.title-with-nav-bars')).to.exist;
  });
});
