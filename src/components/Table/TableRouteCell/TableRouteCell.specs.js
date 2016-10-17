import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TableRouteCell from './';

const { describe, it } = global;

describe('TableRouteCell', () => {
  const field = {
    title: 'Route name',
    route: '/someroute'
  };
  const wrapper = mount(<TableRouteCell route={field.route}>{field.title}</TableRouteCell>);

  it('should render one td item', () => {
    expect(wrapper.find('td')).to.have.length(1);
  });

  it('should render one route with provided title', () => {
    expect(wrapper.find('td').props().title).to.equal(field.title);
  });

  it('should have on Link component', () => {
    expect(wrapper.find('Link')).to.exist;
    expect(wrapper.find('Link').props().to).to.equal(field.route);
  });
});
