/**
 * MenuItems
 * @returns MenuItems component
 */

// import React Router
import { useNavigate } from 'react-router-dom';

// import components
import CreateDropdown from '../CreateDropdown';

// import styles
import './style.css';

// import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHouse, 
    faPaperPlane, 
    faPlus, 
    faShapes, 
    faStar, 
    faUser,
} from '@fortawesome/free-solid-svg-icons';

// props
type MenuItemsProps ={ 
    showCreateDrop: boolean;
    toggleCreateDrop: () => void;
}

// MenuItems component
const MenuItems: React.FC<MenuItemsProps> = ({ showCreateDrop, toggleCreateDrop }) => {
    const navigate = useNavigate();

    return (
        <div className="Menu-items">
            {/* tabbing accessibility  */}
            <div 
                className="Menu-item"
                tabIndex={0}
                role="button"
                onClick={toggleCreateDrop}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') 
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
                    if (e.key === 'Enter') 
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
                    if (e.key === 'Enter') 
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
                    if (e.key === 'Enter') 
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
    );
};

    export default MenuItems;