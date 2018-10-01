import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import CodeEditor from './';

const { describe, it } = global;

describe('Editor', () => {
  const field = {
    value: '<div>\nHello! This is the <strong>code editor</strong>.\n<p>New paragraph.</p>\n</div>'
  };
  let wrapper;

  beforeEach((done) => {
    wrapper = mount(<CodeEditor value={field.value} />);
    done();
  });

  it('should render a codemirror element', () => {
    console.log(wrapper.html())
    expect(wrapper.find('.ReactCodeMirror')).to.have.length(1);
  });
});
