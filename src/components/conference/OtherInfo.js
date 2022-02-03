//import React, { useState } from 'react';
import React from 'react';
import { Form } from 'react-bootstrap';

export default function OtherInfo({ formData, setFormData }) {


    return (
        <div className='other-info-container'>
            <label>Text 6:</label>
            <input
                type='text'
                value={formData.text6}
                onChange={(event) => setFormData({ ...formData, text6: event.target.value })}
                />
            
            <label>Text 7:</label>
            <input
                type='text'
                value={formData.text7}
                onChange={(event) => setFormData({ ...formData, text7: event.target.value })} 
                />
            
            <label>Text 8:</label>
            <input
                type='text'
                value={formData.text8}
                onChange={(event) => setFormData({ ...formData, text8: event.target.value })} 
                />

                <Form>
                    <Form.Select aria-label='Select a date:' value={formData.confDate} onChange={(event) => setFormData({...formData, confDate:  event.target.value})}>
                        <option>Select a date:</option>
                        <option value='fridayOnly'>Friday, May 13 Only</option>
                        <option value='both'>Friday, May 13 and Saturday, May 14</option>
                        <option value='saturdayOnly'>Saturday, May 14 Only</option>
                    </Form.Select>
                </Form>
        </div>
    );
}

