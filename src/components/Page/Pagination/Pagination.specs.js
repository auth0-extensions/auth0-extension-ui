import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Pagination from './';

const { describe, it } = global;

describe('Pagination', () => {
  const field = {
    totalItems: 5,
    perPage: 2,
    handlePageChange: sinon.spy()
  };
  let wrapper;

  describe('test attributes', () => {
    beforeEach((done) => {
      wrapper = mount(
        <Pagination
          handlePageChange={field.handlePageChange}
          totalItems={field.totalItems}
          perPage={field.perPage}
        />
      );
      done();
    });

    it('should render an information section', () => {
      expect(wrapper.find('.col-xs-8').text()).to.be.equal('Page 1 of 3');
    });

    it('should render arrows', () => {
      expect(wrapper.find('Button').length).to.equal(2);
    });

    it('should call handlePageChange when arrows are clicked', () => {
      wrapper.find('Button').first().simulate('click');
      expect(field.handlePageChange.calledOnce).to.equal(true);
    });
  });
});
