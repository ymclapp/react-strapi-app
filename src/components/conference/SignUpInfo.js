import React from 'react';

export default function SignUpInfo({ formData, setFormData }) {
  return (
    <div className='sign-up-container'>
      <label>Text 0:</label>
      <input
        type='text'
        value={formData.text0}
        onChange={(event) => setFormData({ ...formData, text0: event.target.value })}
      />

      <label>Text 1:</label>
      <input
        type='text'
        value={formData.text1}
        onChange={(event) => setFormData({ ...formData, text1: event.target.value })}
      />

      <label>Text 2:</label>
      <input
        type='text'
        value={formData.text2}
        onChange={(event) => setFormData({ ...formData, text2: event.target.value })}
      />
    </div>
  );
}

