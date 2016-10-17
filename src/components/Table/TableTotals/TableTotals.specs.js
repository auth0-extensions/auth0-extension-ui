import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import TableTotals from './';

const { describe, it } = global;

describe('TableTotals', () => {
  it('should render information about table totals', () => {
    const field = {
      currentCount: 5,
      totalCount: 10
    };

    const wrapper = mount(<TableTotals currentCount={field.currentCount} totalCount={field.totalCount} />);
    expect(wrapper.find('div.actions-group.pull-left')).to.have.length(1);
    expect(wrapper.find('div.actions-group.pull-left').text())
      .to.be.equal(`Showing ${field.currentCount} of ${field.totalCount}`);
  });

  it('should show simple div if currentCount or totalCount are 0', () => {
    const field = {
      currentCount: 0,
      totalCount: 10
    };
    const wrapper = mount(<TableTotals currentCount={field.currentCount} totalCount={field.totalCount} />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('div').text()).to.equal('');
  });
});
