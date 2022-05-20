import "./FailedLogin.scss";
import { Link } from "react-router-dom";

function FailedLogin() {
    return(
        <div className="failed">
            <h2 className="failed__message">You must be logged in to view this page.</h2>
            <Link to="/login">
                    <button className="failed__button">Login or Signup!</button>
            </Link>
        </div>
    )
}

export default FailedLogin;