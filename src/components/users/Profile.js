//import React, { useEffect, useState } from 'react';
import React from 'react';
import { Card, Container } from 'react-bootstrap';


//const API = 'http://localhost:1337/api/users/me';

export default function Profile() {

    const user = JSON.parse(localStorage.getItem('user'));


    return (
        <>
            <Container as='div' className='showUsers mt-4'>
                {/* <h3>This will show the raw data for all demographics - curly brace JSON.stringify(user).  This is using localStorage via const user = JSON.parse(localStorage.getItem('user'));</h3>
                <p>{JSON.stringify(user)}</p> */}
                <h4>{user.firstName} {user.lastName}</h4>
                
                <Card>
                    <Card.Body>
                        User Id:  {user.id}
                        <br />
                        Username:  {user.username}
                        <br />
                        User Email:  {user.email}
                    </Card.Body>

                </Card>
            </Container>
        </>

    );
}