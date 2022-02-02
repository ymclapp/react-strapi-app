import React from 'react';

export default function PersonalInfo({ formData, setFormData }) {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='personal-info-container'>

      <label>First Name:</label>
      <input
        type='text'
        placeholder='First Name...'
        value={user.firstName}
        onChange={(event) => setFormData({ ...formData, firstName: event.target.value })}
      />
      <label>Last Name:</label>
      <input
        type='text'
        placeholder='Last Name...'
        value={user.lastName}
        onChange={(event) => setFormData({ ...formData, lastName: event.target.value })}
      />
      <label>Username:</label>
      <input
        type='text'
        placeholder='Username...'
        value={user.confirmed}
        onChange={(event) => setFormData({ ...formData, username: event.target.value })}
      />
    </div>
  );
}
