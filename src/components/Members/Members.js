import "./Members.scss";
import uniqid from "uniqid";

function Members(props) {
    return (
        <>
            {props.activeMembers.map((member) => {
                return(
                    <section key={uniqid()} className="member">
                        <img 
                            src={member.profilePic}
                            className="member__profile"
                            alt="user profile"
                        />
                        <span className="member__username">{member.username}</span>
                    </section>
                )
            })}
        </>
    )
}

export default Members;