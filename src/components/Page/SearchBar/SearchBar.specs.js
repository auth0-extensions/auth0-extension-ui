import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SearchBar from './';

const { describe, it } = global;

describe('SearchBar', () => {
  let field = {
    placeholder: 'The placeholder',
    searchOptions: [
      {
        value: 'user',
        title: 'User'
      },
      {
        value: 'email',
        title: 'Email'
      }
    ],
    showInstructions: true,
    iconCode: 488
  };
  let wrapper;

  describe('test elements', () => {
    beforeEach((done) => {
      wrapper = mount(
        <SearchBar
          placeholder={field.placeholder}
          searchOptions={field.searchOptions}
          showInstructions={field.showInstructions}
          iconCode={field.iconCode}
          handleKeyPress={field.handleKeyPress}
          handleReset={field.handleReset}
          handleOptionChange={field.handleOptionChange}
        />
      );
      done();
    });

    it('should render a search bar', () => {
      expect(wrapper.find('.advanced-search-control')).to.have.length(1);
    });

    it('should show instructions', () => {
      expect(wrapper.find('.help-block').text()).to.exist;
    });

    it('should have the provided icon', () => {
      expect(wrapper.find('.icon-budicon-488').length).to.equal(1);
    });
  });

  describe('test functions', () => {
    beforeEach((done) => {
      field.handleKeyPress = sinon.spy();
      field.handleReset = sinon.spy();
      field.handleOptionChange = sinon.spy();

      wrapper = mount(
        <SearchBar
          placeholder={field.placeholder}
          searchOptions={field.searchOptions}
          showInstructions={field.showInstructions}
          iconCode={field.iconCode}
          handleKeyPress={field.handleKeyPress}
          handleReset={field.handleReset}
          handleOptionChange={field.handleOptionChange}
        />
      );
      done();
    });

    it('should call handleReset if reset is clicked', () => {
      wrapper.find('button').simulate('click');
      expect(field.handleReset.calledOnce).to.equal(true);
    });

    it('should call handleKeyPress if character is inserted', () => {
      wrapper.find('input').simulate('keyPress', { keyCode: 40 });
      expect(field.handleKeyPress.calledOnce).to.equal(true);
    });

    it('should call handleOptionChange when option changes', () => {
      wrapper.find('select').simulate('change', { target: { value: 'email' } });
      expect(field.handleOptionChange.calledOnce).to.equal(true);
    });
  });
});
