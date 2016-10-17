import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CodeEditor from './';

const { describe, it } = global;

describe('Editor', () => {
  const field = {
    value: '<div>\nHello! This is the <strong>code editor</strong>.\n<p>New paragraph.</p>\n</div>'
  };
  let wrapper;

  beforeEach((done) => {
    wrapper = shallow(<CodeEditor value={field.value} />);
    done();
  });

  it('should render a codemirror element', () => {
    expect(wrapper.find('CodeMirror')).to.have.length(1);
  });
});
