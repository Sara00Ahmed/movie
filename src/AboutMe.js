import React from 'react';
import './aboutme.css'; // Import the CSS file
import Button from './Components/Button'; // Import the Button component

function AboutMe() {
    // Function to handle the download action
    const handleDownload = () => {
        fetch('/Sara Hamdy CV Upadet.pdf.docx')
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Sara Hamdy CV Upadet.pdf.docx'; // Desired file name
            link.click();
            window.URL.revokeObjectURL(url); // Clean up
        })
        .catch((error) => console.error('Error downloading file:', error));
};
   

    return (
        <section className="container2">
            <div className="about-container">
                <h2>About Me</h2>
                <p>
                    I am Sara Hamdy Ahmed, a front-end developer. To enhance my experience and increase my opportunities to achieve a good position and a good work reputation in the firm or the project I work in.
                    I am Sara Hamdy Ahmed, a front-end developer. To enhance my experience and increase my opportunities to achieve a good position and a good work reputation in the firm or the project I work in.
                    I am Sara Hamdy Ahmed, a front-end developer. To enhance my experience and increase my opportunities to achieve a good position and a good work reputation in the firm or the project I work in.
                    I am Sara Hamdy Ahmed, a front-end developer. To enhance my experience and increase my opportunities to achieve a good position and a good work reputation in the firm or the project I work in.

                </p>
            </div>
            <Button text="Download" onClick={handleDownload} /> {/* Render the Button component */}
        </section>
    );
}

export default AboutMe;