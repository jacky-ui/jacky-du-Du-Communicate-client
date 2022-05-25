import { Component } from "react";
import FailedLogin from "../../components/FailedLogin/FailedLogin";
import Navigation from "../../components/Navigation/Navigation";
import Posts from "../../components/Posts/Posts";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import axios from "axios";
import "./UserPage.scss";

class UserPage extends Component {
    state = {
        failedLogin: false,
        user: null
    }

    componentDidMount = () => {
        const token = sessionStorage.getItem("token");
        const userId = this.props.match.params.id;
        console.log(this.props.match.params.id)
       
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
                console.log(res);
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
                            <div className="user__info--profile"></div>
                            <span className="user__info--username">username</span>
                        </div>
                    </section>
                    <SideNavigation handleLogout={this.handleLogout}/>
                </main>
                <h1 className="user__posts">POST HISTORY</h1>
                <Posts />
            </>
        )
    }
}

export default UserPage;