import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Button from './';

const { describe, it } = global;

describe('Button', () => {
  it('should show the given text', () => {
    const text = 'The Text';
    const wrapper = shallow(<Button>{text}</Button>);
    expect(wrapper.text()).to.be.equal(text);
  });
  it('should handle the click event', () => {
    const clickMe = sinon.stub();
    const wrapper = mount(<Button onClick={clickMe}>ClickMe</Button>);

    wrapper.find('button').simulate('click');
    expect(clickMe.callCount).to.be.equal(1);
  });
});
