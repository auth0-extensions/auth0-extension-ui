import React, { PropTypes } from 'react';

import TableCell from '../TableCell';

const TableIconCell = ({ color, icon, title }) => (

  <TableCell>
    <i style={{ color }} className={`icon-budicon-${icon}`} title={title} alt={title} />
  </TableCell>

);

TableIconCell.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default TableIconCell;
