import "./AboutPage.scss";
import Navigation from "../../components/Navigation/Navigation";
import SideNavigation from "../../components/SideNavigation/SideNavigation";

function AboutPage() {
    return (
        <>
            <Navigation />
            <article className="aboutme">
                <section className="aboutme__container">
                    <h1 className="aboutme__header">Welcome!<br/>You have found my About Me page!</h1>
                </section>
                <SideNavigation />
            </article>
        </>
    )
}

export default AboutPage;