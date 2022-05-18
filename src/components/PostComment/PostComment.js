import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./PostComment.scss";

class PostComment extends Component {
    render() {
        console.log(this.props.profilePic)
        return (
        <Popup trigger={<input type="text" placeholder="Posts? Feelings?"></input>} modal nested>
            {close => (
                <div className="popup">
                    <h2 className="popup__title">Make a post!</h2>
                    <div className="popup__comments">
                        <img 
                            className="popup__comments--profile" 
                            src={this.props.profilePic} 
                            alt="user profile"
                        />
                        <input 
                            className="popup__comments--comment" type="textarea"></input>
                        <button className="popup__comments--btn">POST!</button>
                    </div>
                </div>
            )}
        </Popup>
        )
    }
}

export default PostComment;