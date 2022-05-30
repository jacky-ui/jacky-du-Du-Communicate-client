import axios from "axios";
import { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import jwt_decode from "jwt-decode";
import "./HomePage.scss";
import Posts from "../../components/Posts/Posts";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import PostComment from "../../components/PostComment/PostComment";
import FailedLogin from "../../components/FailedLogin/FailedLogin";
import { Link } from 'react-router-dom';
const { REACT_APP_URL, REACT_APP_PORT } = process.env;
class HomePage extends Component {
    state = {
        user: null,
        failedLogin: false,
        welcomeUser: null,
        profilePic: null,
        userId: null,
        comments: null,
    }
    componentDidMount() {
        document.title = "Du-Communicate - Home";
        const token = sessionStorage.getItem("token");
        if (!token) {
            this.setState({ failedLogin: true });
            return;
        }
        const decodedUser = jwt_decode(token);
        const userId = decodedUser.id;
        axios
            .get(`${REACT_APP_URL}${REACT_APP_PORT}/dashboard/${userId}`, {
                headers: {
                    Authorization: "Bearer" + token
                }
            })
            .then((response) => {
                const { username, profile, id } = response.data;
                this.setState({ welcomeUser: username});
                this.setState({ profilePic: profile });
                this.setState({userId: id});
            });
        axios
            .get(`${REACT_APP_URL}${REACT_APP_PORT}/comments`, {
                headers: {
                    Authorization: "Bearer" + token
                }
            })
            .then((response) => {
                const commentsJSON = response.data;
                this.setState({
                    comments: commentsJSON
                })
            });
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
        };
        if (!this.state.comments) {
            return (
            <section>
                  <p>Loading...</p>
            </section>
            )
          }

        return (
            <>
                <Navigation profile={this.state.profilePic} handleLogout={this.handleLogout}/>
                <div className="contain">
                    {/*<div className="contain__main">
                        <h1 id="contain__link" className="greetings">Welcome {this.state.welcomeUser}!</h1>
                        <main>
                            <section className="contain__comments">
                                <div className="comments">
                                    <Link to={`/user-profile/${this.state.userId}`}>
                                        <img 
                                            src={this.state.profilePic}
                                            className="comments__profile"
                                            alt="user profile"
                                        />
                                    </Link>
                                    <PostComment profilePic={this.state.profilePic} username={this.state.welcomeUser} userId={this.state.userId}/>
                                </div>
                                {this.state.comments.map((comments) => {
                                return (
                                        <Posts 
                                            key={comments.commentId}
                                            id={comments.id}
                                            profilePic={comments.profile}
                                            username={comments.username}
                                            comment={comments.comment}
                                            timestamp={comments.timestamp}
                                        />
                                    )
                                })}
                            </section>
                        </main>
                    </div>*/}
                    <SideNavigation handleLogout={this.handleLogout}/>
                    <a href="#contain__link" className="shortcut">Top</a>
                </div>
            </>
        )
    }
}
export default HomePage;