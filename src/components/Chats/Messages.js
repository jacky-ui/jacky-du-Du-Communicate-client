import { Component } from "react";
import io from "socket.io-client";
import "./Messages.scss";
let socket = io.connect("http://localhost:8080");

class Messages extends Component {
    state = {
        chat: [ ],
        userMesaage: null
    }

    componentDidMount = () => {
        // socket = io("http://localhost:8080/")
        socket.on("receive_message", (data) => {
            const receivedComment = {
                id: data.id,
                comment: data.comment,
                username: data.username
            };
            console.log(receivedComment);
            this.setState ({ chat: [...this.state.chat, receivedComment] })
            // this.updateComments(receivedComment);
            return receivedComment;
        })
    }

    handleSend = (e) => {
        e.preventDefault();
        const post = e.target.post.value;

        socket.emit("send message", 
        {
            comment: post,
            username: this.props.username
        });

        this.setState ({
            userMesaage: post
        })

        e.target.reset();
    }

    render() {
        return (
            <>
            <section className="message">
                <h3 className="message__header">DU-CHAT</h3>
                <div className="message__container">
                    <div className="message__container--posted">
                        {this.state.chat.map((data) => {
                            return(
                                <div key={data.id}>
                                    <span>{data.comment}</span>
                                </div>
                            )
                        })}
                    </div>
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