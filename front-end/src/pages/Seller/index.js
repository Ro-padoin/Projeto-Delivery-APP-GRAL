import React, { useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import SellerOrderCard from '../../components/Seller/Card';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';
import formatDate from '../../utils/helpers/formatDate';

function SellerOrder() {
  const { user, setUser, orders, setOrders } = useContext(DeliveryContext);
  const navigate = useNavigate();
  const getAllOrders = useCallback(async (userData) => {
    const config = {
      headers: { Authorization: userData.token },
    };
    try {
      const { data } = await axiosInstance
        .get(`/sales/${userData.id}/seller_id`, config);
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  }, [setOrders]);

  useEffect(() => {
    if (Object.keys(user).length !== 0) getAllOrders(user);
    if (Object.keys(user).length === 0) navigate('/login');
  }, [user, setUser, navigate, getAllOrders]);

  return (
    <section
      style={ { backgroundColor: 'rgba(242,210,46, 0.95)' } }
      className="w-full h-screen"
    >
      <Header />
      <section className="main-seller">
        <section className="main-seller-cards">
          {
            orders.length !== 0 && orders.map((
              {
                id, status, saleDate, totalPrice, deliveryAddress,
              },
            ) => (
              <SellerOrderCard
                key={ id }
                id={ id }
                orderStatus={ status }
                orderDate={ formatDate(saleDate) }
                orderAddress={ deliveryAddress }
                price={ totalPrice.toString().replace('.', ',') }
              />
            ))
          }
        </section>
      </section>
    </section>
  );
}

export default SellerOrder;
