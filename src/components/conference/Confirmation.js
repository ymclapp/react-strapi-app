import React, { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import './Confirmation.css';

export default function Confirmation() {

    const user = JSON.parse(localStorage.getItem('user'));
    const sessions = JSON.parse(localStorage.getItem('sessions'));
    const stuff = JSON.parse(localStorage.getItem('stuff'));
    const dates = JSON.parse(localStorage.getItem('dates'));

    const [registrationData, setRegistrationData] = useState({
        email: '',
        text1: '',
        text2: '',
        firstName: '',
        lastName: '',
        confirmed: '',
        yes:  '',
        nationality: '',
        other: '',
        occupation: '',
        confDate:  '',
    });

    const handleConferenceRegistration = () => {
        alert('Registration Submitted');
        console.log('This is the final registration data', registrationData);
        localStorage.setItem('registration', JSON.stringify(registrationData));
        localStorage.setItem('dates', JSON.stringify({confDate: registrationData.confDate, nationality:  registrationData.nationality, other:  registrationData.other, occupation: registrationData.occupation}));
        localStorage.setItem('sessions', JSON.stringify({email:  registrationData.email, text1:  registrationData.text1, text2:  registrationData.text2}));
        localStorage.setItem('stuff', JSON.stringify({firstName:  registrationData.firstName, lastName:  registrationData.lastName, confirmed:  registrationData.confirmed}));
    };


    return (
        <div className='confirmation-container'>
            <Form className='conf-confirmation'>
                <Form.Group>

                    <FloatingLabel className='confirmation-label' htmlFor='firstName'>First Name:  </FloatingLabel>
                    <Form.Control
                        defaultValue={user.firstName}
                        onChange={(event) => setRegistrationData({ ...registrationData, firstName: event.target.value })} />

                    <FloatingLabel className='confirmation-label' htmlFor='lastName'>Last Name:  </FloatingLabel>
                    <Form.Control
                        defaultValue={user.lastName}
                        onChange={(event) => setRegistrationData({ ...registrationData, lastName: event.target.value })}
                    />
                </Form.Group>

                <Form.Group>

                    <FloatingLabel className='confirmation-label' htmlFor='confDate'>Date Attending:  </FloatingLabel>
                    <Form.Control
                        defaultValue={dates.confDate}
                        onChange={(event) => setRegistrationData({ ...registrationData, confDate: event.target.value })}
                    />

                    <FloatingLabel className='confirmation-label' htmlFor='nationality'>Nationality:  </FloatingLabel>
                    <Form.Control
                        defaultValue={dates.nationality}
                        onChange={(event) => setRegistrationData({ ...registrationData, nationality: event.target.value })}
                    />
                </Form.Group>

                <Form.Group>

                    <FloatingLabel className='confirmation-label' htmlFor='email'>Email:  </FloatingLabel>
                    <Form.Control
                        defaultValue={sessions.email}
                        onChange={(event) => setRegistrationData({ ...registrationData, email: event.target.value })}
                    />

                    <FloatingLabel className='confirmation-label' htmlFor='text1'>Text1:  </FloatingLabel>
                    <Form.Control
                        defaultValue={sessions.text1}
                        onChange={(event) => setRegistrationData({ ...registrationData, text1: event.target.value })}
                    />
                </Form.Group>

                <Form.Group>

                    <FloatingLabel className='confirmation-label' htmlFor='firstName'>First Name:  </FloatingLabel>
                    <Form.Control
                        defaultValue={stuff.firstName}
                        onChange={(event) => setRegistrationData({ ...registrationData, firstName: event.target.value })}
                    />

                    <FloatingLabel className='confirmation-label' htmlFor='lastName'>Last Name:  </FloatingLabel>
                    <Form.Control
                        defaultValue={stuff.lastName}
                        onChange={(event) => setRegistrationData({ ...registrationData, lastName: event.target.value })}
                    />
                </Form.Group>


                {/* <input
                type='text'
                placeholder='"Dates" save to localStorage test'
                value={formData.nationality}
                onChange={(event) => setFormData({ ...formData, nationality: event.target.value })}
            />

            <input
                type='text'
                placeholder='Other...'
                value={formData.other}
                onChange={(event) => setFormData({ ...formData, other: event.target.value })}
            />

            <input
                type='text'
                placeholder='Occupation...'
                value={formData.occupation}
                onChange={(event) => setFormData({ ...formData, occupation: event.target.value })}
            />

                <Form.Select aria-label='Select a date:' value={formData.confDate} onChange={(event) => setFormData({ ...formData, confDate: event.target.value })}>
                    <option>Select a date:</option>
                    <option value='fridayOnly'>Friday, May 13 Only</option>
                    <option value='both'>Friday, May 13 and Saturday, May 14</option>
                    <option value='saturdayOnly'>Saturday, May 14 Only</option>
                </Form.Select> */}
            </Form>
            <Button onClick={handleConferenceRegistration}>Save final conference info</Button>
        </div>
    )

}