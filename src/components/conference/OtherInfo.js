//import React, { useState } from 'react';
import React from 'react';
import { Form } from 'react-bootstrap';

export default function OtherInfo({ formData, setFormData }) {


    return (
        <div className='other-info-container'>
            <input
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

                <Form>
                    <Form.Select aria-label='Select a date:' onChange={(event) => setFormData({...formData, confDate:  event.target.value})}>
                        <option>Select a date:</option>
                        <option value='fridayOnly'>Friday, May 13 Only</option>
                        <option value='both'>Friday, May 13 and Saturday, May 14</option>
                        <option value='saturdayOnly'>Saturday, May 14 Only</option>
                    </Form.Select>
                </Form>
        </div>
    );
}

