import { Component } from "react";
import Inputs from "../../components/Inputs/Inputs";
import { Link, Redirect } from "react-router-dom";
import "./LoginPage.scss";
import axios from "axios";

class LoginPage extends Component {
    render() {
        return (
            <article className="container">
                <h1 className="container__header">Du-Communicate</h1>
    
                <main className="login">
                    <h2 className="login__title">Login</h2>
                    <form className="login__form" onSubmit={this.handleSubmit}>
                        <Inputs type="text" name="username" label="USERNAME"/>
                        <Inputs type="password" name="password" label="PASSWORD"/>
                        <button className="login__form--btn">LOGIN</button>
                    </form>


                    <span className="login__divider"></span>
                    <Link to="/signup">
                        <button className="login__signup">SIGN UP</button>
                    </Link>
                </main>
            </article>
        )
    }
}

export default LoginPage;