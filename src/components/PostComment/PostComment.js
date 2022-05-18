import Popup from 'reactjs-popup';
import axios from 'axios';
import "./PostComment.scss";

function PostComment(props) {
    const handleSubmitComment = (e) => {
        e.preventDefault();
        // const profilePicture = props.profilePic;
        // const comments = e.target.comments.value
        // console.log(profilePicture, comments);
        if (e.target.comments.value === "") {
            console.log("Wrong");
            return(
                <span>Please enter in comments to post!</span>
            ) 
        }

        console.log("correct");

        // axios
        //     .post("http://localhost:8080/comments", {
        //         profilePicture: props.profilePic,
        //         comments: e.target.comments.value
        //     })
    }
    return (
        <Popup trigger={<input type="text" placeholder="Posts? Feelings?"></input>} modal nested>
            {close => (
                <div className="popup">
                    <h2 className="popup__title">Make a post!</h2>
                    <form className="popup__comments" onSubmit={handleSubmitComment}>
                        <div className="popup__comments--container">
                            <img 
                                className="popup__comments--profile" 
                                src={props.profilePic} 
                                alt="user profile"
                            />
                            <span className="popup__comments--username">{props.username}</span>
                        </div>
                        <textarea className="popup__comments--comment" name="comments"></textarea>
                        <button className="popup__comments--btn">POST!</button>
                    </form>
                </div>
            )}
        </Popup>
    )
}

export default PostComment;