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
        // user accessibility, expand when tabbing
        <div className={`Menu ${isHovered ? 'expanded' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false)
                setShowCreateDrop(false);
            }}
            onFocus={() => setIsHovered(true)}
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

            <div className="Menu-items">
                {/* tabbing accessibility  */}
                <div 
                    className="Menu-item"
                    tabIndex={0}
                    role="button"
                    onClick={toggleCreateDrop}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') 
                        toggleCreateDrop();
                    }}
                >
                    <div className="Menu-icon-wrapper">
                        <FontAwesomeIcon className="Menu-icon" icon={faPlus} />
                    </div>
                    <span>Create</span>
                </div>

                {showCreateDrop && (
                    <div 
                        className="Dropdown"
                        tabIndex={0}
                        role="button"
                    >
                        <CreateDropdown />
                    </div>
                )}

                <div 
                    className="Menu-item"
                    tabIndex={0}
                    role="button"
                    onClick={() => navigate('/')}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') 
                        navigate('/');
                    }}
                >
                    <div className="Menu-icon-wrapper">
                        <FontAwesomeIcon className="Menu-icon" icon={faHouse} />
                    </div>
                    <span>Home</span>
                </div>

                <div 
                    className="Menu-item"
                    tabIndex={0}
                    role="button"
                >
                    <div className="Menu-icon-wrapper">
                        <FontAwesomeIcon className="Menu-icon" icon={faStar} />
                    </div>
                    <span>My Dashboard</span>
                </div>

                <div 
                    className="Menu-item"
                    tabIndex={0}
                    role="button"
                >
                    <div className="Menu-icon-wrapper">
                        <FontAwesomeIcon className="Menu-icon" icon={faShapes} />
                    </div>
                    <span>Spaces</span>
                </div>

                <div 
                    className="Menu-item"
                    tabIndex={0}
                    role="button"
                >
                    <div className="Menu-icon-wrapper">
                        <FontAwesomeIcon className="Menu-icon" icon={faPaperPlane} />
                    </div>
                    <span>Documents</span>
                </div>


                <div 
                    className="Menu-item"
                    tabIndex={0}
                    role="button"
                    onClick={() => navigate('/bugs')}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') 
                        navigate('/bugs');
                    }}
                >
                    <div className="Menu-icon-wrapper">
                        <FontAwesomeIcon className="Menu-icon" icon={faUser} />
                    </div>
                    <span>Bugs</span>
                </div>

                <div 
                    className="Menu-item"
                    tabIndex={0}
                    role="button"
                    onClick={() => navigate('/epics')}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') 
                        navigate('/epics');
                    }}
                >
                    <div className="Menu-icon-wrapper">
                        <FontAwesomeIcon className="Menu-icon" icon={faShapes} />
                    </div>
                    <span>Epics</span>
                </div>

                <div 
                    className="Menu-item"
                    tabIndex={0}
                    role="button"
                >
                    <div className="Menu-icon-wrapper">
                        <FontAwesomeIcon className="Menu-icon" icon={faHouse} />
                    </div>
                    <span>Goals</span>
                </div>
            </div>

                {/* bottom section */}
                <div className="Menu-bottom">
                    <div className="Menu-separator" />
                    <div 
                        className="Menu-item"
                        tabIndex={0}
                        role="button"
                    >
                        <div className="Menu-icon-wrapper">
                            <FontAwesomeIcon className="Menu-icon" icon={faBell} />
                        </div>
                        <span>Notifications</span>
                    </div>

                    <div 
                        className="Menu-item"
                        tabIndex={0}
                        role="button"
                    >                        
                        <div className="Menu-icon-wrapper">
                            <FontAwesomeIcon className="Menu-icon" icon={faArrowRotateLeft} />
                        </div>
                        <span>Recents</span>
                    </div>
                    
                    <div 
                        className="Menu-item"
                        tabIndex={0}
                        role="button"
                    >  
                        <div className="Menu-icon-wrapper">
                            <FontAwesomeIcon className="Menu-icon" icon={faClipboardCheck} />
                        </div>
                        <span>My Applications</span>
                    </div>
    
                    {/* User profile */}
                    <div className="Menu-user">
                        <img
                            src="../../public/morpeko.jpeg"
                            alt="User"
                            className="Menu-userImage"
                        />
                        <div className="Menu-userInfo">
                            <span className="Menu-userName">Nina Zhang</span>
                        </div>
                    </div>
            </div>
        </div>
        );
    };
    
    export default Menu;
