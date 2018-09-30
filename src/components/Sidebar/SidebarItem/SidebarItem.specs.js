import PropTypes from 'prop-types';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SidebarItem from './';

const { describe, it } = global;

describe('SidebarItem', () => {
  let wrapper;
  beforeEach((done) => {
    const context = { router: { isActive: () => true } };
    wrapper = shallow(
      <SidebarItem
        title="Permissions"
        route="permissions"
        icon={<i className="icon icon-budicon-488" />}
      >
        This is the SidebarItem children.
      </SidebarItem>, {
        context,
        childContextTypes: { router: PropTypes.object }
      });
    done();
  });

  it('should have SidebarItem', () => {
    expect(wrapper.find('#SidebarItem')).to.exist;
    expect(wrapper.find('.sidebar-item')).to.exist;
  });

  it('should have a Link component', () => {
    expect(wrapper.find('Link')).to.exist;
  });

  it('should have an icon', () => {
    expect(wrapper.find('.icon.icon-budicon-488')).to.exist;
  });

  it('should show children after html reference is clicked', () => {
    expect(wrapper.find('ul').props().style.display).to.be.equal('none'); // invisible
    wrapper.find('a').simulate('click');
    expect(wrapper.find('ul').props().style.display).to.be.equal('block'); // visible
  });
});
