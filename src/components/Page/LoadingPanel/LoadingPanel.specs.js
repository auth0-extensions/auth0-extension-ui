import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import LoadingPanel from './';

const { describe, it } = global;

describe('LoadingPanel', () => {
  const field = {
    spinnerStyle: { height: '16px', width: '16px' },
    animationStyle: { paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '10px' },
    show: true,
    delay: 0,
    children: 'This is the LoadingPanel children.'
  };
  let wrapper;

  describe('test elements', () => {
    beforeEach((done) => {
      sinon.spy(LoadingPanel.prototype, 'componentWillMount');

      wrapper = mount(
        <LoadingPanel
          backgroundStyle={field.backgroundStyle}
          spinnerStyle={field.spinnerStyle}
          animationStyle={field.animationStyle}
          show={field.show}
          delay={field.delay}
        >
          {field.children}
        </LoadingPanel>
      );
      done();
    });

    it('should render children', () => {
      expect(wrapper.find('div').text()).to.equal(field.children);
    });

    it('calls componentWillMount', () => {
      expect(LoadingPanel.prototype.componentWillMount.calledOnce).to.equal(true);
    });
  });
});
