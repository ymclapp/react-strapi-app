import React from 'react';


export default function PersonalInfo({ formData, setFormData }) {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='personal-info-container text-start'>

      <label>Text 3:</label>
      <input
        type='text'
        defaultValue={formData.text3}
        onChange={(event) => setFormData({ ...formData, text3: event.target.value })}
      />

      <label>Text 4:</label>
      <input
        type='text'
        defaultValue={user.firstName}
        onChange={(event) => setFormData({ ...formData, text4: event.target.value })}
      />

      <label>Text 5:</label>
      <input
        type='text'
        value={user.lastName}
        onChange={(event) => setFormData({ ...formData, text5: event.target.value })}
      />
    </div>
  );
}
