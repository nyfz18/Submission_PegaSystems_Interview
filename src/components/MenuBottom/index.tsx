/**
 * Bottom of menu component displaying additional icons.
 * @returns Bottom Menu component 
 */
// import styles
import './style.css';

// import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowRotateLeft, 
    faBell, 
    faClipboardCheck, 
} from '@fortawesome/free-solid-svg-icons';

const MenuBottom: React.FC = () => {
    return (
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

    );
};

export default MenuBottom;