import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import EntityHeader from './';

const { describe, it } = global;

describe('EntityHeader', () => {
  let field;
  let wrapper;

  beforeEach((done) => {
    field = {
      imgSource: 'https://cdn.auth0.com/avatars/1s.png',
      primaryText: 'This is the primary text',
      secondaryText: 'This is the secondary text'
    };
    wrapper = shallow(
      <EntityHeader
        imgSource={field.imgSource}
        primaryText={field.primaryText}
        secondaryText={field.secondaryText}
      >
        This is the EntityHeader children.
      </EntityHeader>
    );
    done();
  });

  it('should render one img element', () => {
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have a primary and secondary text', () => {
    expect(wrapper.find('.entity-header-primary').text()).to.equal(field.primaryText);
    expect(wrapper.find('.entity-header-secondary').text()).to.equal(field.secondaryText);
  });

  it('should have children', () => {
    expect(wrapper.find('.entity-header-actions').text()).to.exist;
  });
});
