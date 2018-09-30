import PropTypes from 'prop-types';
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import TabPane from './';

const { describe, it } = global;

describe('TabPane', () => {
  let wrapper;
  const title = 'Users';
  beforeEach((done) => {
    const context = { router: { isActive: () => true } };
    wrapper = shallow(<TabPane title={title} route="users" />, {
      context,
      childContextTypes: { router: PropTypes.object }
    });
    done();
  });

  it('should create TabPane', () => {
    expect(wrapper.find('.active')).to.exist;
    expect(wrapper.find('.script-button')).to.exist;
  });

  it('should create TabPane with provided title', () => {
    expect(wrapper.find('Link > span').text()).to.be.equal(title);
  });
});
