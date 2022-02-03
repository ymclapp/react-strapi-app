import React, { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import './Confirmation.css';

export default function Confirmation() {

    //const user = JSON.parse(localStorage.getItem('user'));
    const form1 = JSON.parse(localStorage.getItem('form1'));
    const form2 = JSON.parse(localStorage.getItem('form2'));
    const form3 = JSON.parse(localStorage.getItem('form3'));

    const [registrationData, setRegistrationData] = useState({
        text0: '',
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
        text6: '',
        text7: '',
        text8: '',
        confDate:  '',
    });

    // const handleConferenceRegistration = () => {
    //     alert('Registration Submitted');
    //     console.log('This is the final registration data', registrationData);
    //     localStorage.setItem('registration', JSON.stringify(registrationData));
    //     localStorage.setItem('dates', JSON.stringify({confDate: registrationData.confDate, nationality:  registrationData.nationality, other:  registrationData.other, occupation: registrationData.occupation}));
    //     localStorage.setItem('sessions', JSON.stringify({email:  registrationData.email, text1:  registrationData.text1, text2:  registrationData.text2}));
    //     localStorage.setItem('stuff', JSON.stringify({firstName:  registrationData.firstName, lastName:  registrationData.lastName, confirmed:  registrationData.confirmed}));
    // };


    return (
        <div className='confirmation-container'>
            <Form className='conf-confirmation'>
                <Form.Group>

                    <FloatingLabel className='confirmation-label' htmlFor='text0'>Text 0:  </FloatingLabel>
                    <Form.Control
                        defaultValue={form1.text0}
                        onChange={(event) => setRegistrationData({ ...registrationData, text0: event.target.value })} />

                    <FloatingLabel className='confirmation-label' htmlFor='text1'>Text 1:  </FloatingLabel>
                    <Form.Control
                        defaultValue={form1.text1}
                        onChange={(event) => setRegistrationData({ ...registrationData, text1: event.target.value })}
                    />
                </Form.Group>

                <Form.Group>

                    <FloatingLabel className='confirmation-label' htmlFor='confDate'>Date Attending:  </FloatingLabel>
                    <Form.Control
                        defaultValue={form3.confDate}
                        onChange={(event) => setRegistrationData({ ...registrationData, confDate: event.target.value })}
                    />

                    <FloatingLabel className='confirmation-label' htmlFor='text6'>Text 6:  </FloatingLabel>
                    <Form.Control
                        defaultValue={form3.text6}
                        onChange={(event) => setRegistrationData({ ...registrationData, text6: event.target.value })}
                    />
                </Form.Group>

                <Form.Group>

                    <FloatingLabel className='confirmation-label' htmlFor='text3'>Text 3:  </FloatingLabel>
                    <Form.Control
                        defaultValue={form2.text3}
                        onChange={(event) => setRegistrationData({ ...registrationData, text3: event.target.value })}
                    />

                    <FloatingLabel className='confirmation-label' htmlFor='text2'>Text 2:  </FloatingLabel>
                    <Form.Control
                        defaultValue={form1.text2}
                        onChange={(event) => setRegistrationData({ ...registrationData, text2: event.target.value })}
                    />
                </Form.Group>

                <Form.Group>

                    <FloatingLabel className='confirmation-label' htmlFor='text7'>Text 7:  </FloatingLabel>
                    <Form.Control
                        defaultValue={form3.text7}
                        onChange={(event) => setRegistrationData({ ...registrationData, text7: event.target.value })}
                    />

                    <FloatingLabel className='confirmation-label' htmlFor='text8'>Text 8:  </FloatingLabel>
                    <Form.Control
                        defaultValue={form3.text8}
                        onChange={(event) => setRegistrationData({ ...registrationData, text8: event.target.value })}
                    />
                </Form.Group>
                <p>
                    Please review the above information.  If anything is not correct, click the Prev button to go back to the appropriate form, fix the incorrect information, then click Next to get back to the confirmation page.
                </p>


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
            {/* <Button onClick={handleConferenceRegistration}>Save final conference info</Button> */}
        </div>
    )

}