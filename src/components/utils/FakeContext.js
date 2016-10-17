// Note: file content kindly adapted from http://stackoverflow.com/a/38121694/1979794

import React, { PropTypes } from 'react';

export default class FakeContext extends React.Component {
  render() {
    class FakeContext extends React.Component {
      getChildContext() {
        return this.props.context;
      }

      render() {
        return this.props.children;
      }
    }

    const context = this.props.context;

    FakeContext.childContextTypes = {};

    for (let propertyName in context) {
      FakeContext.childContextTypes[propertyName] = PropTypes.any;
    }

    return (
      <FakeContext context={this.props.context}>
        {this.props.children}
      </FakeContext>
    );
  }
}

FakeContext.propTypes = {
  children: PropTypes.any,
  context: PropTypes.object
};
