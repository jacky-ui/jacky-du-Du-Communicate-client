import { Link } from 'react-router-dom';
import dropDown from '../../assets/images/icons/dropdown-menu-icon-7.jpg';
import jwt_decode from "jwt-decode";
import './Navigation.scss';
import { Component } from 'react';
import DropDownNav from '../DropDownNav/DropDownNav';

class Navigation extends Component {
    state = {
        profile: null,
        id: null,
        showMenu: false
    }

    componentDidMount = () => {
        const token = sessionStorage.getItem("token");
        const decodeToken = jwt_decode(token);
        const { profilePicture, id } = decodeToken;
        this.setState ({ profile: profilePicture });
        this.setState ({ id: id });
    }

    onClickMenu = () => {
        this.setState ({ showMenu: !this.state.showMenu });
    }

    render() {
        if(!this.state.profile || !this.state.id) {
            return (
                <div>
                    <p>loading</p>
                </div>
            )
        }

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
                        <Link to={`/user-profile/${this.state.id}`}>
                            <img 
                                src={this.state.profile}
                                className="nav__items--profileimg"
                                alt="user profile"
                            />
                        </Link>
                        <img 
                            src={dropDown}
                            alt=" "
                            className="nav__items--dropdwn"
                            onClick={this.onClickMenu}
                        />
                        <div className={`${this.state.showMenu ? "nav__dropdown--hide" : "nav__dropdown--show" }`}>
                            <DropDownNav handleLogout={this.props.handleLogout}/>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
};

export default Navigation;