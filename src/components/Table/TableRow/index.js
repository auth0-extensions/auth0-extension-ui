import PropTypes from 'prop-types';
import React from 'react';

const TableRow = ({ children }) => (
  <tr>
    { children }
  </tr>
);

TableRow.propTypes = {
  children: PropTypes.node
};

export default TableRow;
