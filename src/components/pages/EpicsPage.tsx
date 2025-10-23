/**
 * EpicsPage component displays a demo page for epics.
 * @returns EpicsPage component
 */

// import React 
import React from 'react';

// import styles
import './style.css';

// EpicsPage component
const EpicsPage: React.FC = () => {
    return (
        <div className="demo-page">
            <h1>Welcome to the Epics Page</h1>
            <p>This is a demo page for displaying epics.</p>
        </div>
    );
};

export default EpicsPage;