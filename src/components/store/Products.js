import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';

//import products from '../../data';
import ProductCard from '../store/ProductCard';

import CurrencyFormat from 'react-currency-format';
import { Card } from 'react-bootstrap';

const dbAPI = 'http://localhost:1337/api/films';

export default function Products() {

    const [films, setFilms] = useState({data: []});

    useEffect(() => {
        getFilmsWithFetch();
    }, []);

const getFilmsWithFetch = async () => {
        const response = await fetch(dbAPI);
        const jsonData = await response.json({});
        setFilms(jsonData);
        console.log(jsonData);
    };

    return (
        <>
            <div className='products__wrapper'>
                {films.data.map((film) => (
                    <ProductCard key={film.id} product={film} />
                    // <Card.Text>
                    // <CurrencyFormat className='text-center' value={film.attributes.budget} thousandSeparator={true} prefix={'$'} /> 
                    // </Card.Text>
                ))}
            </div>
        </>
    );
};

