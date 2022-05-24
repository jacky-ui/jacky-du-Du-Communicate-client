import "./SideNavigation.scss";
import settingsIcon from "../../assets/images/icons/settings.png";
import supportIcon from "../../assets/images/icons/support.png";
import logoutIcon from "../../assets/images/icons/logout.png";

function SideNavigation(props) {
    return (
            <section className="side">
                <ul className="side__lists">
                    <li className="side__lists--item">
                        <img 
                            src={settingsIcon} 
                            className="icons--sizing"
                            alt="account settings"
                        />Settings
                    </li>
                    <li className="side__lists--item">
                        <img 
                            src={supportIcon} 
                            className="icons--sizing"
                            alt="account support"
                        />Support
                    </li>
                    <li className="side__lists--item" onClick={props.handleLogout}>
                        <img 
                            src={logoutIcon} 
                            className="icons--sizing"
                            alt="logout"
                        />Logout
                    </li>
                </ul>
            </section>
    )
}

export default SideNavigation;