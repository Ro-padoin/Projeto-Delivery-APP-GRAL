/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import DeliveryContext from '../../../utils/context/DeliveryContext';
import Button from '../../Button';
import Input from '../../Input';
import Span from '../../Span';

function Card(props) {
  const { id, title, price, image } = props;
  const priceFormat = `${price}`.replace('.', ',');
  const { updateCartItem, cart } = useContext(DeliveryContext);
  const [itemValue, setItemValue] = useState(0);

  useEffect(() => {
    const itemOnCart = cart.find((item) => item.id === id);
    if (itemOnCart) {
      setItemValue(itemOnCart.quantity);
    }
  }, [cart, id]);

  const updateItemValue = (value) => {
    const finalValue = (value > 0) ? value : 0;
    setItemValue(finalValue);
    updateCartItem(props, finalValue);
  };

  return (
    <section className="product-card" key={ id }>
      <img
        src={ image }
        alt="product-card"
        className="card-image"
      />
      <section className="product-card-bottom">
        <Span>{title}</Span>
        <Span>
          R$:
          { ' ' }
          {priceFormat}
        </Span>
        <section className="product-card-bottom-buttons">
          <Button
            onClickfn={ () => updateItemValue(itemValue - 1) }
            classNameBtn="product-card-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </Button>
          <Input
            inputClass="product-card-input"
            type="number"
            name="quantity"
            value={ itemValue }
            onChangefn={ ({ target: { value } }) => { updateItemValue(value); } }
            labelText=""
          />
          <Button
            onClickfn={ () => updateItemValue(itemValue + 1) }
            classNameBtn="product-card-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1a1940" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </Button>
        </section>
      </section>
    </section>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
}.isRequired;

export default Card;
