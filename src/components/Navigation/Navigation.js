import { Link } from 'react-router-dom';
import dropDown from '../../assets/images/icons/dropdown-menu-icon-7.jpg';
import './Navigation.scss';

function Navigation (props) {
    return (
        <nav className="nav">
            <Link to="/" className="nav__link--underline">
                <h3 className="nav__logo">Du-Communicate</h3>
            </Link>
            <div className="nav__items">
                <Link to="/" className="nav__link--underline">
                    <h3 className="nav__items--home">HOME</h3>
                </Link>
                <Link to="/chatroom" className="nav__link--underline">
                    <h3 className="nav__items--chat">CHATROOM</h3>
                </Link>
                <img 
                    src={props.profile}
                    className="nav__items--profileimg"
                    alt="user profile"
                />
                <img 
                    src={dropDown}
                    alt=" "
                    className="nav__items--dropdwn"
                />
            </div>
        </nav>
    )
};

export default Navigation;