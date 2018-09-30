import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class AlertMessage extends Component {
  static defaultProps = {
    type: 'success',
    show: true
  }

  onDismiss = () => {
    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    if (!this.props.message) {
      return this.props.children || <div />;
    }

    return (
      <Alert bsStyle={this.props.type} onDismiss={this.onDismiss}>
        <strong>{this.props.title}</strong> {this.props.message}
      </Alert>
    );
  }
}

AlertMessage.propTypes = {
  show: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  onDismiss: PropTypes.func,
  children: PropTypes.node
};

export default AlertMessage;
