import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Success extends Component {
  onDismiss = () => {
    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  }

  render() {
    if (!this.props.message) {
      return this.props.children || <div />;
    }

    return (
      <Alert bsStyle="success" onDismiss={this.onDismiss}>
        <strong>Well done!</strong> {this.props.message}
      </Alert>
    );
  }
}

Success.propTypes = {
  message: React.PropTypes.string,
  onDismiss: React.PropTypes.func,
  children: React.PropTypes.node
};

export default Success;
