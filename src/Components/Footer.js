import '../App.css'; // Import global styles (if needed)
import React from 'react';
import './footer.css'; // Import Footer-specific styles
// import { useTranslation } from 'react-i18next';

function Footer() {
    return (
        <footer className="footer">
            <div className="container text-center">
            <p>Follow me on social media:</p>
            <div className="social-icons">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
                <ion-icon name="logo-youtube"></ion-icon>

                </div>
                <p>PM &copy; 2016. All Rights Reserved</p>

            </div>
        </footer>
    );
}

export default Footer;

