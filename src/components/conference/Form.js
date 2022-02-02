import React, { useState } from 'react';

import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';
import ConferenceDate from './OtherInfo';

export default function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        username: '',
        nationality: '',
        other: '',
        occupation: '',
        confDate:  '',
    });

    const FormTitles = ['Sign Up', 'Personal Info', 'Conference Date'];

    //will find out what page we are in and then return a component based on that
    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else {
            return <ConferenceDate formData={formData} setFormData={setFormData} />;
        }
    };

    //const response = JSON.stringify(formData);

    return (
        <div className='conf-form'>
            <div className='progressbar'>
                <div style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}></div>
            </div>
            <div className='confform-container'>
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className='body'>{PageDisplay()}</div>
                <div className='footer'>
                    <button
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}
                    >
                        Prev
                    </button>

                    <button
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert('Form Submitted');
                                console.log(formData);
                                localStorage.setItem('dates', JSON.stringify([formData.confDate, formData.nationality, formData.other, formData.occupation]));
                                localStorage.setItem('sessions', JSON.stringify([formData.email, formData.password, formData.confirmPassword]));
                                localStorage.setItem('stuff', JSON.stringify([formData.firstName, formData.lastName, formData.username]));
                            } else { 
                                setPage((currPage) => currPage + 1);
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    )
}
