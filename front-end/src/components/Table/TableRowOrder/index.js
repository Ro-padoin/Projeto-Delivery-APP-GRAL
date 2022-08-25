/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import DeliveryContext from '../../../utils/context/DeliveryContext';
import Button from '../../Button';

function TableRowOrder(props) {
  const { index, id, title, quantity, price, subTotal, showRemoveBtn } = props;
  const { updateCartItem } = useContext(DeliveryContext);

  return (
    <tbody>
      <tr key={ id } className="table-row">
        <td className="px-2 py-4">
          { index + 1 }
        </td>
        <td className="px-2 py-4">
          {title }
        </td>
        <td className="px-2 py-4">
          { quantity }
        </td>
        <td className="px-2 py-4">
          R$
          { ' ' }
          { price }
        </td>
        <td className="px-2 py-4">
          R$
          { ' ' }
          { subTotal}
        </td>
        {!showRemoveBtn && (
          <td className="px-2 py-4">
            <Button
              onClickfn={ () => updateCartItem(props, 0) }
              classNameBtn="remove-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </Button>
          </td>
        )}
      </tr>
    </tbody>
  );
}

TableRowOrder.propTypes = {
  index: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.string,
  subTotal: PropTypes.string,
}.isRequired;

export default TableRowOrder;
