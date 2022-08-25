import React from 'react';
import PropTypes from 'prop-types';

function TableRowSeller(props) {
  const { index, id, title, quantity, price, subTotal } = props;

  return (
    <tbody>
      <tr key={ id } className="table-row">
        <td className="px-2 py-4">{ index + 1 }</td>
        <td className="px-2 py-4">{title }</td>
        <td className="px-2 py-4">{ quantity }</td>
        <td className="px-2 py-4">{ price }</td>
        <td className="px-2 py-4">{ subTotal}</td>
      </tr>
    </tbody>
  );
}

TableRowSeller.propTypes = {
  index: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.string,
  subTotal: PropTypes.string,
}.isRequired;

export default TableRowSeller;
