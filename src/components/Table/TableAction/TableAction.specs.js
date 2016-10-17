import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import TableAction from './';

const { describe, it } = global;

describe('TableAction', () => {
  let field;
  let wrapper;

  beforeEach((done) => {
    field = {
      id: 'delete-permission',
      type: 'primary',
      title: 'Delete Permission',
      icon: '264',
      onClick: sinon.spy(),
      args: [ { first: 'first' }, { second: 'second' } ],
      disabled: false
    };

    wrapper = mount(
      <TableAction
        id={field.id}
        type={field.type}
        title={field.title}
        icon={field.icon}
        onClick={field.onClick}
        args={field.args}
        disabled={field.disabled}
      />
    );
    done();
  });

  it('should have TableAction', () => {
    expect(wrapper.find('OverlayTrigger')).to.exist;
  });

  it('should have the provided id', () => {
    expect(wrapper.find('#delete-permission')).to.exist;
  });

  it('should have a Button', () => {
    expect(wrapper.find('Button')).to.exist;
  });

  it('should have a Button with provided style', () => {
    expect(wrapper.find('Button').props().bsStyle).to.be.equal(field.type);
  });

  it('should have an icon with provided class', () => {
    expect(wrapper.find('i.icon.icon-budicon-264')).to.exist;
  });

  it('should call onClick provided function when button is clicked', () => {
    wrapper.find('Button').simulate('click');
    expect(field.onClick.calledOnce).to.equal(true);
    expect(field.onClick.calledWith(...field.args)).to.equal(true);
  });
});
