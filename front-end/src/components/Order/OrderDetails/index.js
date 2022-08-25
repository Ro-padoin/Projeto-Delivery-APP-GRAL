import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Header';
import Span from '../../Span';
import TableHead from '../../Table/TableHead';
import TableRowOrder from '../../Table/TableRowOrder';
import axiosInstance from '../../../utils/axios/axiosInstance';
import formatDate from '../../../utils/helpers/formatDate';
import OrdersHeader from '../OrdersHeader';

function OrderDetails() {
  const [order, setOrder] = useState([]);
  const { id } = useParams();

  const getOrder = useCallback(async (user) => {
    const config = {
      headers: { Authorization: user.token },
    };
    try {
      const { data } = await axiosInstance
        .get(`/sale_products/${id}/search?key=id`, config);
      setOrder(data);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    getOrder(user);
  }, [getOrder]);

  const { sale, products } = order;

  return (
    <section
      style={ { backgroundColor: 'rgba(242,210,46, 0.95)' } }
      className="w-full h-screen"
    >
      <Header />
      <section className="main-order-details">
        <table className="table-auto text-center shadow-md">
          {
            sale && sale.map((e) => (
              <OrdersHeader
                key={ e.id }
                id={ e.id }
                orderNum={ e.id }
                seller={ e.idSeller.name }
                orderDate={ formatDate(e.saleDate) }
                orderStatus={ e.status }
                receivedBtn
              />
            ))
          }
          <TableHead />
          {
            products && products.map((product, i) => {
              const priceFormat = `${product.price}`.replace('.', ',');
              return (
                <TableRowOrder
                  key={ i }
                  index={ i }
                  id={ product.id }
                  title={ product.name }
                  quantity={ product.quantity }
                  price={ priceFormat }
                  subTotal={
                    (product.quantity * product.price).toFixed(2).replace('.', ',')
                  }
                  showRemoveBtn
                />
              );
            })
          }
        </table>
        {sale && (
          <Span
            spanClass="order-details-total"
          >
            Total R$:
            {' '}
            { (sale[0].totalPrice).toString().replace('.', ',') }
          </Span>)}
      </section>
    </section>
  );
}

export default OrderDetails;
