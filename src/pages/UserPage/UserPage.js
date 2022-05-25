import { Component } from "react";
import FailedLogin from "../../components/FailedLogin/FailedLogin";
import Navigation from "../../components/Navigation/Navigation";
import Posts from "../../components/Posts/Posts";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./UserPage.scss";

class UserPage extends Component {
    state = {
        failedLogin: false,
        user: null,
        userComment: [],
        username: null,
        profile: null,
    }

    componentDidMount = () => {
        const token = sessionStorage.getItem("token");
        const decodedUser = jwt_decode(token);

        const userId = this.props.match.params.id;
        const { user } = decodedUser;
        this.setState({ username: user });
       
        if (!token) {
            this.setState({ failedLogin: true });
            return;
        }

        axios
            .get(`http://localhost:8080/comments/${userId}`, {
                headers: {
                    Authorization: "Bearer" + token
                }
            })
            .then((res) => {
                const userComment = res.data;
                this.setState({ userComment: userComment });
                this.setState({ profile: userComment[0].profile })
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
            return(
                <FailedLogin />
            )
        }
        return(
            <>
                <Navigation />
                <main className="user">
                    <section className="user__contain">
                        <div className="user__contain--bg"></div>
                        <div className="user__info">
                            <img src={this.state.profile} className="user__info--profile"/>
                            <span className="user__info--username">{this.state.username}</span>
                        </div>
                    </section>
                    <SideNavigation handleLogout={this.handleLogout}/>
                </main>
                <h1 className="user__posts">POST HISTORY</h1>
                {this.state.userComment.map((comment) => {
                    return (
                        <Posts 
                            id={comment.id}
                            profilePic={comment.profile}
                            username={comment.username}
                            timestamp={comment.timestamp}
                            comment={comment.comment}
                            key={comment.commentId}
                        />
                    )
                })}
            </>
        )
    }
}

export default UserPage;