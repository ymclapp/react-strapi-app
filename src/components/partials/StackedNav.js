import React, { useContext } from 'react';
import '../partials/StackedNav.css';
import Avatar from 'react-avatar';

import Logo from './img/logo.png';
import CartContext from '../../context/cart/CartContext';

const user = JSON.parse(localStorage.getItem('user'));

export default function StackedNav() {

    const { cartItems, showHideCart } = useContext(CartContext);
    return (
        <div className='wrapper'>
            <div className='multi_color_border'></div>
            <div className='top_nav'>
                <div className='left'>
                    <div className='logo'>
                        <img
                            alt='ATS Logo'
                            src={Logo}
                            width='220'
                            height='80'
                        />
                    </div>
                    {/* <div className='search_bar'>
                        <input type='text' placeholder='Search' />
                    </div> */}
                </div>
                <div className='right'>
                    <ul>
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/store'>Store</a></li>
                        <li><a href='/conference'>Conference</a></li>
                    </ul>
                </div>
            </div>
            <div className='bottom_nav'>
                <ul>
                    <li><a href='/home'>Home</a></li>
                    <li>>></li>
                    <li><a href='/store'>Store</a></li>
                    <li>>></li>
                    <li><a href='/conference'>Conference</a></li>
                    {/* </ul> */}
                    <div className='nav__right'>
                        <div className='cart__icon'>
                            <i
                                className='fa fa-shopping-cart fa-2x'
                                aria-hidden='true'
                                onClick={showHideCart}
                            />
                            {cartItems.length > 0 && (
                                <div className='item__count'>
                                    <span>{cartItems.length}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    {user &&
                        <div className='avatar'>
                            <a href='/profile'>
                            <Avatar
                                name={`${user.firstName} ${user.lastName}`}
                                color='midnightblue'
                                round={true}
                                size={40}
                            />
                            </a>
                            {/* </Nav.Link> */}
                        </div>
                    }
                </ul>
            </div>
            <div
                className='banner text-center bg-img'
                style={{ backgroundImage: "url('https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2015/05/cysticDiagnosis-1248216538-770x553-1-650x428.jpg')", height: 300 }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='text-white'>
                            {user && <h1 className='mt-3'>Welcome {user.prefix} {user.lastName}!</h1>}
                            {!user && <h1 className='mt-3'>Welcome!</h1>}
                            <h4 className='mb-3'>Subheading</h4>
                            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                Call to action
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}