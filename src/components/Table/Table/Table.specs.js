import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Table from './';

const { describe, it } = global;

describe('Table', () => {
  it('should have Table', () => {
    const wrapper = mount(<Table />);
    expect(wrapper.find('table.table.data-table')).to.exist;
  });
});
