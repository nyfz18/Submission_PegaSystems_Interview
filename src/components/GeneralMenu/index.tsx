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

// import React Router
import { useNavigate } from 'react-router-dom';

// import components
import CreateDropdown from '../CreateDropdown';

// import styles
import './style.css';

// import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft, faBell, faClipboardCheck, faHouse, faMagnifyingGlass, faPaperPlane, faPlus, faShapes, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

// Main Component 
const Menu: React.FC = () => {
// ----------- State ------------// 

    // if "create" dropdown is visible
    const [showCreateDrop, setShowCreateDrop] = useState(false);
    // referencing the dropdown element
    const createDropRef = useRef<HTMLDivElement>(null);
    // tracks if menu item is being hovered (for expanding, collapsing)
    const [isHovered, setIsHovered] = useState(false);

// ----------- Navigation ------------//
    const navigate = useNavigate();

// ----------- Handlers ------------//

    // toggle create dropdown visibility
    const toggleCreateDrop = () => {
        // setShowCreateDrop(prev => !prev);
        setShowCreateDrop(!showCreateDrop);
    };

    useEffect(() => {
        // handle clicks outside of dropdown to close it
        const handleClickOutside = (event: MouseEvent) => {
            if (createDropRef.current && !createDropRef.current.contains(event.target as Node)) {
                setShowCreateDrop(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

// ----------- Render ------------//
// Main UI//
    return (
        <div className="Menu"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false)
                setShowCreateDrop(false);
            }}
        >
            <div className="Menu-top">
                <div className="Menu-logo">
                    <img className="Menu-image" src="/pega.png" alt="Pega Logo" />
                    <span className="Menu-title">Pega Demo</span>
                </div>

                {/* Search Bar */}
                <div className="Menu-search">
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

            <div className="Menu-items">
                <div className="Menu-item" onClick={toggleCreateDrop}>
                    <FontAwesomeIcon className="Menu-icon" icon={faPlus} />
                    <span>Create</span>
                </div>

                {showCreateDrop && isHovered && (
                    <div className="Dropdown">
                        <CreateDropdown />
                    </div>
                )}

                <div className="Menu-item" onClick={() => navigate('/')}>
                    <FontAwesomeIcon className="Menu-icon" icon={faHouse} />
                    <span>Home</span>
                </div>

                <div className="Menu-item" onClick={() => navigate('/')}>
                    <FontAwesomeIcon className="Menu-icon" icon={faStar} />
                    <span>My Dashboard</span>
                </div>

                <div className="Menu-item" onClick={() => navigate('/')}>
                    <FontAwesomeIcon className="Menu-icon" icon={faShapes} />
                    <span>Spaces</span>
                </div>

                <div className="Menu-item" onClick={() => navigate('/')}>
                    <FontAwesomeIcon className="Menu-icon" icon={faPaperPlane} />
                    <span>Documents</span>
                </div>


                <div className="Menu-item" onClick={() => navigate('/bugs')}>
                    <FontAwesomeIcon className="Menu-icon" icon={faUser} />
                    <span>Bugs</span>
                </div>

                <div className="Menu-item" onClick={() => navigate('/epics')}>
                    <FontAwesomeIcon className="Menu-icon" icon={faShapes} />
                    <span>Epics</span>
                </div>

                <div className="Menu-item" onClick={() => navigate('/')}>
                    <FontAwesomeIcon className="Menu-icon" icon={faHouse} />
                    <span>Goals</span>
                </div>
            </div>

                {/* bottom section */}
                <div className="Menu-bottom">
                    <div className="Menu-separator"></div>
                    <div className="Menu-item">
                        <FontAwesomeIcon className="Menu-icon" icon={faBell} />
                        <span>Notifications</span>
                    </div>
                    <div className="Menu-item">
                        <FontAwesomeIcon className="Menu-icon" icon={faArrowRotateLeft} />
                        <span>Recents</span>
                    </div>
                    <div className="Menu-item">
                        <FontAwesomeIcon className="Menu-icon" icon={faClipboardCheck} />
                        <span>My Applications</span>
                    </div>
    
                    {/* User profile */}
                    <div className="Menu-user">
                        <img
                            src="/path/to/user/profile.jpg"
                            alt="User"
                            className="Menu-userImage"
                        />
                        <div className="Menu-userInfo">
                            <span className="Menu-userName">John Doe</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    export default Menu;
