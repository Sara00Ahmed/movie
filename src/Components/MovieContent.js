import React, { useState } from 'react';
import './moviecontent.css'; // Import MovieContent-specific styles
import titleImg from '../movies/transformer-title.png';
// import { Button } from 'bootstrap';
import Button from '../Components/Button';
// If assets is inside "src/", use import
// import titleImg from '../assets/movies/transformer.jpg';

function MovieContent() {

//  If assets is inside "public/", use dynamic path
    // const titleImg = `${process.env.PUBLIC_URL}/data/movies/bg-transformer.jpg`;
    const [movie, setMovie] = useState({}); // Initialize state for a single movie as an object

    return (
        <div className="content active"> {/* Ensure active class is applied */}
            <img src={titleImg} alt="Movie Title" className="movie-title" />
            <h4>
                <span>{movie.Year || "Year"}</span>
                <span><i>{movie.Age || "age"}</i></span>
                <span>{movie.Length || "Length"}</span>
                <span>{movie.Category || "Category"}</span>
            </h4>
            <p>
                {movie.Description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus."}
            </p>
            <div>
            <Button
              icon={<ion-icon name="bookmark-outline"></ion-icon>}
              name="book"
              color=" #ff3700"
              bgColor=" #ffffff"
            />
            <Button
              icon={<ion-icon name="add-outline"></ion-icon>}
              name="My List"
            />
               </div>
            {/* Uncomment and use button if needed */}
            {/* <Button text="Learn More" onClick={() => alert('Button clicked!')} /> */}
        </div>
    );
}

export default MovieContent;
