import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import DragAndDrop from './';

const { describe, it } = global;

describe('Editor', () => {
  let wrapper;

  beforeEach((done) => {
    wrapper = shallow(<DragAndDrop />);
    done();
  });

  it('should render a drag and drop element', () => {
    expect(wrapper.find('Dropzone')).to.have.length(1);
  });
});
