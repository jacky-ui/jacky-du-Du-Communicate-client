import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import jwt_decode from "jwt-decode";
import "./HomePage.scss";

class HomePage extends Component {
    state = {
        user: null,
        failedLogin: false
    }

    componentDidMount() {
        const token = sessionStorage.getItem("token");

        if (!token) {
            this.setState({ failedLogin: true });
            return;
        }

        const decodedUser = jwt_decode(token);
        const userId = decodedUser.id;
        console.log(decodedUser);
        console.log(userId);
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
                <Navigation />
            </>
        )
    }
}

export default HomePage;