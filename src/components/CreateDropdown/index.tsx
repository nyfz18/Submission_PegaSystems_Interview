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
            <div 
                className="CreateDrop-item"
                tabIndex={0}
                role="button"
            >
                Bug 
            </div>
            <div 
                className="CreateDrop-item"
                tabIndex={0}
                role="button"
            >
                Epic
            </div>
            <div 
                className="CreateDrop-item"
                tabIndex={0}
                role="button"
            >
                User Story
            </div>
        </div>
    );
};

export default CreateDropdown;