import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Json from './';

const { describe, it } = global;

describe('Json', () => {
  const jsonObject = {
    name: 'json object title',
    items: {
      first: 'first',
      second: 'second'
    },
    list: [ 'first', 'second' ]
  };
  let wrapper;

  beforeEach((done) => {
    wrapper = mount(<Json jsonObject={jsonObject} />);
    done();
  });

  it('should render a pre element', () => {
    expect(wrapper.find('pre.json-object')).to.have.length(1);
  });
});
