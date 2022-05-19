import "./Posts.scss";
import likesIcon from "../../assets/images/icons/likes.svg";
import commentIcon from "../../assets/images/icons/comment.png";

function Posts(props) {
    return (
        <section className="posts">
            <div className="posts__profile">
                <div className="posts__profile--sizing"></div>
            </div>
            <div className="posts__comments">
                <div className="posts__comments--info">
                    <span className="posts__comments--head">Username</span>
                    <span className="posts__comments--head">02/03/2021</span>
                </div>
                <p className="posts__comments--comment">hfdkajhldfhasdhf fdsafhsdjkfhlaksjhfd </p>
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