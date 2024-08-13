import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import UserInfo from './Components/UserInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/userInfo' element={<UserInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
