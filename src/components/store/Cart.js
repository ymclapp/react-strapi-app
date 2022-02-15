import { useContext } from 'react';
import './Cart.css';
//import formatCurrency from 'format-currency';
//import CurrencyFormat from 'react-currency-format';

import CartContext from '../../context/cart/CartContext';
import CartItem from './CartItem';

const Cart = () => {

    const { showCart, cartItems, showHideCart } = useContext(CartContext);
    //let opts = { prefix: '$' };

    return (
        <>
            {showCart && (
                <div className='cart__wrapper'>
                    <div style={{ textAlign: 'center' }}>
                        <i
                            style={{ cursor: 'pointer' }}
                            className='fa fa-times-circle'
                            aria-hidden='true'
                            onClick={showHideCart}
                        ></i>
                    </div>
                    <div className='cart__innerWrapper'>
                        {cartItems.length === 0 ? (
                            <h4>Cart is Empty</h4>
                        ) : (
                            <ul>
                                {cartItems.map((item) => (
                                    <CartItem key={item.id} item={item}
                                    />
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='Cart__cartTotal'>
                        <div>
                            Cart Total
                        </div>
                        <div></div>
                        <div style={{ marginLeft: 5 }}>
                            ${cartItems.reduce((amount, item) => item.price + amount, 0)}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


export default Cart;