import axios from "axios";
import { Component } from "react";
import Inputs from "../../components/Inputs/Inputs";
import "./SignUpPage.scss";
import { Link } from "react-router-dom";

class SignUpPage extends Component {
    state = {
        error: " ",
        pass: false,
        empty: " ",
        uploadText: "Upload Profile Picture...",
        imageFile: null
    };

    handleSignUp = (e) => {
        e.preventDefault();

        if (!e.target.first_name || !e.target.last_name.value || !e.target.username.value || !e.target.password.value || !this.state.imageFile) {
            this.setState({ empty: "All fields are required" });
            return;
        }

        const formImage = new FormData();
        formImage.append("profileImage", this.state.imageFile);

        // axios.post("https://httpbin.org/anything", formImage).then(res => console.log(res));

        axios
            .post("http://localhost:8080/users/signup", {
                firstName: e.target.first_name.value,
                lastName: e.target.last_name.value,
                username: e.target.username.value,
                password: e.target.password.value,
                formImage
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

    onChangeUpload = (e) => {
        const uploadStatus = e.target.files[0];

        if (!uploadStatus) {
            return;
        }
        this.setState ({ imageFile: uploadStatus });
        return this.setState ({ uploadText: "Selected!" })
    }

    render() {
        return (
            <section className="container">
                <h1 className="container__header">Du-Communicate</h1>

                <main className="signup">
                    <h2 className="login__signup--title">Sign Up</h2>
                    <form className="signup__form" onSubmit={this.handleSignUp} encType="multipart/form-data">
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
                        {this.state.pass && <Link to="/login"><h2 className="signup__state">Awesome! Click the link to return to login!</h2></Link>}
                        {this.state.empty && <h2 className="signup__state">{this.state.empty}</h2>}
                        {this.state.error && <h2 className="signup__state">{this.state.error}</h2>}
                    </form>
                </main>
            </section>
        )
    }
}

export default SignUpPage;