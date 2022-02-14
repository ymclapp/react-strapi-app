import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';

const dbAPI = 'http://localhost:1337/api/films';//need to figure out error on getting all


export default function Products() {

    //const [products, setProducts] = useState({data:[]});
    //const [products, setProducts] = useState({data:{}});
    const [films, setFilms] = useState({data: []});

    // useEffect(() => {
    //     getProductsWithFetch();
    // }, []);

    useEffect(() => {
        getFilmsWithFetch();
    }, []);
const getFilmsWithFetch = async () => {
    // const getProductsWithFetch = async () => {
        const response = await fetch(dbAPI);
        const jsonData = await response.json({});
        //setProducts(jsonData);
        setFilms(jsonData);
        console.log(jsonData);
    };



    return (
        <>
            <Container as='div' className='showProducts mt-4'>
                <h4 className='text-center'>Movies List</h4>
                {films.data.map((film) =>
                        <Card key={film.id}>
                            <Card.Body>
                                <Card.Title className='text-center'>Movie Title:  <strong>{film.attributes.title}</strong></Card.Title>
                                <Card.Text className='text-center'>
                                <CurrencyFormat className='text-center' value={film.attributes.budget} thousandSeparator={true} prefix={'$'} />
                                </Card.Text>
                                <Card.Footer className='text-center'>
                                    <div><span>Movie Release Date:  {film.attributes.release_date}</span></div>
                                    <div><span className='text-right'>
                                    <CurrencyFormat className='text-center' value={film.attributes.revenue} thousandSeparator={true} prefix={'$'} />
                                    </span></div>                                    
                                </Card.Footer>
                              </Card.Body>
                        </Card>)}

                        {/* {products.data.map((product) =>
                        <Card key={product.id}>
                            <Card.Body>
                                <Card.Title>Product Title:  {product.attributes.title}</Card.Title>
                                <Card.Text>
                                    Summary:  {product.attributes.description}
                                </Card.Text>
                                <Card.Footer>
                                    <div><span>Product Type:  {product.attributes.type}</span></div>
                                    <div><span className='text-right'>${product.attributes.price}</span></div>                                    
                                </Card.Footer>
                              </Card.Body>
                        </Card>)} */}

                        {/* {products &&
                    products.map((item, index) =>
                        <Card key={index}>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                              </Card.Body>
                        </Card>)} */}
            </Container>
        </>

    );
}