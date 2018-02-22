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
  show: React.PropTypes.bool,
  title: React.PropTypes.string,
  message: React.PropTypes.string,
  onDismiss: React.PropTypes.func,
  children: React.PropTypes.node
};

export default Error;
