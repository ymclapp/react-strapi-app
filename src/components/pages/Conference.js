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
                    <h3>Welcome to the Conference page, {user.prefix} {user.lastName}!</h3>

                </header>
            </div>
            <div className='conf-summary text-justify'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Sit amet cursus sit amet dictum sit amet justo donec.
                </p>
                <h3 className='conf-takeaway'>
                    Join your colleagues, and be the first to know.
                </h3>
            </div>


            <Container as='div' className='conference text-center'>
                <CardGroup>
                    <Card className="card">
                        <Card.Header className='conf-header'>
                            Conference Registration
                        </Card.Header>
                        <Card.Img className='featured' variant='top' src={pic1} />
                        <Card.Body>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Sit amet cursus sit amet dictum sit amet justo donec.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/form'>Link</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Header className='conf-header'>
                            Sessions
                        </Card.Header>
                        <div>
                            <Card.Img className='featured' variant='top' src={pic3} />
                        </div>
                        <Card.Body>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Sit amet cursus sit amet dictum sit amet justo donec.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/sessions'>Link</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Header className='conf-header'>
                            Sponsors
                        </Card.Header>
                        <Card.Img className='featured' variant='top' src={pic1} />
                        <Card.Body>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                <br /><br />
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                        <Card.Header className='conf-header'>
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
                        <Card.Header className='conf-header'>
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
                        <Card.Header className='conf-header'>
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