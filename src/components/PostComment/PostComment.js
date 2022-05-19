import Popup from 'reactjs-popup';
import { Component } from "react";
import axios from 'axios';
import "./PostComment.scss";

class PostComment extends Component {
    state = {
        noComments: " "
    }

    handleSubmitComment = (e) => {
        if (e.target.comments.value === "") {
            this.setState({
                noComments: "Please enter a comment to post!"
            })
            return;
        }

        axios
            .post("http://localhost:8080/comments/post", {
                profilePicture: this.props.profilePic,
                comments: e.target.comments.value,
                userId: this.props.userId,
                username: this.props.username
            })
    }
    render() {
        const { username, profilePic} = this.props;
        return (
            <Popup trigger={<input type="text" placeholder="Posts? Feelings?"></input>} modal nested>
                {close => (
                    <div className="popup">
                        <button className="popup__close" onClick={close}>&times;</button>
                        <h2 className="popup__title">Make a post!</h2>
                        <form className="popup__comments" onSubmit={this.handleSubmitComment}>
                            <div className="popup__comments--container">
                                <img 
                                    className="popup__comments--profile" 
                                    src={profilePic} 
                                    alt="user profile"
                                />
                                <span className="popup__comments--username">{username}</span>
                            </div>
                            <textarea className="popup__comments--comment" name="comments"></textarea>
                            <button className="popup__comments--btn">POST!</button>

                            {/* If textarea empty, message will render */}
                            {this.state.noComments && <h2 className="error">{this.state.noComments}</h2>}

                        </form>
                    </div>
                )}
            </Popup>
        )
    }
}

{/** */}

export default PostComment;