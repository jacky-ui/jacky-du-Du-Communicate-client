import Popup from 'reactjs-popup';
import { Component } from "react";
import axios from 'axios';
import "./PostComment.scss";

class PostComment extends Component {
    state = {
        noComments: " "
    }

    handleSubmitComment = (e) => {
        e.preventDefault();
        // const profilePicture = props.profilePic;
        // const comments = e.target.comments.value
        // console.log(profilePicture, comments);
        if (e.target.comments.value === "") {
            console.log("Wrong");
            this.setState({
                noComments: "Please enter a comment to post!"
            })
            return;
        }

        console.log("correct");

        // axios
        //     .post("http://localhost:8080/comments", {
        //         profilePicture: props.profilePic,
        //         comments: e.target.comments.value
        //     })
    }
    render() {
        return (
            <Popup trigger={<input type="text" placeholder="Posts? Feelings?"></input>} modal nested>
                {close => (
                    <div className="popup">
                        <h2 className="popup__title">Make a post!</h2>
                        <form className="popup__comments" onSubmit={this.handleSubmitComment}>
                            <div className="popup__comments--container">
                                <img 
                                    className="popup__comments--profile" 
                                    src={this.props.profilePic} 
                                    alt="user profile"
                                />
                                <span className="popup__comments--username">{this.props.username}</span>
                            </div>
                            <textarea className="popup__comments--comment" name="comments"></textarea>
                            <button className="popup__comments--btn">POST!</button>

                            {this.state.noComments && <h2 className="noname">{this.state.noComments}</h2>}

                        </form>
                    </div>
                )}
            </Popup>
        )
    }
}

export default PostComment;