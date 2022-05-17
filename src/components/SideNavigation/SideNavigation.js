import "./SideNavigation.scss";
import settingsIcon from "../../assets/images/icons/settings.png";
import supportIcon from "../../assets/images/icons/support.png";
import logoutIcon from "../../assets/images/icons/logout.png";

function SideNavigation() {
    return (
        <section className="side">
            <ul className="side__lists">
                <li className="side__lists--item">
                    <img src={settingsIcon} className="icons--sizing"/>Settings
                </li>
                <li className="side__lists--item">
                    <img src={supportIcon} className="icons--sizing"/>Support
                </li>
                <li className="side__lists--item">
                    <img src={logoutIcon} className="icons--sizing"/>Logout
                </li>
            </ul>
        </section>
    )
}

export default SideNavigation;