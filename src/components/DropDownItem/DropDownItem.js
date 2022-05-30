import { Link } from "react-router-dom";
import "./DropDownItem.scss";

function DropDownItem (props) {
    const { icon, item, path, alt } = props
    return(
        <>
            <Link to={path} className="item__link">
                <div className="item">
                    <img 
                        src={icon}
                        className="item__icon"
                        alt={alt}
                    />
                    <span className="item__text">{item}</span>
                </div>
            </Link>
        </>
    )
}

export default DropDownItem;