/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Span from '../../Span';

function OrderCard({ id, orderStatus, orderDate, price }) {
  let statusStyle = '';
  if (orderStatus === 'Pendente') statusStyle = 'bg-[#F2D22E] p-5 rounded-md';
  if (orderStatus === 'Preparando') statusStyle = 'bg-[#d5f22e] p-5 rounded-md';
  if (orderStatus === 'Em Trânsito') statusStyle = 'bg-[#2edbf2] p-5 rounded-md';
  if (orderStatus === 'Entregue') statusStyle = 'bg-[#9aeb4e] p-5 rounded-md';
  return (
    <Link to={ `/customer/orders/${id}` }>
      <section className="order-card">
        <Span spanClass="bg-[#F2C12E] p-5 rounded-md">
          Pedido
          {' '}
          { id }
        </Span>
        <Span spanClass={ statusStyle }>
          { orderStatus }
        </Span>
        <section className="card-date-price">
          <Span>
            { orderDate }
          </Span>
          <Span>
            R$:
            {' '}
            <Span>
              { price }
            </Span>
          </Span>
        </section>
      </section>
    </Link>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  orderStatus: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default OrderCard;
