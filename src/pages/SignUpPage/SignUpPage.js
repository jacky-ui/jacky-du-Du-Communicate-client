import { Component } from "react";
import Inputs from "../../components/Inputs/Inputs";
import "./SignUpPage.scss";

class SignUpPage extends Component {
    render() {
        return (
            <section className="container">
                <h1 className="container__header">Du-Communicate</h1>

                <main className="signup">
                    <h2 className="login__signup--title">Sign Up</h2>
                    <form className="signup__form">
                        <Inputs type="text" name="first_name" label="First Name"/>
                        <Inputs type="text" name="last_name" label="Last Name"/>
                        <Inputs type="text" name="username" label="Username"/>
                        <Inputs type="text" name="password" label="Password"/>
                        <button className="signup__form--btn">Sign Up!</button>
                    </form>
                </main>
            </section>
        )
    }
}

export default SignUpPage;