import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Error extends Component {
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
      <Alert bsStyle="danger" onDismiss={this.onDismiss}>
        <strong>Oh snap!</strong> {this.props.message}
      </Alert>
    );
  }
}

Error.propTypes = {
  message: React.PropTypes.string,
  onDismiss: React.PropTypes.func,
  children: React.PropTypes.node
};

export default Error;
