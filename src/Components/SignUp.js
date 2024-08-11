import React from 'react'
import { useState } from 'react';
import { supabase } from '../supabaseClient';
function SignUp() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


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
    <div>SignUp</div>
  )
}

export default SignUp