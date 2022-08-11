import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailsDelivery from '../../components/DetailsDelivery';
import Header from '../../components/NavBar';
import TableRow from '../../components/Table/TableRow';
import TableHead from '../../components/Table/TableHead';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';

function Checkout() {
  const { cartValue, sale, setSale } = useContext(DeliveryContext);
  const cartValueFormat = cartValue.toFixed(2).replace('.', ',');
  const { name } = JSON.parse(localStorage.getItem('user'));
  const userId = JSON.parse(localStorage.getItem('userId'));
  const cart = JSON.parse(localStorage.getItem('cart'));
  const [sellers, setSellers] = useState([]);
  const navigate = useNavigate();

  const postSale = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: { Authorization: token },
    };
    try {
      const value = { ...sale, userId, totalPrice: cartValue, cart };
      console.log(value);
      const { data } = await axiosInstance
        .post('/sales', value, config);
      navigate(`/customer/orders/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const getSellers = async () => {
    try {
      const { data } = await axiosInstance
        .get('/users/search?role=seller');
      setSellers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target }) => {
    // console.log({ targetName: target.name, targetValue: target.value });
    setSale((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  useEffect(() => getSellers(), []);
  return (
    <section className="main-checkout">
      <Header userName={ name } />
      <span>Finalizar pedido</span>
      <section>
        <table>
          <TableHead />
          {
            cart.map((item, i) => {
              const priceFormat = `${item.price}`.replace('.', ',');
              return (
                <TableRow
                  key={ i }
                  index={ i }
                  id={ item.id }
                  title={ item.title }
                  quantity={ item.quantity }
                  price={ priceFormat }
                  subTotal={ (item.quantity * item.price).toFixed(2).replace('.', ',') }
                />
              );
            })
          }
        </table>

        <section>
          Total: R$
          <span data-testid="customer_checkout__element-order-total-price">
            {cartValue ? cartValueFormat : 0.00}
          </span>
        </section>
      </section>
      <section className="details-checkout">
        <DetailsDelivery
          deliveryAddress={ sale.deliveryAddress }
          deliveryNumber={ sale.deliveryNumber }
          onChangefn={ handleChange }
          sellers={ sellers }
          sellerId={ sale.sellerId }
        />
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ postSale }
        >
          Finalizar pedido
        </button>
      </section>
    </section>

  );
}

export default Checkout;
