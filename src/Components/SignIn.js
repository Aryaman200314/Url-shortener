import { useState } from 'react';
import './../App.css';
import { supabase } from '../supabaseClient'; 
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handlenewuser = () => {
    navigate('/signup'); 
  };

  const handleGuesLogIn = () => {
    navigate('/home');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log(`Error: ` + error.message);
      alert(error.message);
    } else {
      console.log(data);
      alert('Logged in successfully');
      setUsername('');
      setPassword('');
      setEmail('');
      navigate('/home'); // Navigate to Home page after successful login
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='input-part'>
          <span>Email: </span> 
          <input 
            type='email' 
            value={email} 
            placeholder='Enter Email' 
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <span>Password: </span>
          <input 
            type='password' 
            value={password} 
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='btn-holder'>
          <button className='submit-btn' type='submit'>Sign In</button>
        </div>
      </form>
      <button className='sign-up-btn' onClick={handlenewuser}>Make New Account</button>
      <br />
      <button className='login-as-guest' onClick={handleGuesLogIn}>Guest Log In</button>
    </div>
  );
}

export default SignIn;
