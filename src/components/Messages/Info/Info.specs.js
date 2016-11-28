import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Info from './';

const { describe, it } = global;

describe('Info', () => {
  let field = {
    message: 'This is the info message'
  };
  let wrapper;

  describe('test elements', () => {
    beforeEach((done) => {
      wrapper = mount(<Info message={field.message} onDismiss={field.onDismiss} />);
      done();
    });

    it('should render one alert', () => {
      expect(wrapper.find('.alert')).to.have.length(1);
    });

    it('should show info message', () => {
      expect(wrapper.find('.alert').text()).to.contain(field.message);
    });

    it('should have a close button', () => {
      expect(wrapper.find('button.close').length).to.be.above(0);
    });
  });

  describe('test function', () => {
    it('should call onDismiss if alert is closed', () => {
      const onDismiss = sinon.spy();
      wrapper = mount(<Info message={field.message} onDismiss={onDismiss} />);

      wrapper.find('button.close').first().simulate('click');
      expect(onDismiss.calledOnce).to.equal(true);
    });
  });
});
