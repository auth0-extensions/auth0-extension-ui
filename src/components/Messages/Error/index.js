import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Alert from '../Alert';

class Error extends Component {
  static defaultProps = {
    show: true,
    title: 'Oh snap!'
  }

  render() {
    return (
      <Alert
        show={this.props.show}
        type="danger"
        title={this.props.title}
        message={this.props.message}
        onDismiss={this.props.onDismiss}
      >
        {this.props.children}
      </Alert>
    );
  }
}

Error.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  onDismiss: PropTypes.func,
  children: PropTypes.node
};

export default Error;
