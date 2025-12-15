import React, { useState } from 'react';

const Password = () => {
  const [type, setType] = useState('password');

  const showPassword = () => setType('text');
  const hidePassword = () => setType('password');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input
        type={type}
        placeholder="Enter your password"
        style={{
          padding: '8px',
          fontSize: '16px',
          marginRight: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <button onClick={showPassword}>Show Password</button>
      <button onClick={hidePassword} style={{ marginLeft: '10px' }}>
        Hide Password
      </button>
    </div>
  );
};

export default Password;
