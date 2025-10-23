/**
 * Top of menu component displaying additional icons.
 * @returns Top Menu component 
 */
// import styles
import './style.css';

// import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMagnifyingGlass, 
} from '@fortawesome/free-solid-svg-icons';

// top menu component
const MenuTop: React.FC = () => {
    return (
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
    );
};

export default MenuTop;