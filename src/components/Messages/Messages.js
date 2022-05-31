import { Component } from "react";
import io from "socket.io-client";
import sendIcon from "../../assets/images/icons/send.png";
import "./Messages.scss";
const { REACT_APP_URL, REACT_APP_PORT } = process.env;
let socket = io.connect(`${REACT_APP_URL}${REACT_APP_PORT}`);

class Messages extends Component {
    state = {
        chat: [ ],
        userCommented: [ ]
    }

    componentDidMount = () => {
        socket.on("receive_message", (data) => {
            const receivedComment = {
                id: data.id,
                comment: data.comment,
                username: data.username
            };
            this.setState ({ chat: [...this.state.chat, receivedComment] })
        })

        socket.on("connection", () => {
            console.log("user connected");
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

        e.target.reset();
    }

    compareUsername = (username) => {
        if(this.props.username === username) {
            return true;
        }
        return false;
    }
    
    render() {
        return (
            <>
            <section className="message">
                <div className="message__container">
                    <h3 className="message__container--header">DU-CHAT</h3>
                        <div className="message__container--overflow">
                            {this.state.chat.map((data) => {
                                return(
                                    <div className={`${this.compareUsername(data.username) ? "message__container--posted" : "message__container--receive"}`} key={data.id}>
                                        <span className="message__container--username">{data.username}</span>
                                        <div>
                                            <span className={`${this.compareUsername(data.username) ? "message__container--commented" : "message__container--comment"}`}>{data.comment}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                </div>
                    <form className="message__form" onSubmit={this.handleSend}>
                        <input className="message__form--input" type="text" placeholder="Write a Message..." name="post"/>
                        <button className="message__form--btn">
                        <img className="icons--hover icons icon__send--mobile" src={sendIcon}/>SEND
                        </button>
                    </form>
            </section>
            </>
        )
    }
}

export default Messages;