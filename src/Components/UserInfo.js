import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function UserInfo() {
    const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};
  console.log(data.fName)


  function handleGoBack() {
    navigate('/home'); 
  }
  return (
    <>
      <div>
      <p>First Name: {data.fName || 'N/A'}</p>
      <p>Last Name: {data.lName || 'N/A'}</p>
      <p>Email: {data.email || 'N/A'}</p>
      <p>Phone Number: {data.phone || 'N/A'}</p>
    </div>
    <div>
        <button id='go-back-btn' onClick={handleGoBack}>Go Back</button>
    </div>
    </>
  
  );
}

export default UserInfo;
