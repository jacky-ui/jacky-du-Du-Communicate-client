import "./Posts.scss";
import likesIcon from "../../assets/images/icons/likes.svg";
import commentIcon from "../../assets/images/icons/comment.png";
import { Link } from "react-router-dom";

function Posts(props) {
    const { id, profilePic, username, timestamp, comment } = props;
    const formatTime = new Date(timestamp).toLocaleDateString();

    return (
        <section className="posts">
            <div className="posts__profile">
                <Link to={`/user-profile:${id}`}>
                    <img 
                        className="posts__profile--sizing"
                        src={profilePic}
                        alt="user profile"
                    />
                </Link>
            </div>
            <div className="posts__comments">
                <div className="posts__comments--info">
                    <span className="posts__comments--head">{username}</span>
                    <span className="posts__comments--head">{formatTime}</span>
                </div>
                <p className="posts__comments--comment">{comment}</p>
                <div className="posts__icons">
                    <img 
                        src={likesIcon}
                        className="posts__icons--sizing"
                        alt="like user comment"
                    />
                    <img 
                        src={commentIcon}
                        className="posts__icons--sizing"
                        alt="comment on user post"
                    />
                </div>
            </div>
        </section>
    )
}

export default Posts;