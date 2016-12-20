import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Alert from './';

const { describe, it } = global;

describe('Alert', () => {
  const field = {
    message: 'This is the alert message'
  };
  let wrapper;

  describe('test elements', () => {
    beforeEach((done) => {
      wrapper = mount(<Alert message={field.message} onDismiss={field.onDismiss} />);
      done();
    });

    it('should show alert message', () => {
      expect(wrapper.find('.alert').text()).to.contain(field.message);
    });

    it('should have a close button', () => {
      expect(wrapper.find('button.close').length).to.be.above(0);
    });
  });

  describe('test function', () => {
    it('should call onDismiss if alert is closed', () => {
      const onDismiss = sinon.spy();
      wrapper = mount(<Alert message={field.message} onDismiss={onDismiss} />);

      wrapper.find('button.close').first().simulate('click');
      expect(onDismiss.calledOnce).to.equal(true);
    });
  });

  describe('test show attr', () => {
    it('should not show anything', () => {
      wrapper = mount(<Alert message={field.message} show={false} />);
      expect(wrapper.find('.alert')).to.have.length(0);
    });

    it('should show alert', () => {
      wrapper = mount(<Alert message={field.message} show={true} />);
      expect(wrapper.find('.alert')).to.have.length(1);
    });
  });
});
