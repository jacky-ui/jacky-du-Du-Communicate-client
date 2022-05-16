import "./Posts.scss";

function Posts() {
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
                <p className="posts__comments--comment">hfdkajhldfhasdhf fdsafhsdjkfhlaksjhfd fdsahfasldkf</p>
                <div></div>
            </div>
        </section>
    )
}

export default Posts;