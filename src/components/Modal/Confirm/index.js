import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class Confirm extends Component {
  renderCancel() {
    if (this.props.onCancel) {
      return (
        <Button className="button-cancel" bsStyle="transparent" bsSize="large" disabled={this.props.loading} onClick={this.props.onCancel}>
          { this.props.cancelMessage || 'Cancel' }
        </Button>
      );
    }

    return null;
  }

  renderConfirm() {
    if (this.props.onConfirm) {
      return (
        <Button className="button-confirm" bsStyle="primary" bsSize="large" disabled={this.props.loading} onClick={this.props.onConfirm}>
          { this.props.confirmMessage || <span><i className="icon icon-budicon-499" /> Confirm</span> }
        </Button>
      );
    }

    return null;
  }

  render() {
    return (
      <Modal className={this.props.className} dialogClassName={this.props.dialogClassName} show={this.props.show} onHide={this.props.onCancel}>
        <Modal.Header className="has-border" closeButton={!this.props.loading} closeLabel={this.props.closeLabel || ''}>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.children}
        </Modal.Body>
        <Modal.Footer>
          {this.renderCancel()}
          {this.renderConfirm()}
        </Modal.Footer>
      </Modal>
    );
  }
}

Confirm.propTypes = {
  dialogClassName: PropTypes.string,
  confirmMessage: PropTypes.string,
  cancelMessage: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  className: PropTypes.string,
  closeLabel: PropTypes.string,
  children: PropTypes.node
};

export default Confirm;
