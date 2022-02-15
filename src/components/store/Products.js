import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';

import products from '../../data';
import ProductCard from '../store/ProductCard';



export default function HomeScreen() {
    return (
        <>
            <div className='products__wrapper'>
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};

