import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import UserInfo from './UserInfo';

function SignUp() {
  const [firstName, setFirstName] = useState('aryaman');
  const [lastName, setLastName] = useState('sharma');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      alert(`Signed up as ${data.user.email}`);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className='form-sign-up'>
      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <div className='input-part'>
          <span>First Name:</span>
          <input
            type='text'
            value={firstName}
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <span>Last Name:</span>
          <input
            type='text'
            value={lastName}
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <span>Email:</span>
          <input
            type='email'
            value={email}
            placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <span>Password:</span>
          <input
            type='password'
            value={password}
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <span>Phone Number:</span>
          <input
            type='text'
            value={phoneNumber}
            placeholder='Add Phone Number'
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          
        </div>
        <div className='signIn-btn-holder'>
          <button className='signUp-btn' onClick={handleSignUp} type='submit'>Sign Up</button>
          <button className='signIn-btn' >Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
