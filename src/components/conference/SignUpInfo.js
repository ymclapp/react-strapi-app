import React from 'react';

export default function SignUpInfo({ formData, setFormData }) {
  return (
    <div className='sign-up-container'>
      <input
        type='text'
        placeholder='Email...'
        value={formData.email}
        onChange={(event) => setFormData({ ...formData, email: event.target.value })} 
        />

      <input
        type='text'
        placeholder='Text1'
        value={formData.text1}
        onChange={(event) => setFormData({ ...formData, text1: event.target.value })} 
        />

      <input
        type='text'
        placeholder='Text2'
        value={formData.text2}
        onChange={(event) => setFormData({ ...formData, text2: event.target.value })} 
        />
    </div>
  );
}

