import PropTypes from 'prop-types';
import React from 'react';

const TableTotals = ({ currentCount, totalCount, textFormat }) => {
  if (currentCount === 0 || totalCount === 0) {
    return <div />;
  }

  const text = textFormat || '';
  if (textFormat) {
    return (
      <div className="actions-group pull-left">
        {text.replace('{total}', totalCount).replace('{current}', currentCount)}
      </div>
    );
  }

  return (
    <div className="actions-group pull-left">
      Showing <strong>{currentCount}</strong> of <strong>{totalCount}</strong>
    </div>
  );
};

TableTotals.propTypes = {
  currentCount: PropTypes.number,
  totalCount: PropTypes.number,
  textFormat: PropTypes.string
};

export default TableTotals;
