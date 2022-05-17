import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import jwt_decode from "jwt-decode";
import "./HomePage.scss";
import Posts from "../../components/Posts/Posts";
import SideNavigation from "../../components/SideNavigation/SideNavigation";

class HomePage extends Component {
    state = {
        user: null,
        failedLogin: false,
        welcomeUser: null,
        profilePic: null
    }

    componentDidMount() {
        const token = sessionStorage.getItem("token");

        if (!token) {
            this.setState({ failedLogin: true });
            return;
        }

        const decodedUser = jwt_decode(token);
        const userId = decodedUser.id;

        axios
            .get(`http://localhost:8080/dashboard/${userId}`, {
                headers: {
                    Authorization: "Bearer" + token
                }
            })
            .then((response) => {
                const { username, profile } = response.data;
                this.setState({ welcomeUser: username});
                this.setState({ profilePic: profile })
            });
    }

    render() {
        if (this.state.failedLogin) {
            return(
                <div className="failed">
                    <h2 className="failed__message">You must be logged in to view this page.</h2>
                    <Link to="/login">
                        <button className="failed__button">Login or Signup!</button>
                    </Link>
                </div>
            )
        }
        return (
            <>
                <header>
                    <Navigation profile={this.state.profilePic}/>
                </header>
                <h1 className="greetings">Welcome {this.state.welcomeUser}!</h1>
                <main className="container">
                    <section className="container__comments">
                        <div className="comments">
                            <img 
                                src={this.state.profilePic}
                                className="comments__profile"
                                alt="user profile"
                            />
                            <input className="comments__comment" type="text" placeholder="Posts? Feelings?"></input>
                        </div>
                        <Posts />
                    </section>
                    <SideNavigation />
                </main>
            </>
        )
    }
}

export default HomePage;