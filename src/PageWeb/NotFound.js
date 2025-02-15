import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css'; // استيراد ملف التصميم

function NotFound() {
    return (
        <div className="not-found">
            <img
                src="/images/pngtree-404-error-page-not-found-image_1345267.jpg"
                alt="404 Not Found"
                className="not-found-image"
            />
            <h2>Oops! Page Not Found</h2>
            <p>The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" className="home-button">Go Back Home</Link>
        </div>
    );
}

export default NotFound;
