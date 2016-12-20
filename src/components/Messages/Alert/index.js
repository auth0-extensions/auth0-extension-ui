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
  show: React.PropTypes.bool,
  type: React.PropTypes.string,
  title: React.PropTypes.string,
  message: React.PropTypes.string,
  onDismiss: React.PropTypes.func,
  children: React.PropTypes.node
};

export default AlertMessage;
