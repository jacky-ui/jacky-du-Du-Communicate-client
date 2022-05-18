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
                <h1>Hello world</h1>
            </div>
        )}
        </Popup>
        )
    }
}

export default PostComment;