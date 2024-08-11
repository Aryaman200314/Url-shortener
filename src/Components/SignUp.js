import React from 'react'
import { useState } from 'react';
import { supabase } from '../supabaseClient';
function SignUp() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();

    const handlenewuser = async (e) => {
        e.preventDefault();
        const {data, error} = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if(error){
          alert(`this is error mess: `+ error.message)
        }
        else{
          alert(`signed up as ${data.user.email}`)
        }
      }
  return (
    <>
    
    <div className='form'>
    <form >
      <h1>SignUp</h1>
      <div className='input-part'>
        <span>Email: </span> 
        <input 
          type='email' 
          value={email} 
          placeholder='Enter Email' 
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <span>Phone Number:</span>
        <input
        type='text'
        value={phoneNumber}
        placeholder='Add Phone Number'
        onChange={(e)=> setPhoneNumber(e.target.value)}></input>

        <br/>
        <span>Password: </span>
        <input 
          type='password' 
          value={password} 
          placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
       </form>
    </div>

    <div className='signIn-btn-holder'>
    <button className='signIn-btn' onClick={handlenewuser}>Sign Up</button>
    <button className='signIn-btn'>Sign In</button>
    </div>
    </>
   
    
    
  )
}

export default SignUp;

