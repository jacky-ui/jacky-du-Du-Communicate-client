import axios from "axios";
import { Component } from "react";
import Inputs from "../../components/Inputs/Inputs";
import "./SignUpPage.scss";

class SignUpPage extends Component {
    state = {
        error: " ",
        pass: false,
        empty: " "
    };

    handleSignUp = (e) => {
        e.preventDefault();

        if (!e.target.first_name || !e.target.last_name.value || !e.target.username.value || !e.target.password.value) {
            this.setState({ empty: "All fields are required" });
            return;
        }

        axios
            .post("http://localhost:8080/users/signup", {
                firstName: e.target.first_name.value,
                lastName: e.target.last_name.value,
                username: e.target.username.value,
                password: e.target.password.value
            })
            .then(() => {
                this.setState({ pass: true, error: " "});
                e.target.reset();
            })

            .catch((error) => {
                this.setState({ pass: false, error: error.response.data })
            });

            if (this.state.pass === true) {
                this.props.history.push("/");
            }
    };

    render() {
        console.log(this.props);
        return (
            <section className="container">
                <h1 className="container__header">Du-Communicate</h1>

                <main className="signup">
                    <h2 className="login__signup--title">Sign Up</h2>
                    <form className="signup__form" onSubmit={this.handleSignUp}>
                        <Inputs type="text" name="first_name" label="First Name"/>
                        <Inputs type="text" name="last_name" label="Last Name"/>
                        <Inputs type="text" name="username" label="Username"/>
                        <Inputs type="password" name="password" label="Password"/>
                        <button className="signup__form--btn">Sign Up!</button>
                        {this.state.pass && <h2 className="signup__state">Awesome! You will be redirected to login!</h2>}
                        {this.state.empty && <h2 className="signup__state">{this.state.empty}</h2>}
                        {this.state.error && <h2 className="signup__state">{this.state.error}</h2>}
                    </form>
                </main>
            </section>
        )
    }
}

export default SignUpPage;