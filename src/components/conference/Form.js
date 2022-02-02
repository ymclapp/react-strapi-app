import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';
import ConferenceDate from './OtherInfo';
import Confirmation from './Confirmation';

export default function Form() {

    const history = useHistory();
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        text1: '',
        text2: '',
        firstName: '',
        lastName: '',
        confirmed: '',
        nationality: '',
        other: '',
        occupation: '',
        confDate:  '',
    });

    const FormTitles = ['Sign Up', 'Personal Info', 'Conference Date', 'Confirmation'];

    //will find out what page we are in and then return a component based on that
    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <ConferenceDate formData={formData} setFormData={setFormData} />;
        } else {
            return <Confirmation formData={formData} setFormData={setFormData} />;
        }
    };


    return (
        <div className='conf-form'>
            <div className='progressbar'>
                <div style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}></div>
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
                            if (page === FormTitles.length - 2) {
                                alert('Form Submitted');
                                console.log(formData);
                                localStorage.setItem('dates', JSON.stringify({confDate: formData.confDate, nationality:  formData.nationality, other:  formData.other, occupation: formData.occupation}));
                                localStorage.setItem('sessions', JSON.stringify({email:  formData.email, text1:  formData.text1, text2:  formData.text2}));
                                localStorage.setItem('stuff', JSON.stringify({firstName:  formData.firstName, lastName:  formData.lastName, confirmed:  formData.confirmed}));
                                history('/confirmation');
                            } else { 
                                setPage((currPage) => currPage + 1);
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ? 'Confirm' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    )
}
