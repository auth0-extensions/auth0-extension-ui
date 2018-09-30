import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Alert from '../Alert';

class Info extends Component {
  static defaultProps = {
    show: true
  }

  render() {
    return (
      <Alert
        show={this.props.show}
        type="info"
        title="Heads up!"
        message={this.props.message}
        onDismiss={this.props.onDismiss}
      >
        {this.props.children}
      </Alert>
    );
  }
}

Info.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
  onDismiss: PropTypes.func,
  children: PropTypes.node
};

export default Info;
