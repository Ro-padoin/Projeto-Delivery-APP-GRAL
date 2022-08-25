import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Button from '../Button';
import axiosInstance from '../../utils/axios/axiosInstance';

function SellerOrdersHeader({ orderNum, orderDate, orderStatus }) {
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
  const deliveryStatus = 'Em Trânsito';
  return (
    <thead>
      <tr>
        <th
          className="order-details-header"
        >
          { orderNum }
        </th>

        <th
          className="order-details-header"
        >
          { orderDate }
        </th>
        <th
          className="order-details-header"
        >
          { btnStatus }
        </th>

        <th className="order-details-header">
          <Button
            classNameBtn="order-header-button"
            disabled={
              btnStatus === 'Preparando'
              || btnStatus === deliveryStatus
              || btnStatus === 'Entregue'
            }
            onClickfn={ () => {
              setBtnStatus('Preparando');
              updateStatus('Preparando');
            } }
          >
            Preparar pedido
          </Button>
        </th>

        <th className="order-details-header">
          <Button
            classNameBtn="order-header-button"
            disabled={
              btnStatus === 'Pendente'
              || btnStatus === deliveryStatus
              || btnStatus === 'Entregue'
            }
            onClickfn={ () => {
              setBtnStatus(deliveryStatus);
              updateStatus(deliveryStatus);
            } }
          >
            Saiu pra entrega
          </Button>
        </th>
      </tr>
    </thead>
  );
}

SellerOrdersHeader.propTypes = {
  orderNum: PropTypes.number.isRequired,
  orderDate: PropTypes.string.isRequired,
  orderStatus: PropTypes.string.isRequired,
};

export default SellerOrdersHeader;
