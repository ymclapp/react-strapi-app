import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Container, CardGroup, FloatingLabel, Button, Form } from 'react-bootstrap';


import './Profile.css';
import axios from 'axios';


//const profileDemoAPI = '/profiles';  //had to hard code to get it to work.  Not sure if it it wasn't picking up the axios baseUrl or what

export default function Profile() {

    const history = useHistory();

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');

    const user = JSON.parse(localStorage.getItem('user'));
    const registration = JSON.parse(localStorage.getItem('registration'));
    const demographic = JSON.parse(localStorage.getItem('demographic'));


    const handleDemoAdd = async (e) => {
        e.preventDefault();

        try {
            await localStorage.setItem('demographic', JSON.stringify({
                    address,
                    city,
                    state,
                    zip,
                    phone,
            }));

            const response = await axios.post('http://localhost:1337/api/profiles',
                JSON.stringify({
                    data: {
                        username: user.username,
                        // firstName: user.firstName,
                        // lastName: user.lastName,
                        address,
                        city,
                        state,
                        zip,
                        phone,
                    }}),
                {
                    headers: { 'Content-Type': 'application/json' },

                }
            );

            console.log(response.data);
            history.go('/profile');


        } catch (err) {
            console.warn(err.message);
        }


    }

    return (
        <>
            <div>
                {!demographic ? (
                    <div>
                        <h3 className='text-center'>{user.firstName}, please provide your mailing address</h3>
                        <Form className='demo-form' onSubmit={handleDemoAdd}>

                            <FloatingLabel className='demo-label' htmlFor='address'>Address:  </FloatingLabel>
                            <Form.Control
                                className='demo-input'
                                type='text'
                                id='address'
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            //required
                            />

                            <FloatingLabel className='demo-label' htmlFor='city'>City:  </FloatingLabel>
                            <Form.Control
                                className='demo-input'
                                type='text'
                                id='city'
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            //required
                            />

                            <FloatingLabel className='demo-label' htmlFor='state'>State:  </FloatingLabel>
                            <Form.Control
                                className='demo-input'
                                type='text'
                                id='state'
                                value={state}
                                onChange={e => setState(e.target.value)}
                            //required
                            />

                            <FloatingLabel className='demo-label' htmlFor='zip'>Zip:  </FloatingLabel>
                            <Form.Control
                                className='demo-input'
                                type='text'
                                id='zip'
                                value={zip}
                                onChange={e => setZip(e.target.value)}
                            //required
                            />

                            <FloatingLabel className='demo-label' htmlFor='phone'>Phone:  </FloatingLabel>
                            <Form.Control
                                className='demo-input'
                                type='text'
                                id='phone'
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            //required
                            />

                            <Button type='submit' className='demo-button'>Update Profile</Button>
                          </Form>
                    </div>

                ) : (


                    <Container as='div' className='showUsers mt-4'>
                        <h2 className='text-center'><strong>{user.firstName} {user.lastName}'s Profile</strong></h2>
                        <h6 className='text-center'> info is showing from localStorage</h6>
                        <CardGroup>
                            <Card className='profile-card'>
                                <Card.Header className='user-header text-center'>
                                    User Summary
                                </Card.Header>
                                <Card.Body className='profile-body text-center'>
                                    User Id:  {user.id}
                                    <br />
                                    Username:  {user.username}
                                    <br />
                                    User Email:  {user.email}

                                </Card.Body>
                            </Card>

                            <Card className='profile-card'>
                                <Card.Header className='user-header text-center'>
                                    Demographics
                                </Card.Header>
                                <Card.Body className='profile-body text-center'>
                                    Mailing Address:  {demographic.address}
                                    <br />
                                    City:  {demographic.city}
                                    <br />
                                    State:  {demographic.state}
                                    <br />
                                    Zip:  {demographic.zip}
                                </Card.Body>
                            </Card>

                            {registration ? (
                                <div>
                                    <Card className='profile-card'>
                                        <Card.Header className='user-header text-center'>
                                            2022 Conference Registration Summary
                                        </Card.Header>
                                        <Card.Body className='profile-body text-center'>
                                            <Card.Text>
                                                Conference Date(s):  {registration.formData.confDate}
                                                <br />
                                                Text2:  {registration.formData.text2}
                                                <br />
                                                Text0:  {registration.formData.text0}
                                                <br />
                                                Text1:  {registration.formData.text1}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ) : (
                                <Card className='profile-card'>
                                    <Card.Header className='user-header text-center'>
                                        Not Yet Registered for the 2022 Conference
                                    </Card.Header>
                                    <Card.Body className='profile-body text-center'>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            )}
                        </CardGroup>
                    </Container>


                )}
            </div>
        </>

    );
}