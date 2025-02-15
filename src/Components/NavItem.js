import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navitem.css';
import useTranslation from '../translate/useTranslation';
import NavItemData from '../Components/NavItemData';

function NavItem({ name, link }) {
    const { t } = useTranslation();
    const [favoriteCount, setFavoriteCount] = useState(0);


    // Fetch favorite count from localStorage
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteCount(favorites.length);

        // listen for updates in localStorage Update favorite count when favorites change
        const handleStorageChange = () => {
            const updatedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
            setFavoriteCount(updatedFavorites.length);
        };

        window.addEventListener("storage", handleStorageChange);

        return () => window.removeEventListener("storage", handleStorageChange);
    }, []); // Add dependencies if needed

    // Placeholder functions for theme and language change

    return (
        <>
            <li className="nav-item">


                <Link className="nav-link" to={link}>
                {t(name)}
                </Link>

                {/* Favorite Button */}
                {name === "Favorites" && (
                    <Link to="/favorites" className="favorite-icon">
                        <ion-icon name="heart"></ion-icon>
                        {favoriteCount > 0 && <span className="favorite-count">{favoriteCount}</span>}
                    </Link>
                )}

            </li>
        </>
    );
}

export default NavItem;