import { Link } from 'react-router-dom';
import dropDown from '../../assets/images/icons/dropdown-menu-icon-7.jpg';
import jwt_decode from "jwt-decode";
import './Navigation.scss';

function Navigation () {
    const token = sessionStorage.getItem("token");
    const decodeToken = jwt_decode(token);
    const { profilePicture, id } = decodeToken;

    return (
        <header>
            <nav className="nav">
                <Link to="/" className="nav__link--underline">
                    <h3 className="nav__logo">Du-Communicate</h3>
                </Link>
                <div className="nav__items">
                    <Link to="/" className="nav__link--underline">
                        <h3 className="nav__items--home">HOME</h3>
                    </Link>
                    <Link to="/chatroom" className="nav__link--underline">
                        <h3 className="nav__items--chat">DU-CHAT</h3>
                    </Link>
                    <Link to={`/user-profile/${id}`}>
                        <img 
                            src={profilePicture}
                            className="nav__items--profileimg"
                            alt="user profile"
                        />
                    </Link>
                    <img 
                        src={dropDown}
                        alt=" "
                        className="nav__items--dropdwn"
                    />
                </div>
            </nav>
        </header>
    )
};

export default Navigation;