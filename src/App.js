import { useState } from 'react';
import './App.css';
import { supabase } from './supabaseClient'; 
import Home from './Components/Home';
import SignUp from './Components/SignUp';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [newPage, setNewPage] = useState(false);

  const handlenewuser = ()=> {
    <SignUp/>
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,  // Use the email state here
      password: password,
    });

    if (error) {
      console.log(`this is the errir mess :`+error.message);
      alert(error.message)
    } else {
      console.log(data);
      alert('logged in successfully');
      setUsername('');
      setPassword('');
      setEmail('');
    }
   setNewPage(true);
  };

  return (
    <>
    {!newPage ? (
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
        <div class='btn-holder'>
        <button className='submit-btn' type='submit'>Sign In</button>
        </div>
       
      </form>
      <button className='sign-up-btn' onClick={handlenewuser}>Make New Account-</button>
    </div>
    ) : (
      <Home/>
    )}
    
    </>
    
  );
}

export default App;
