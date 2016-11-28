import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Info extends Component {
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
      <Alert bsStyle="info" onDismiss={this.onDismiss}>
        <strong>Heads up!</strong> {this.props.message}
      </Alert>
    );
  }
}

Info.propTypes = {
  message: React.PropTypes.string,
  onDismiss: React.PropTypes.func,
  children: React.PropTypes.node
};

export default Info;
