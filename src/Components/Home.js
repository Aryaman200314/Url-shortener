import React, { useState } from 'react'
import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function Home() {
  const [url, setUrl] = useState();
  const navigate = useNavigate();
  function handleClick(){
    setUrl(document.getElementById('url').value);
    console.log(`this is the url ${url}`)
  }
  function handleIconClick(){
    console.log('clicked');
    navigate('/userInfo');
  }
  return (
    <>
    <nav className='nav-bar-usr-page'>
    <h1 className='heading-nav-bar' >URL Shortener </h1>
    <FontAwesomeIcon className='navbar-icon' onClick={handleIconClick} icon={faUserCircle} aria-hidden="true" />
    </nav>
     
      <div className='main-shoterner-container'>
        <input id ='url' type='url' value={url} placeholder='Enter URL'></input>
        <button onClick={handleClick}>Shortener</button>
      </div>
    </>
  
  )
}

export default Home