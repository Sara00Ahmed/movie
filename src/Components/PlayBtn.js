import React from 'react';
import { Link } from 'react-router-dom';
import './playbtn.css';

function PlayBtn() {
  return (
    <div className="trailer d-flex align-items-center justify-content-center active">
      <Link to="/" className='playBtn'>
        <ion-icon name="play-outline"></ion-icon>
      </Link>
      <p>Watch Trailer</p>
    </div>
  );
}

export default PlayBtn; // Consistent with the function name