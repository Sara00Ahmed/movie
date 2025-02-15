import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../network/axiosInstance';
import './movieshow.css';

const MovieShow = () => {
  const { _id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieShow = async () => {
      setLoading(true);  // Set loading state to true
      setError(null);   // Clear any previous errors

      try {
        // Fetch movie data from the JSON file
        const response = await axiosInstance.get("/data/moviedata.json");
        console.log("Fetched data:", response.data); // Debugging: Log fetched data

        // // Log all movie IDs in the JSON data
        // response.data.forEach(movie => console.log("Movie ID in JSON:", movie._id));

        // Find the movie with the matching _id
        const foundMovie = response.data.find(movie => movie._id === parseInt(_id , 10));
        console.log("Found movie:", foundMovie); // Debugging: Log found movie

        if (foundMovie) {
          setMovie(foundMovie);
        } else {
          setError("Movie not found.");
        }
      } catch (error) {
        setError("Error fetching movie details.");
        // console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);

      }
    };

    fetchMovieShow(); // Call the fetch function
  }, [_id]); // Re-run effect when movieId changes

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!movie) return <div>No movie found.</div>;

  return (
    <section
    className="movie-details"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${movie.previewImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      color: "white",
      padding: "40px ",
      textAlign: "center",
    }}>
      <div className="movie-header">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
      </div>
      <div className="movie-info">
        {/* <img src={movie.previewImg} alt={movie.title} /> */}
        <div className="movie-meta">
          <h3>Genre: {movie.category}</h3>
          <h4>Release Date: {movie.date}</h4>
          <h4>Age Limit: {movie.ageLimit}</h4>
          <h4>Duration: {movie.length}</h4>
          <p>{movie.description}</p>
        </div>
      </div>
      <div className="movie-video">
        <iframe
          width="100%"
          height="400"
          src={movie.video}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default MovieShow;