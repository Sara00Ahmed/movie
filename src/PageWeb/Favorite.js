import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import './favorite.css';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <section className="favorites">
            <div className="container-fluid">
                <h4 className="favorites-title">Your Favorite Movies</h4>
                <div className="movie-grid">
                    {favorites.length > 0 ? (
                        favorites.map(movie => <Card key={movie.id} movie={movie} />)
                    ) : (
                        <p>No favorite movies added yet.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Favorites;
