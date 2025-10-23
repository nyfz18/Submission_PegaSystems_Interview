/**
 * HomePage component displays a demo page for the home screen.
 * @returns HomePage component
 */

// import React 
import React from 'react';

// import styles
import './style.css';

// HomePage component
const HomePage: React.FC = () => {
    return (
        <div className="demo-page">
            <h1>Welcome to the Home Page</h1>
        </div>
    );
};

export default HomePage;