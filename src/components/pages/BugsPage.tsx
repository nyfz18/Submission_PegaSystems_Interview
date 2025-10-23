/**
 * BugsPage component displays a demo page for bugs.
 * @returns BugsPage component
 */

// import React 
import React from 'react';

// import styles
import './style.css';

// BugsPage component
const BugsPage: React.FC = () => {
    return (
        <div className="demo-page">
            <h1>Welcome to the Bugs Page</h1>
            <h4>This is a demo page for displaying bugs.</h4>
        </div>
    );
};

export default BugsPage;