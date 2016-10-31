import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  handlePageChange(diff) {
    const page = this.state.activePage + diff;

    this.setState({
      activePage: page
    }, () => {
      this.props.handlePageChange(this.state.activePage);
    });
  }

  render() {
    const pages = Math.ceil(this.props.totalItems / this.props.perPage);

    return (
      <div className="row">
        <div className="col-xs-8">
          Page {this.state.activePage} of {pages}
        </div>
        <div className="col-xs-4">
          <Button bsSize="small" className="pull-right"
            onClick={this.handlePageChange.bind(this, 1)}
            disabled={this.state.activePage === pages}
          >
            <i className="icon-budicon-175" />
          </Button>
          <Button bsSize="small" className="pull-right"
            onClick={this.handlePageChange.bind(this, -1)}
            disabled={this.state.activePage === 1}
          >
            <i className="icon-budicon-176" />
          </Button>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired
};

export default Pagination;
