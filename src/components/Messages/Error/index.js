import React, { Component, PropTypes } from 'react';
import { Alert } from 'react-bootstrap';

class Error extends Component {
  onDismiss() {
    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  }

  render() {
    if (!this.props.message) {
      return this.props.children || <div />;
    }

    return (
      <Alert bsStyle="danger" onDismiss={this.onDismiss.bind(this)}>
        <h4>Oh snap! You got an error!</h4>
        <p>{this.props.message}</p>
      </Alert>
   );
  }
}

Error.propTypes = {
  message: PropTypes.string,
  onDismiss: PropTypes.func,
  children: PropTypes.node
};

export default Error;
