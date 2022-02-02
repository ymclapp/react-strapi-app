import React from 'react';
import { Form } from 'react-bootstrap';

export default function PersonalInfo({ formData, setFormData }) {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='personal-info-container'>

      <label>First Name:</label>
      <input
        type='text'
        placeholder='First Name...'
        defaultValue={formData.firstName}
        onChange={(event) => setFormData({ ...formData, firstName: event.target.value })}
      />

      <label>Last Name:</label>
      <input
        type='text'
        placeholder='Last Name...'
        defaultValue={user.lastName}
        onChange={(event) => setFormData({ ...formData, lastName: event.target.value })}
      />

      <label>Username:</label>
      <input
        type='text'
        placeholder='Username...'
        value={user.confirmed}
        onChange={(event) => setFormData({ ...formData, username: event.target.value })}
      />

      <Form>
        <Form.Select aria-label='Select a date:' onChange={(event) => setFormData({ ...formData, yes: event.target.value })}>
          <option>Is the above you?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </Form.Select>
      </Form>
    </div>
  );
}
