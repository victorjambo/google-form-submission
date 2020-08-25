import React from 'react';
import PropTypes from 'prop-types';

const TableRow = props => {
  const { children, displayName } = props;

  return (
    <tr>
      <td>{displayName}</td>
      <td>
        {children}
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  displayName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TableRow;
