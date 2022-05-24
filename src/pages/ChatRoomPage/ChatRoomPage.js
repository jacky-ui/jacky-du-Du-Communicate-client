import { Component } from "react";
import jwt_decode from "jwt-decode";
import Messages from "../../components/Chats/Messages";
import FailedLogin from "../../components/FailedLogin/FailedLogin";
import Members from "../../components/Members/Members";
import Navigation from "../../components/Navigation/Navigation";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import io, { Socket } from "socket.io-client";
let socket = io.connect("http://localhost:8080");
import "./ChatRoomPage.scss";

class ChatRoomPage extends Component {
    state = {
        failedLogin: false,
        user: null,
        username: null,
        userId: null,
        activeMembers: []
    }

    componentDidMount() {
        document.title = "Du-Communicate - Du-Chat";
        const token = sessionStorage.getItem("token");

        if (!token) {
            this.setState({ failedLogin: true });
            return;
        }

        const decodedUser = jwt_decode(token);
        const username = decodedUser.user;
        const usersId = decodedUser.userId;
        const profilePicture = decodedUser.profilePicture;

        this.setState (
            { 
                username: username,
                userId: usersId 
            });

        socket.emit("join", { username: username, profilePic: profilePicture });
        socket.on("receive_member", (data) => {
            const members = data;
            this.setState ({ activeMembers: [...this.state.activeMembers, members] })
        })
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
                            <Members activeMembers={this.state.activeMembers}/>
                        </div>
                        <div className="chatroom__room">
                            <Messages username={this.state.username} userId={this.state.userId}/>
                        </div>
                    </section>
                    <SideNavigation handleLogout={this.handleLogout}/>
                </div>
            </>
        )
    }
}

export default ChatRoomPage;