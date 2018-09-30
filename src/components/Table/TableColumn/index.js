import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const TableColumn = ({ width, isIcon, children }) => {
  const classes = classNames({
    icon: isIcon
  });

  return (
    <th width={width} className={classes}>
      { children }
    </th>);
};

TableColumn.propTypes = {
  width: PropTypes.string,
  isIcon: PropTypes.bool,
  children: PropTypes.node
};

export default TableColumn;
