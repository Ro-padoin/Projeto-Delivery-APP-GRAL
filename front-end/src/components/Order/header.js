import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axios/axiosInstance';
import Button from '../Button';

function OrdersHeader({ orderNum, seller, orderDate, orderStatus }) {
  const { id } = useParams();
  const [btnStatus, setBtnStatus] = useState(orderStatus);

  const updateStatus = async (status) => {
    try {
      await axiosInstance
        .patch(`/sales/search?id=${id}&key=id&value=${status}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <thead>
      <tr>

        <th
          className="order-details-header"
        >
          Pedido
          {' '}
          { orderNum }
        </th>

        <th
          className="order-details-header"
        >
          Vend:
          {' '}
          { seller }
        </th>

        <th
          className="order-details-header"
        >
          { orderDate }
        </th>
        <th
          className="order-details-header"
        >
          Status:
          {' '}
          { btnStatus }
        </th>

        <th className="order-details-header">
          <Button
            disabled={ btnStatus !== 'Em Trânsito' }
            onClickfn={ () => {
              setBtnStatus('Entregue');
              updateStatus('Entregue');
            } }
            classNameBtn="order-header-button"
          >
            Entregue
          </Button>
        </th>
      </tr>
    </thead>
  );
}

OrdersHeader.propTypes = {
  orderNum: PropTypes.number.isRequired,
  seller: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  orderStatus: PropTypes.string.isRequired,
};

export default OrdersHeader;
