import "./AboutPage.scss";
import Navigation from "../../components/Navigation/Navigation";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import githubIcon from "../../assets/images/icons/github.png";
import linkedlnIcon from "../../assets/images/icons/linkedin.png";

function AboutPage() {
    return (
        <>
            <Navigation />
            <article className="aboutme">
                <section className="aboutme__container">
                    <h1 className="aboutme__header">Welcome!<br/>You have found my About Me page!</h1>
                    <p className="aboutme__paragraph">My name is Jacky Du and this is my capstone project called "Du-Communicate" for BrainStation's Web Development Bootcamp</p>
                    <p className="aboutme__paragraph">Du-Communicate is a social media platform that is meant to encourage users to communicate with other active users</p>

                    <div className="aboutme__social">
                        <a href="https://github.com/jacky-ui" target="_blank">
                            <img 
                                src={githubIcon}
                                className="aboutme__social--icons"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/jacky-du-ctech/" target="_blank">
                            <img 
                                src={linkedlnIcon}
                                className="aboutme__social--icons"
                            />
                        </a>
                    </div>
                </section>
                <SideNavigation />
            </article>
        </>
    )
}

export default AboutPage;