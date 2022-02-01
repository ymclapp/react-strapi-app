import React from 'react';
import './Conference.css';
import Logo from '../conference/conf_logo.png';
import { Card, Container, CardGroup, Button } from 'react-bootstrap';

import pic1 from '../stockPhotos/conference-image1.jpg';
import pic2 from '../stockPhotos/conference-image2.jpg';
import pic3 from '../stockPhotos/conference-image3.jpg';

export default function Home() {

    const user = JSON.parse(localStorage.getItem('user'));


    return (
        <>
            <div className='container text-center'>
                <header className='jumbotron'>
                    <h3>Welcome to the Conference page, {user.firstName}!</h3>
                    <img
              alt='ATS Conference Logo'
              src={ Logo }
              width='460'
              height='160'
            />
                </header>
            </div>

            <Container as='div' className='conference text-center'>
                <CardGroup>
                    <Card className="card">
                        <Card.Header>
                        <strong>Conference Registration</strong>
                        </Card.Header>
                        <Card.Img className='featured' variant='top' src={pic1} />
                        <Card.Body>
                            <Card.Text>
                                Text<br />More text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/form'>Link</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Header>
                        <strong>Sessions</strong>
                        </Card.Header>
                        <Card.Img className='featured' variant='top' src={pic2} />
                        <Card.Body>
                            <Card.Text>
                                Text<br />More text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/sessions'>Link</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Header>
                            <strong>Sponsors</strong>
                        </Card.Header>
                        <Card.Img className='featured' variant='top' src={pic3} />
                        <Card.Body>
                            <Card.Text>
                                Text<br />More text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/conference'>Link</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>

            <Container as='div' className='home text-center mt-5'>
                <CardGroup>
                    <Card className="card">
                        <Card.Header>
                            Title1
                        </Card.Header>
                        {/* <Card.Img className='featured' variant='top' src={pic1} /> */}
                        <Card.Body>
                            <Card.Text>
                                Text<br />More text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/conference'>Link</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Header>
                            Title2
                        </Card.Header>
                        {/* <Card.Img className='featured' variant='top' src={pic2} /> */}
                        <Card.Body>
                            <Card.Text>
                                Text<br />More text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/conference'>Link</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Header>
                            Text3
                        </Card.Header>
                        {/* <Card.Img className='featured' variant='top' src={pic3} /> */}
                        <Card.Body>
                            <Card.Text>
                                Text<br />More text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/conference'>Link</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
        </>
    )
}