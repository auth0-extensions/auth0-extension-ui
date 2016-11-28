import React, { Component } from 'react';
import Alert from '../Alert';

class Error extends Component {
  static defaultProps = {
    show: true
  }

  render() {
    return (
      <Alert
        show={this.props.show}
        type="danger"
        title="Oh snap!"
        message={this.props.message}
        onDismiss={this.props.onDismiss}
      >
        {this.props.children}
      </Alert>
    );
  }
}

Error.propTypes = {
  show: React.PropTypes.bool,
  message: React.PropTypes.string,
  onDismiss: React.PropTypes.func,
  children: React.PropTypes.node
};

export default Error;
