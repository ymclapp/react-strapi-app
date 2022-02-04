import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import { Card, Container, CardGroup, FloatingLabel, Button, Form } from 'react-bootstrap';


import './Profile.css';
import axios from 'axios';


const profileDemoAPI = '/profiles';

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


    //const history = useHistory();

    // const [errMsg, setErrMsg] = useState('');

    //const [demographicData, setDemographicData] = useState({
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');

    // });


    const user = JSON.parse(localStorage.getItem('user'));
    const registration = JSON.parse(localStorage.getItem('registration'));
    const demographic = JSON.parse(localStorage.getItem('demographic'));


    // useEffect(() => {
    //     const demographic = localStorage.setItem('demographic', JSON.stringify({
    //         username: user.username,
    //         firstName: user.firstName,
    //         lastName: user.lastName,
    //         address: demographicData.address,
    //         city: demographicData.city,
    //         state: demographicData.state,
    //         zip: demographicData.zip,
    //         phone: demographicData.phone,
    //     }));
    // }, []); 


    const handleDemoAdd = async (e) => {
        e.preventDefault();
        // const demographicData = localStorage.setItem('demographic', JSON.stringify({data: {
        //     username: user.username,
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     address: demographic.address,
        //     city: demographicData.city,
        //     state: demographicData.state,
        //     zip: demographicData.zip,
        //     phone: demographicData.phone,
        // }}));

        try {
            await localStorage.setItem('demographic', JSON.stringify({
                    address,
                    city,
                    state,
                    zip,
                    phone,
            }));

            await localStorage.getItem('demographic');
            const response = await axios.post(profileDemoAPI,
                JSON.stringify({
                    data: {
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        address: demographic.address,
                        city: demographic.city,
                        state:  demographic.state,
                        zip:  demographic.zip,
                        phone:  demographic.phone,
                    }}),
                {
                    headers: { 'Content-Type': 'application/json' },

                }
            );

            console.log(response.data);
            //localStorage.setItem('demographic', response.data);

        } catch (err) {
            console.warn(err);
        }

    }


    return (
        <>
            <div>
                {!demographic ? (
                    <div>
                        <h3 className='text-center'>{user.firstName}, please provide your mailing address</h3>
                        <Form className='demo-form' onSubmit={handleDemoAdd}>
                            {/* <Form className='demo-form'> */}
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

                            {/* <Button type='submit' className='demo-button' onClick={() => {
                             alert('Thank you for updating your profile!  Please wait while we save your information');
                            console.log(demographicData);
                             localStorage.setItem('demographic', JSON.stringify({ demographicData }));
                             window.location.reload();
                             history.push('/profile');
                        }}>Update Profile </Button> */}
                            <Button type='submit' className='demo-button'>Update Profile</Button>
                            {/* <Button type='save' className='demo-save-button' onClick={()=> {localStorage.setItem('demographic', JSON.stringify({ demographic }))}}>Save Info</Button> */}
                            <Button type='close' className='close-button'>Skip</Button>
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
                                    Mailing Address:  {demographic.data.address}
                                    <br />
                                    City:  {demographic.data.city}
                                    <br />
                                    State:  {demographic.data.state}
                                    <br />
                                    Zip:  {demographic.data.zip}
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