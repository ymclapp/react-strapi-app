import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const dbAPI = 'http://localhost:8080/api/products';//need to figure out error on getting all

//this is just to "get" users to display on the dashboard

export default function Products() {

    const [products, setProducts] = useState('');

    useEffect(() => {
        getProductsWithFetch();
    }, []);

    const getProductsWithFetch = async () => {
        const response = await fetch(dbAPI);
        const jsonData = await response.json({});
        setProducts(jsonData);
        console.log(jsonData);
    };



    return (
        <>
            <Container as='div' className='showProducts mt-4'>
                <h4>Product List</h4>
                {products &&
                    products.map((product, index) =>
                        <Card>
                            <Card.Body>
                                <Card.Title key={index}>Product Title:  {product.title}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Card.Footer>
                                    <div><span>Product Type:  {product.type}</span></div>
                                    <div><span className='text-right'>${product.price}</span></div>                                    
                                </Card.Footer>
                              </Card.Body>
                        </Card>)}
                        {/* <Card>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                              </Card.Body>
                        </Card> */}
            </Container>
        </>

    );
}