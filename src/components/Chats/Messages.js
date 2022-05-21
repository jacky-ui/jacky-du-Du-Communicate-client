import { Component } from "react";
import io from "socket.io-client";
import "./Messages.scss";
let socket = io.connect("http://localhost:8080");

class Messages extends Component {
    componentDidMount = () => {
        // socket = io("http://localhost:8080/")
    }

    handleSend = (e) => {
        e.preventDefault();
        const post = e.target.post.value;

        socket.emit("send message", {comment: post});
        console.log(post);

        e.target.reset();
    }

    render() {
        return (
            <>
            <section className="message">
                <h3 className="message__header">DU-CHAT</h3>
                <div className="message__container">
                    <form className="message__form" onSubmit={this.handleSend}>
                        <input className="message__form--input" type="text" placeholder="Write a Message..." name="post"/>
                        <button className="message__form--btn">SEND</button>
                    </form>
                </div>
            </section>
            </>
        )
    }
}

export default Messages;