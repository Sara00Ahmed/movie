import React from 'react'
import { Link } from 'react-router-dom';
import './trendcard.css'
function TrendCard({slide}) {
  return (
    <div className='trend-card'>
        <img src={slide.previewImg}  className= "img-fluid" alt={slide.title}/>
        <Link to="/Favorites">
        Add to calender <ion-icon name="calender-outline"></ion-icon>
        </Link>

    </div>
  )
}

export default TrendCard;
