import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Confirm from './';

const { describe, it } = global;

describe('Confirm', () => {
  let field = {
    title: 'The title',
    show: true,
    loading: false,
    confirmMessage: 'Save',
    className: 'Confirm--myclass',
    onCancel: () => (true)
  };

  let wrapper;

  describe('test elements', () => {
    beforeEach((done) => {
      wrapper = shallow(
        <Confirm
          title={field.title}
          show={field.show}
          loading={field.loading}
          onCancel={field.onCancel}
          onConfirm={field.onConfirm}
          confirmMessage={field.confirm}
          className={field.className}
        >
          This is the Confirm children.
        </Confirm>
      );
      done();
    });

    it('should show one modal', () => {
      expect(wrapper.find('.Confirm--myclass')).to.have.length(1);
    });

    it('should show modal title', () => {
      expect(wrapper.find('.modal-title').text()).to.equal(field.title);
    });

    it('should have a close button', () => {
      expect(wrapper.find('button.close').length).to.be.above(0);
    });
  });

  describe('test functions', () => {
    beforeEach((done) => {
      field.onCancel = sinon.spy();
      field.onConfirm = sinon.spy();

      wrapper = shallow(
        <Confirm
          title={field.title}
          show={field.show}
          loading={field.loading}
          onCancel={field.onCancel}
          onConfirm={field.onConfirm}
          confirmMessage={field.confirm}
        >
          This is the Confirm children.
        </Confirm>
      );
      done();
    });

    it('should call onCancel if modal is closed', () => {
      wrapper.find('button.close').first().simulate('click');
      expect(field.onCancel.calledOnce).to.equal(true);
    });

    it('should call onConfirm if modal is submitted', () => {
      wrapper.find('.btn-primary').simulate('click');
      expect(field.onConfirm.calledOnce).to.equal(true);
    });
  });
});
