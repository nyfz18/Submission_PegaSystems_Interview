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
            <h2>Welcome to the Epics Page</h2>
            <h4>This is a demo page for displaying epics.</h4>
        </div>
    );
};

export default EpicsPage;