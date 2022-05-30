import DropDownItem from "../DropDownItem/DropDownItem";
import settingsIcon from "../../assets/images/icons/settings.png";
import supportIcon from "../../assets/images/icons/support.png";
import logoutIcon from "../../assets/images/icons/logout.png";
import homeIcon from "../../assets/images/icons/home.png";
import chatIcon from "../../assets/images/icons/chat.png";
import "./DropDownNav.scss";

function DropDownNav () {
    return (
        <>
            <div className="dropdown">
                <ul className="dropdown__lists">
                    <li className="dropdown__lists--item">
                        <DropDownItem icon={homeIcon} path={"/"} item={"HOME"} alt={"Home"}/>
                    </li>
                    <li className="dropdown__lists--item">
                        <DropDownItem icon={chatIcon} path={"/chatroom"} item={"DU-CHAT"} alt={"Du-Chat"}/>
                    </li>
                    <li className="dropdown__lists--item">Settings</li>
                    <li className="dropdown__lists--item">Support</li>
                    <li className="dropdown__lists--item">Logout</li>
                </ul>
            </div>
        </>
    )
}

export default DropDownNav;