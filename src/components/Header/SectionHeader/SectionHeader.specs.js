import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SectionHeader from './';

const { describe, it } = global;

describe('SectionHeader', () => {
  let field;
  let wrapper;

  beforeEach((done) => {
    field = {
      title: 'This is the title',
      description: 'This is the description'
    };
    done();
  });

  describe('test values', () => {
    beforeEach((done) => {
      wrapper = shallow(
        <SectionHeader
          title={field.title}
          description={field.description}
        >
          This is the SectionHeader children.
        </SectionHeader>
      );
      done();
    });

    it('should render one title element', () => {
      expect(wrapper.find('h2 .title')).to.have.length(1);
      expect(wrapper.find('h2 .title').text()).to.equal(field.title);
    });

    it('should have a description', () => {
      expect(wrapper.find('p.description').text()).to.equal(field.description);
    });

    it('should have children', () => {
      expect(wrapper.find('div.buttons-container').text()).to.exist;
    });
  });


  describe('test values', () => {
    it('should not have is-subsection class', () => {
      field.isSubsection = false;
      wrapper = shallow(
        <SectionHeader
          title={field.title}
          description={field.description}
          isSubsection={field.isSubsection}
        >
          This is the SectionHeader children.
        </SectionHeader>
      );
      expect(wrapper.find('.is-subsection').length).to.equal(0);
    });

    it('should have is-subsection class', () => {
      field.isSubsection = true;
      wrapper = shallow(
        <SectionHeader
          title={field.title}
          description={field.description}
          isSubsection={field.isSubsection}
        >
          This is the SectionHeader children.
        </SectionHeader>
      );
      expect(wrapper.find('.is-subsection').length).to.equal(1);
    });
  });
});
