import DropDownItem from "../DropDownItem/DropDownItem";
import settingsIcon from "../../assets/images/icons/settings.png";
import supportIcon from "../../assets/images/icons/support.png";
import logoutIcon from "../../assets/images/icons/logout.png";
import homeIcon from "../../assets/images/icons/home.png";
import chatIcon from "../../assets/images/icons/chat.png";
import "./DropDownNav.scss";

function DropDownNav (props) {
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
                    <li className="dropdown__lists--item">
                        <DropDownItem icon={settingsIcon} path={"/"} item={"Setting"} alt={"Settings"}/>
                    </li>
                    <li className="dropdown__lists--item">
                        <DropDownItem icon={supportIcon} path={"/"} item={"Support"} alt={"Support"}/>
                    </li>
                    <li className="dropdown__lists--item" onClick={props.handleLogout}>
                        <div className="dropdown__logout">
                            <img 
                                src={logoutIcon}
                                className="dropdown__logout--icon"
                                alt="logout"
                            />
                            <span>Logout</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default DropDownNav;