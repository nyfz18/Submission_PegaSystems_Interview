/**
 * The create dropdown component allows users to select options from a dropdown menu.
 * @returns CreateDropdown component
 */

// import React
import React from 'react';

// import styles 
import './style.css';

// CreateDropdown component
const CreateDropdown: React.FC = () => {
    return (
        <div className="CreateDropdown">
            <div className="CreateMenu-item">Bug</div>
            <div className="CreateMenu-item">Epic</div>
            <div className="CreateMenu-item">User Story</div>
        </div>
    );
};

export default CreateDropdown;