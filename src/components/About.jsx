import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About us</h1>
            <User name={"Indra (functional Component)"}/>
            <UserClass name={"Indra (class Component)"} location={"Bangalore"}/>
        </div>
    )
}

export default About;