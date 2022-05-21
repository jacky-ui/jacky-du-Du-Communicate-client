import { Component } from "react";
import io from "socket.io-client";
import "./Messages.scss";
let socket = io.connect("http://localhost:8080");

class Messages extends Component {
    state = {
        chat: [ ],
    }

    componentDidMount = () => {
        // socket = io("http://localhost:8080/")
        socket.on("receive_message", (data) => {
            console.log(data);
            const receivedComment = data.comment;
            this.setState ({ chat: [...this.state.chat, receivedComment] })
            // this.updateComments(receivedComment);
            return receivedComment;
        })
    }

    componentDidUpdate = () => {

    }

    handleSend = (e) => {
        e.preventDefault();
        const post = e.target.post.value;

        socket.emit("send message", {comment: post});
        console.log(post);

        e.target.reset();
    }

    // updateComments = (data) => {
    //     this.state.chat.push(data);
    // };

    render() {
        console.log(this.state.receivedComment , "Hello");
        return (
            <>
            <section className="message">
                <h3 className="message__header">DU-CHAT</h3>
                <div className="message__container">
                <h1>{this.state.chat}</h1>
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