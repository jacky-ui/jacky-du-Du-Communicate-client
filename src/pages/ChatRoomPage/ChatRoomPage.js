import { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import "./ChatRoomPage.scss";

class ChatRoomPage extends Component {
    render() {
        return (
            <>
                <Navigation />
                <h1>Hello World</h1>
                <SideNavigation />
            </>
        )
    }
}

export default ChatRoomPage;