import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
    const history = useHistory();

    const [demographicData, setDemographicData] = useState({
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',

    });


    const user = JSON.parse(localStorage.getItem('user'));
    const registration = JSON.parse(localStorage.getItem('registration'));
    const demographic = JSON.parse(localStorage.getItem('demographic'));


    // useEffect(() => {
    //     const demo = JSON.stringify(localStorage.getItem('demographic'));
    //     if (demo) {
    //         const demoFound = JSON.stringify(demographic);
    //         setDemographic(demoFound);
    //     }
    // }, []);



    // const handleDemoAdd = (e) => {
    //     e.preventDefault();
    //     //setDemographic = { address, city, state, zip, phone };
    //     const response = JSON.stringify( address, city, state, zip, phone );
    //     console.log('Submitting....');
    //     alert('Thank you for updating your profile!  Please wait while we save your information');
    //     console.log(response);
    //     localStorage.setItem('demographic', JSON.stringify(response));
    //     history.push('/profile');
    //     window.location.reload();
    // }


    return (
        <>
            <div>
                {!demographic ? (
                    <div>
                        <h3 className='text-center'>{user.firstName}, please provide your mailing address</h3>
                        <Form className='demo-form' >
                            <FloatingLabel className='demo-label' htmlFor='address'>Address:  </FloatingLabel>
                            <Form.Control
                                className='demo-input'
                                type='text'
                                id='address'
                                value={demographicData.address}
                                onChange={e => setDemographicData({...demographicData, address:  e.target.value})}
                            //required
                            />

                            <FloatingLabel className='demo-label' htmlFor='city'>City:  </FloatingLabel>
                            <Form.Control
                                className='demo-input'
                                type='text'
                                id='city'
                                value={demographicData.city}
                                onChange={e => setDemographicData({...demographicData, city:  e.target.value})}
                            //required
                            />

                            <FloatingLabel className='demo-label' htmlFor='state'>State:  </FloatingLabel>
                            <Form.Control
                                className='demo-input'
                                type='text'
                                id='state'
                                value={demographicData.state}
                                onChange={e => setDemographicData({...demographicData, state:  e.target.value})}
                            //required
                            />

                            <FloatingLabel className='demo-label' htmlFor='zip'>Zip:  </FloatingLabel>
                            <Form.Control
                                className='demo-input'
                                type='text'
                                id='zip'
                                value={demographicData.zip}
                                onChange={e => setDemographicData({...demographicData, zip:  e.target.value})}
                            //required
                            />

                            {/* <FloatingLabel className='demo-label' htmlFor='phone'>Phone:  </FloatingLabel> */}
                            <Form.Control
                                className='demo-input'
                                placeholder='Phone...'
                                type='text'
                                id='phone'
                                value={demographicData.phone}
                                onChange={e => setDemographicData({...demographicData, phone:  e.target.value})}
                            //required
                            />

                            <Button type='submit' className='demo-button' onClick={() => {
                                alert('Thank you for updating your profile!  Please wait while we save your information');
                                console.log(demographicData);
                                localStorage.setItem('demographic', JSON.stringify({ demographicData }));
                                history.push('/profile');
                                window.location.reload();
                            }}>Update Profile </Button>
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
                                    Mailing Address:  {demographic.demographicData.address}
                                    <br />
                                    City:  {demographic.demographicData.city}
                                    <br />
                                    State:  {demographic.demographicData.state}
                                    <br />
                                    Zip:  {demographic.demographicData.zip}
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
                                        Text0:  {registration.formData.text0}
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