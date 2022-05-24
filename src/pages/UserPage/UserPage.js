import { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Posts from "../../components/Posts/Posts";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import "./UserPage.scss";

class UserPage extends Component {
    componentDidMount = () => {
        const token = sessionStorage.getItem("token");

    }

    render() {
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
                    <SideNavigation />
                </main>
                <h1 className="user__posts">POST HISTORY</h1>
                <Posts />
            </>
        )
    }
}

export default UserPage;