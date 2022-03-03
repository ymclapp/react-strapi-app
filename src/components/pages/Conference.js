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
                    <img
                        alt='ATS Conference Logo'
                        src={Logo}
                        width='100%'
                        height='180'
                    />
                </header>
            </div>
            <div className='conf-summary text-justify'>
                <p>
                    The ATS International Conference is the home of pulmonary, critical care, and sleep professionals, from those in the earliest stages of their careers to those whose research or strides in clinical care has gained them international recognition. Each year, nearly 14,000 of these professionals choose to attend, present, and learn about the latest advances, meet with colleagues from around the world, and strike new collaborations. It is truly where today’s science meets tomorrow’s care.
                    <br /><br />
                    The International Conference is also multidisciplinary. Clinicians and researchers in many other fields attend the conference, thereby enriching conversations that lead to insights that ultimately improve patient care.
                    <br /><br />
                    Equally important, the ATS International Conference gathers the entire health care team in one place to share ideas across these medical and scientific disciplines. It is the ideal place for registered nurses, advanced practice nurses, respiratory therapists, and hospitalists to discuss their experiences, challenges, and research so that all can learn about the latest advances in understanding pulmonary disease, critical illness, and sleep disorders.
                    <br /><br />
                    And of course, the International Conference is truly international:
                    40 percent of attendees arrive from laboratories and patient care centers beyond the United States.
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
                                Your registration includes a networking reception and dinner with keynote address on Friday, May 13th as well as a full day of programming, continental breakfast, luncheon, plenty of networking time and a closing reception on Saturday, May 14th.
                                <br /><br />
                                Registration will open on Thursday, January 6, 2022 along with registration for the ATS 2022 International Conference. Attendance at the Respiratory Innovation Summit does not include OR require full registration for ATS 2022, but attendees are encouraged to be a part of our community.
                                <br /><br />
                                More information about ATS 2022 can be found here: https://conference.thoracic.org
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
                            <Card.Img className='featured' variant='top' src={pic2} />
                        </div>
                        <Card.Body>
                            <Card.Text>
                                Sessions will be held in the Moscone Center<br />747 Howard Street<br />San Francisco, CA 94103
                                <br /><br />
                                ATS 2022 San Francisco will offer the latest information on clinical, basic, and translational science in pulmonary, critical care, and sleep medicine.
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
                        <Card.Img className='featured' variant='top' src={pic3} />
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