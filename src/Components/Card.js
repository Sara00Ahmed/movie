import React, { useState, useEffect } from 'react';
import { Link , useHistory} from 'react-router-dom'; // Import Link for navigation
import './card.css';



function Card({ movie }) {
  // const imageSrc = movie.previewImg || 'default_image_path.jpg';  // Use a default image if missing
    const [isFavorite, setIsFavorite] = useState(false);
    const history = useHistory(); // Hook for navigation


    useEffect(() => {
        // Check if movie is in favorites
        // Load favorites from localStorage on mount
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some(fav => fav.id === movie.id));
    }, [movie.id]);

    // Toggle favorite status
    const toggleFavorite = () => {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      if (isFavorite) {
          // Remove from favorites
          favorites = favorites.filter(fav => fav.id !== movie.id);
      } else {
          // Add to favorites
          favorites.push(movie);
      }

        // Update localStorage and state
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(!isFavorite);
    };


return (
<div className="col-lg-2 col-md-4 col-sm-6">
  <div className="movie-card">
        {/* Movie Poster */}
  <img
    src={movie.previewImg}
    className="img-fluid"
    alt={movie.title}
  />

  {/* <p>
    {movie.length} | {movie.category}
  </p> */}

        {/* Hover Content */}
    <div className="content">
    <h4>{movie.title}</h4>
    <div className="card-icons">

            {/* Changed to heart icons with outline/filled states */}
    <ion-icon
              name={isFavorite ? "heart" : "heart-outline"}
              onClick={toggleFavorite}
                style={{ color: isFavorite ? 'red' : 'white' }}>
    </ion-icon>

    <ion-icon name="play-outline"></ion-icon>
    </div>

          {/* View Details Button */}
          <Link
              to={`/MovieShow/${movie._id}`}
              className="btn btn-primary">
              View Details
          </Link>
  </div>
  </div>
</div>
);
}
export default Card;













