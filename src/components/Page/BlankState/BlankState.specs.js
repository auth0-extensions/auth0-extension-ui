import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import BlankState from './';

const { describe, it } = global;

describe('BlankState', () => {
  const field = {
    title: 'The title',
    iconImage: (
      <div className="no-content-image">
        no image
      </div>
    ),
    description: 'The description.'
  };
  let wrapper;

  describe('test elements', () => {
    beforeEach((done) => {
      wrapper = mount(
        <BlankState
          title={field.title}
          iconImage={field.iconImage}
          description={field.description}
        >
          This is the BlankState children (this usually have buttons as children).
        </BlankState>
      );
      done();
    });

    it('should render a no-content-section', () => {
      expect(wrapper.find('.no-content-section')).to.have.length(1);
    });

    it('should show title, image field and description', () => {
      expect(wrapper.find('.title').text()).to.equal(field.title);
      expect(wrapper.find('.description').text()).to.equal(field.description);
      expect(wrapper.find('.no-content-image').length).to.equal(1);
    });

    it('should have children', () => {
      expect(wrapper.find('.button-container').length).to.be.above(0);
    });
  });
});
