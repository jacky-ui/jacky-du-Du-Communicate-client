import  React  from "react";
import Inputs from "../../components/Inputs/Inputs";
import { Link, Redirect } from "react-router-dom";
import "./LoginPage.scss";
import axios from "axios";
import BIRDS from 'vanta/dist/vanta.birds.min';

class LoginPage extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
      }

    state = {
        errors: "",
        pass: false,
    }

    componentDidMount = () => {
        document.title = "Du-Communicate - Login";

        this.vantaEffect = BIRDS({
            el: this.vantaRef.current,
            backgroundColor: 0xffffff
          })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        axios
            .post("http://localhost:8080/users/login", {
                username, 
                password
            })
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
                this.setState({
                pass: true,
                });
            })
            .catch((err) => {
                this.setState({
                error: err.response.data,
                });
            })
    }

    render() {
        return (
            <article className="container" ref={this.vantaRef}>
                <h1 className="container__header">Du-Communicate</h1>
    
                <main className="login">
                    <h2 className="login__signup--title">Login</h2>
                    <form className="login__form" onSubmit={this.handleSubmit}>
                        <Inputs type="text" name="username" label="USERNAME"/>
                        <Inputs type="password" name="password" label="PASSWORD"/>
                        <button className="login__form--btn">LOGIN</button>
                        {this.state.errors && <h3 className="login__state">Failed login attempt</h3>}
                    </form>

                    {this.state.pass && <Redirect to="/" />}

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