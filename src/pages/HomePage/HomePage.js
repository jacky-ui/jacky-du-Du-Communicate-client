import { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import "./HomePage.scss";

class HomePage extends Component {
    state = {
        user: null,
        failedLogin: false
    }

    componentDidMount() {
        const token = sessionStorage.getItem("token");
        console.log(token);

        if (!token) {
            this.setState({ failedLogin: true });
            return;
        }
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