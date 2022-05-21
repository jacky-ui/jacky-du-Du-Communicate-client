import { Component } from "react";
import Messages from "../../components/Chats/Messages";
import FailedLogin from "../../components/FailedLogin/FailedLogin";
import Members from "../../components/Members/Members";
import Navigation from "../../components/Navigation/Navigation";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import "./ChatRoomPage.scss";

class ChatRoomPage extends Component {
    state = {
        failedLogin: false,
        user: null,
    }

    componentDidMount() {
        const token = sessionStorage.getItem("token");

        if (!token) {
            this.setState({ failedLogin: true });
            return;
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem("token");
        this.setState({
            user: null,
            failedLogin: true
        })
    }

    render() {
        if (this.state.failedLogin) {
            return (
                <FailedLogin />
            )
        };
        return (
            <>
                <Navigation />
                <div className="chatroom__contain">
                    <section className="chatroom">
                        <div className="chatroom__members">
                            <h3 className="chatroom__header">Chat members in this room</h3>
                            <Members />
                        </div>
                        <div className="chatroom__room">
                            <Messages />
                        </div>
                    </section>
                    <SideNavigation handleLogout={this.handleLogout}/>
                </div>
            </>
        )
    }
}

export default ChatRoomPage;