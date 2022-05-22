import { Component } from "react";
import io from "socket.io-client";
import sendIcon from "../../assets/images/icons/send.png";
import "./Messages.scss";
let socket = io.connect("http://localhost:8080");

class Messages extends Component {
    state = {
        chat: [ ],
        userMesaage: null,
        userCommented: [ ]
    }

    componentDidMount = () => {
        // socket = io("http://localhost:8080/")
        socket.on("receive_message", (data) => {
            const receivedComment = {
                id: data.id,
                comment: data.comment,
                username: data.username
            };
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

        this.setState ({ userMesaage: post })

        e.target.reset();
    }

    render() {
        return (
            <>
            <section className="message">
                <div className="message__container">
                    <h3 className="message__container--header">DU-CHAT</h3>
                            {this.state.chat.map((data) => {
                                return(
                                    <div className="message__container--receive" key={data.id}>
                                        <span className="message__container--username">{data.username}</span>
                                        <div>
                                            <span className="message__container--comment">{data.comment}</span>
                                        </div>
                                    </div>
                                )
                            })}
                </div>
                    <form className="message__form" onSubmit={this.handleSend}>
                        <input className="message__form--input" type="text" placeholder="Write a Message..." name="post"/>
                        <button className="message__form--btn">
                        <img className="icons--sizing icons--hover" src={sendIcon}/>SEND
                        </button>
                    </form>
            </section>
            </>
        )
    }
}

export default Messages;