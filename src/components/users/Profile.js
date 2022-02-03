//import React, { useEffect, useState } from 'react';
import React from 'react';
import { Card, Container, CardGroup, FloatingLabel, Button, Form } from 'react-bootstrap';


import './Profile.css';


//const API = 'http://localhost:1337/api/users/me';

export default function Profile() {
    //const id = JSON.parse(localStorage.getItem('user.id'));

    // const [profile, setProfile] = useState();
    // const [demographics, setDemographics] = useState([]);
    // const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);

    // useEffect(async () => {
    //if (!id) return;
    //   const Profiledata = await axios.get(
    //'http://localhost:1337/users/' + id
    //);
    //var demographicData = DemographicData?.data?.demographic;
    //setProfile(data?.data);
    //setDemographics(demographicData);
    // }, [id]);



    const user = JSON.parse(localStorage.getItem('user'));
    const registration = JSON.parse(localStorage.getItem('registration'));
    const demographic = JSON.parse(localStorage.getItem('demographic'));


    return (
        <>
            <div>
                {!demographic ? (
                    <div>
                        <h3 className='text-center'>{user.firstName}, please provide your mailing address</h3>
                        <Form className='demo-form'>
                            <FloatingLabel className='demo-label' htmlFor='address'>Address:  </FloatingLabel>
                            <Form.Control
                                className='demo-input'
                                type='text'
                                id='address'
                            //onChange={e => setPassword(e.target.value)}
                            //value={password}
                            //required
                            />

                            <FloatingLabel className='demo-label' htmlFor='city'>City:  </FloatingLabel>
                            <Form.Control
                                className='demo-input'
                                type='text'
                                id='city'
                            //onChange={e => setPassword(e.target.value)}
                            //value={password}
                            //required
                            />
                            <Button type='submit' className='demo-button'>Update Profile </Button>
                        </Form>
                    </div>

                ) : (


                    <Container as='div' className='showUsers mt-4'>
                        {/* <h3>This will show the raw data for all demographics - curly brace JSON.stringify(user).  This is using localStorage via const user = JSON.parse(localStorage.getItem('user'));</h3>
                <p>{JSON.stringify(user)}</p> */}
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
                                    Mailing Address:  {user.id}
                                    <br />
                                    City:  {user.username}
                                    <br />
                                    State:  {user.email}
                                    <br />
                                    Zip:  {user.roles}
                                </Card.Body>
                            </Card>

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
                                        Occupation:  {registration.formData.occupation}
                                        <br />
                                        Text1:  {registration.formData.text1}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Container>


                )}
            </div>
        </>

    );
}