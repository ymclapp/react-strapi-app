import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FloatingLabel, Button, Form } from 'react-bootstrap';


import './ProductMaint.css';
import axios from 'axios';


export default function ProductMaint() {

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');


    const handleProductAdd = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:1337/api/products',
                JSON.stringify({
                        title,
                        description,
                        imageUrl,
                        releaseDate,
                        type,
                        price,
                }),
                {
                    headers: { 'Content-Type': 'application/json' },

                }
            );

            console.log(response.data);
            history.go('/store');


        } catch (err) {
            console.warn(err.message);
        }


    }

    return (
        <>
            <div>
                <h3 className='text-center'>Add a Product:</h3>
                <Form className='add-product-form' onSubmit={handleProductAdd}>

                    <FloatingLabel className='add-product-label' htmlFor='title'>Title:  </FloatingLabel>
                    <Form.Control
                        className='product-input'
                        type='text'
                        id='title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />

                    <FloatingLabel className='add-product-label' htmlFor='description'>Description:  </FloatingLabel>
                    <Form.Control
                        className='product-input'
                        type='text'
                        id='description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />

                    <FloatingLabel className='add-product-label' htmlFor='imageUrl'>image Url:  </FloatingLabel>
                    <Form.Control
                        className='product-input'
                        type='text'
                        id='imageUrl'
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        required
                    />

                    <FloatingLabel className='add-product-label' htmlFor='releaseDate'>Release Date:  </FloatingLabel>
                    <Form.Control
                        className='product-input'
                        type='text'
                        id='releaseDate'
                        value={releaseDate}
                        onChange={e => setReleaseDate(e.target.value)}
                    //required
                    />

                    {/* This should end up being a dropdown */}
                    <FloatingLabel className='add-product-label' htmlFor='type'>Product Type:  </FloatingLabel>
                    <Form.Control
                        className='product-input'
                        type='text'
                        id='type'
                        value={type}
                        onChange={e => setType(e.target.value)}
                    //required
                    />

                    <FloatingLabel className='add-product-label' htmlFor='price'>Product Price:  </FloatingLabel>
                    <Form.Control
                        className='product-input'
                        type='text'
                        id='price'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    //required
                    />

                    <Button type='submit' className='add-product-button'>Add</Button>
                </Form>
            </div>
        </>

    );
}