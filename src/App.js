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
  const [isSignUp, setIsSignUp] = useState(false); // New state for SignUp

  const handlenewuser = () => {
    setIsSignUp(true); // Set the state to show the SignUp component
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
      setNewPage(true); // Set the state to show the Home component
    }
  };

  return (
    <>
      {!newPage ? (
        !isSignUp ? ( // Check if SignUp should be displayed
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
            <button className='sign-up-btn' onClick={handlenewuser}>Make New Account-</button>
          </div>
        ) : (
          <SignUp /> 
        )
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
