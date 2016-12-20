import React, { Component } from 'react';
import Alert from '../Alert';

class Success extends Component {
  static defaultProps = {
    show: true
  }

  render() {
    return (
      <Alert
        show={this.props.show}
        type="success"
        title="Well done!"
        message={this.props.message}
        onDismiss={this.props.onDismiss}
      >
        {this.props.children}
      </Alert>
    );
  }
}

Success.propTypes = {
  show: React.PropTypes.bool,
  message: React.PropTypes.string,
  onDismiss: React.PropTypes.func,
  children: React.PropTypes.node
};

export default Success;
