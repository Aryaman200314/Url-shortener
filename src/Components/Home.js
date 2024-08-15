import React, { useEffect, useState } from 'react';
import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import NewsExtra from './NewsExtra';

function Home() {
  const [url, setUrl] = useState('');
  const [copy, setCopy] = useState(false);
  const [shortUrl, setShortUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopy(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copy]);

  function handleClick() {
    console.log('clicked');
    console.log(`this is the URL: ${url}`);
    setUrl('');
    setShortUrl('https://shortened.url/example'); // Example shortened URL
  }

  function handleIconClick() {
    console.log('clicked');
    navigate('/userInfo');
  }

  function handleCopy() {
    console.log('copy clicked');
  }

  function backPage() {
    navigate('/signin');
  }

  return (
    <>
      <nav className='nav-bar-usr-page'>
        <h1 className='heading-nav-bar'>URL Shortener</h1>
        <FontAwesomeIcon
          className='navbar-icon'
          onClick={handleIconClick}
          icon={faUserCircle}
          aria-hidden='true'
        />
      </nav>

      <div className='main-shoterner-container'>
        <input
        className='url-input'
          id='url'
          type='url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder='Enter URL'
        />
        <br />
        <div className='display-shorted-url-block'>
          {shortUrl ? (
            <div>
              <p>Your shortened URL:</p>
              <a href={shortUrl} target='_blank' rel='noopener noreferrer'>
                {shortUrl}
              </a>
            </div>
          ) : (
            <p>Please enter a URL..</p>
          )}
        </div>
      </div>

      <div className='shortener-btn-container'>
        <button className='shortener-btn' onClick={handleClick}>
          Shorten
        </button>
        <CopyToClipboard text={shortUrl} onCopy={() => setCopy(true)}>
          <button className='copy-btn' onClick={handleCopy}>
            Copy!
          </button>
        </CopyToClipboard>
      </div>

          <div className='news-container'>
          <NewsExtra/>
          </div>
    
      <div className='back-to-login'>
        <button className='back-to-login-btn' onClick={backPage}>
          Back to login page
        </button>
      </div>
    </>
  );
}

export default Home;
