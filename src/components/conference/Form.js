import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';

import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';
import ConferenceDate from './OtherInfo';
import Confirmation from './Confirmation';

export default function Form() {

    //const history = useHistory();
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
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

    const FormTitles = ['Form 1', 'Form 2', 'Form 3', 'Confirmation'];

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
                    <h2>{FormTitles[page]}</h2>
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
                                alert('Registration Info Saving');
                                console.log(formData);
                                localStorage.setItem('form1', JSON.stringify({text0:  formData.text0, text1:  formData.text1, text2:  formData.text2}));
                                localStorage.setItem('form2', JSON.stringify({text3:  formData.text3, text4:  formData.text4, text5:  formData.text5}));
                                localStorage.setItem('form3', JSON.stringify({confDate: formData.confDate, text6:  formData.text6, text7:  formData.text7, text8: formData.text8}));
                                localStorage.setItem('registration', JSON.stringify({formData}));
                                setPage((currPage) => currPage + 1);
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
