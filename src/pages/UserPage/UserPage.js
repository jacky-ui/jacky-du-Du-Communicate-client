import { Component } from "react";
import FailedLogin from "../../components/FailedLogin/FailedLogin";
import Navigation from "../../components/Navigation/Navigation";
import Posts from "../../components/Posts/Posts";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./UserPage.scss";
const { REACT_APP_URL, REACT_APP_PORT } = process.env;

class UserPage extends Component {
    state = {
        failedLogin: false,
        user: null,
        userComment: [],
        username: null,
        profile: null,
        userColor: null
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
            .get(`${REACT_APP_URL}${REACT_APP_PORT}/comments/${userId}`, {
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
    
    handleColorChange = () => {
        const colors = ["Blue", "Black", "Red", "Pink", "Green", "Yellow"];
        let changedColor = colors[Math.floor(Math.random()*colors.length)]
        this.setState ({ userColor: changedColor })
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
                        <div className={`user__contain--bg ${this.state.userColor}`}></div>
                        <div className="user__info">
                            <img src={this.state.profile} className="user__info--profile"/>
                            <span className="user__info--username">{this.state.username}</span>
                            <button className="user__btn--color" onClick={this.handleColorChange}>Change Color!</button>
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