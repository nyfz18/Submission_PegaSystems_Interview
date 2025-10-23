/**
 * Main UI menu component of the demo project. Allows users to 
 * navigate to different pages with an interactive menu.
 * @returns GeneralMenu component
 */

// import React 
import {
    useState,
} from 'react';

// import styles
import './style.css';

// import components
import MenuBottom from '../MenuBottom';
import MenuItems from '../MenuItems';
import MenuTop from '../MenuTop';

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
        // user accessibility, expand when tabbing. functional
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
            {/* Main menu  */}
            <MenuTop />
            
            {/* Separator for aesthetics */}
            <div className="Menu-separator" />
            
            <MenuItems 
                showCreateDrop={showCreateDrop} 
                toggleCreateDrop={toggleCreateDrop} 
            />
            <MenuBottom />
        </div>
        );
    };
    
    export default Menu;
