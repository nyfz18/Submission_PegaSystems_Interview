/**
 * Main UI menu component of the demo project. Allows users to 
 * navigate to different pages with an interactive menu.
 * @returns GeneralMenu component
 */

// import React 
import {
    useState,
    useRef,
    useEffect
} from 'react';

// import styles
import './style.css';

// import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMagnifyingGlass, 
} from '@fortawesome/free-solid-svg-icons';

// import components
import MenuItems from '../MenuItems';
import MenuBottom from '../MenuBottom';

// Main Component 
const Menu: React.FC = () => {
// ----------- State ------------// 

    // if "create" dropdown is visible
    const [showCreateDrop, setShowCreateDrop] = useState(false);
    // tracks if menu item is being hovered (for expanding, collapsing)
    const [isHovered, setIsHovered] = useState(false);

// ----------- Handlers ------------//

    // toggle create dropdown visibility
    const toggleCreateDrop = () => {
        // setShowCreateDrop(prev => !prev);
        setShowCreateDrop(!showCreateDrop);
    };

// ----------- Render ------------//
// Main UI//
    return (
        // user accessibility, expand when tabbing
        <div className={`Menu ${isHovered ? 'expanded' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false)
                setShowCreateDrop(false);
            }}
            // when the menu is focused (tabbed to), keep it expanded
            onFocus={() => setIsHovered(true)}
            // else collapse when focus is lost
            onBlur={(e) => {
                const next = (e.relatedTarget || (document.activeElement as Element))
                if (!e.currentTarget.contains(next as Node)) {
                    setIsHovered(false);
                    setShowCreateDrop(false);
                }
            }}
        >
            <div className="Menu-top">
                <div className="Menu-logo">
                    <img className="Menu-image" src="/pega.png" alt="Pega Logo" />
                    <span className="Menu-title">Demo</span>
                </div>

                {/* Search Bar */}
                <div 
                    className="Menu-search"
                    tabIndex={0}
                    role="button"
                >  
                    <div className="Menu-search-wrapper">
                        <FontAwesomeIcon className="Menu-search-icon" icon={faMagnifyingGlass} />
                        <input 
                            type="text"
                            placeholder="Search..." 
                        />
                    </div>
                </div>
            </div>

            {/* Separator for aesthetics */}
            <div className="Menu-separator" />

            {/* Main menu items */}
                <MenuItems 
                    showCreateDrop={showCreateDrop} 
                    toggleCreateDrop={toggleCreateDrop} 
                />
                <MenuBottom />
        </div>
        );
    };
    
    export default Menu;
