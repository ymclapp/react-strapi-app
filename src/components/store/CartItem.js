import { useContext } from 'react';
import './CartItem.css';

import CartContext from '../../context/cart/CartContext';
//import formatCurrency from 'format-currency';
import CurrencyFormat from 'react-currency-format';

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);
    //let opts = {format: '%s%v', symbol: '$'};
    //let opts = { prefix: '$', };

    return (
        <>
        <li className='CartItem__item'>
            {/* <img src={item.image} alt='' /> */}
            <div>
                {item.attributes.title} {item.id} <br />
                <CurrencyFormat value={`${item.attributes.price}`}thousandSeparator={true} prefix={'$'} />
            </div>
            <button className='CartItem__button' onClick={() => removeItem(item.id)}>
                Remove
            </button>
        </li>
        </>
    );
};

export default CartItem;