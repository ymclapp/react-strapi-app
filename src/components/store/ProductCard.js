import React, { useContext } from 'react';
import './ProductCard.css';
//import { Badge } from 'react-bootstrap';
//import formatCurrency from 'format-currency';
import CurrencyFormat from 'react-currency-format';


import CartContext from '../../context/cart/CartContext';




const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);
  //let opts = { prefix: '$' };  //using format-currency had an assert error - loaded CurrencyFormat and changed to prefix vs symbol. Still getting an error based on the coding.  Originally coded as {CurrencyFormat(`${product.price}`, 0), opts)} - this gave an error 

  return (
    <>
    <div className='productCard__wrapper'>
      <div key={product.id}>
        {/* <img className='productCard__img' src={film.attributes.image} alt='' /> */}
        <h4>{product.attributes.title}</h4>
        <h5>{product.id}</h5>
        <div className='ProductCard__price'>
          <CurrencyFormat className = 'text-center' value={`${product.attributes.budget}`} thousandSeparator={true} prefix={'$'} />
        </div>
        <button
          className='ProductCard__button'
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        {/* <div className='ProductCard__tags'>
          <Badge pill text='dark' bg='secondary '>{product.tags}</Badge>
          </div> */}
      </div>
    </div>
    </>
  );
};

export default ProductCard;
