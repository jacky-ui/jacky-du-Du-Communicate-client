import axios from "axios";
import React from "react";
import Inputs from "../../components/Inputs/Inputs";
import "./SignUpPage.scss";
import { Link } from "react-router-dom";
import BIRDS from 'vanta/dist/vanta.birds.min';
const { REACT_APP_URL, REACT_APP_PORT } = process.env;

class SignUpPage extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
      }

    state = {
        error: " ",
        pass: false,
        empty: " ",
        uploadText: "Upload Profile Picture...",
        userTaken: null
    };

    componentDidMount = () => {
        document.title = "Du-Communicate - Sign Up";

        this.vantaEffect = BIRDS({
            el: this.vantaRef.current,
            backgroundColor: 0xffffff
          })
    }

    handleSignUp = (e) => {
        e.preventDefault();

        if (!e.target.first_name || !e.target.last_name.value || !e.target.username.value || !e.target.password.value) {
            this.setState({ empty: "All fields are required" });
            return;
        }

        axios
            .post(`${REACT_APP_URL}${REACT_APP_PORT}/users/signup`, {
                firstName: e.target.first_name.value,
                lastName: e.target.last_name.value,
                username: e.target.username.value,
                password: e.target.password.value
            })
            .then(() => {
                this.setState({ pass: true, error: " "})
                if (e.target.profileImage.files[0]) {
                    console.log(e.target.profileImage.files[0])
                    const formImage = new FormData();
                    formImage.append("image-field" ,e.target.profileImage.files[0]);
                    axios.post(`${REACT_APP_URL}${REACT_APP_PORT}/users/uploadimage`, formImage)
                }
                e.target.reset();
            })
            .catch((error) => {
                this.setState({ pass: false, error: error.response.data })
            });

            if (this.state.pass === true) {
                this.props.history.push("/");
            }
    };

    onChangeUpload = (e) => {
        const uploadStatus = e.target.files[0];

        if (!uploadStatus) {
            return;
        }
        return this.setState ({ uploadText: "Selected!" })
    }

    render() {
        return (
            <section className="container" ref={this.vantaRef}>
                <h1 className="container__header">Du-Communicate</h1>

                <main className="signup">
                    <Link to="/login" className="link__underline">
                        <span>Back to Login</span>
                    </Link>
                    <h2 className="login__signup--title">Sign Up</h2>
                    <form className="signup__form" onSubmit={this.handleSignUp}>
                        <Inputs type="text" name="first_name" label="First Name"/>
                        <Inputs type="text" name="last_name" label="Last Name"/>
                        <Inputs type="text" name="username" label="Username"/>
                        <Inputs type="password" name="password" label="Password"/>
                        <input 
                            type="file"
                            name="profileImage"
                            accept="image/*"
                            className="signup__form--upload"
                            id="profileImage"
                            onChange={this.onChangeUpload}
                        />
                        <label htmlFor="profileImage" className="signup__form--lbl">{this.state.uploadText}</label>
                        <button className="signup__form--btn">Sign Up!</button>
                    </form>
                        {this.state.pass && <Link to="/login"><h2 className="signup__state">Awesome! Click the link to return to login!</h2></Link>}
                        {this.state.empty && <h2 className="signup__state">{this.state.empty}</h2>}
                        {this.state.error && <h2 className="signup__state">{this.state.error}</h2>}
                        {this.state.userTaken && <h2 className="signup__state">{this.state.userTaken}</h2>}
                </main>
            </section>
        )
    }
}

export default SignUpPage;