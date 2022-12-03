import logo from "../assets/tiger.svg";
import stove from "../assets/stove-diagram.png";
import austin from "../assets/austin.png";
import marcy from "../assets/marcy.png";
import storyboard from "../assets/storyboard.png";
import { Link } from "react-router-dom";
import ImageText from "./ImageText"
import ProjectTile from "./ProjectTile"
import '../Page.css'

export default function Personas() {
    const prep_content = <div>
        <p>This interface is trying to allow users to easily control a heat source to cook food.</p>
        <p>There are four burners that users can control independently of each other through the use of the knobs on the side of the stove.</p>
        <p>To turn on a burner, the user must press the knob in and set it to the "LITE" setting until the flame ingites, and then can turn the knob to change heat levels.</p>
    </div>

    const austin_content = <div>
        <p>
        <b>Description:</b> Austin is a rushed student and roommate that must share the stove while cooking. He needs to make dinner before his 6:30 pm class.
        <br/> <br/>
        <b>Interface Problems:</b> He has a hard time accessing his burner with other people cooking at the same time and crowding around the stove since the burners are stacked and not in a row. He is busy and has limited time to cook, so he wishes he didn’t have trouble finding which knob corresponds to what burner since it’s not memorable or counterintuitive, even. He wants the stove to heat up faster and wishes there were options to change the stove grating height. 
        <br/> <br/>
        <b>Explanation:</b> Austin represents the user of the stove interface that wishes to use the stove quickly and share it efficiently with other users. Often, a stove is a shared appliance, so it is important to consider users who share the interface. Cooking is a necessity that isn’t always leisurely and it is important to consider its ease of use for users in a rush. Austin represents the observation that users have difficulty when sharing the stove and when trying to ignite a burner.
        </p>
    </div>

    const marcy_content = <div>
        <p>
                            <b>Description:</b> Marcy is a user who is cooking multiple things at once on multiple different burners. Today is her meal prep day.
                            <br/><br/>
                            <b>Interface Problems:</b> She has to manage various burners at the same time, and she has a hard time keeping track of how hot each pot/pan is and if she even lit that burner because there’s so much on her mind. Without an easy indication of the burner heat levels, she can easily burn food or leave a pan cold on accident. The knobs with heat settings are on the side of the stove and easy to forget, and even when she looks, the burner’s have inconsistent heat levels relative to each other (the high setting on one is hotter than high on another).
                            <br/><br/>
                            <b>Explanation:</b> Marcy represents the user that uses multiple burners at once. It’s unrealistic to assume a user always uses one burner at a time; some recipes call for separate cooking and there are four burners and sometimes only one user. And when multitasking, it is hard to keep track of everything when the information isn’t immediately obvious. She accounts for how users often had to look under their pans for the flame since they don’t trust/immediately understand the knob interface. She also shows the repercussions of the user complaint that burners aren’t consistent and some take longer to heat than others.
                        </p>
    </div>

    return(
        <div className="page">
            <div className="logo">
                <Link to="/">
                <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <div className="page-content">
            <h1 className="page-title">Personas & Storyboarding</h1>
            <h2>Investigating how users interact with communal kitchen stoves</h2>
            <div className="section">
                <h3>Preparation</h3>
                <p>In order to better understand how users view, understand, and use the kitchen stove interface, I observed three users in action. Beforehand, I sketched out the key components of the interface for my understanding.</p>
                <ImageText img={stove} width={"50%"} content={prep_content} column={false} />
            </div>
            <div className="section">
                <h3>Recording Observations</h3>
                <p>Here are the key observations and a summary of the user responses to my questions.</p>
                <div className="highlight-content">
                <p class="subtitle">Key Observations:</p>
                <ul>
                    <li>Once the user lights the stove, they check under the pan to see if the flames are there</li>
                    <li>Sometimes users mistakenly turn on the wrong burner</li>
                    <li>Once the flames are on, users don’t appear to have any other hesitation/issues with using the stove</li>
                    <li>At meal times, the stove becomes crowded with multiple pots/pans and multiple people trying to cook at the same time and bumping into each other or navigating around each other</li>
                </ul>
                <p class="subtitle">User Questions:</p>
                <ol>
                    <li>Do you ever have trouble using the stove?</li>
                    <li>What parts of the stove were immediately intuitive and which ones weren't, if any?</li>
                    <li>Are there things you wish you could do to better control or use the stove?</li>
                    <li>Does this stove differ from your expectations of what a typical stove is like?</li>
                    <li>On a scale of 1 to 10, how convenient do you think it is to use the stove?</li>
                </ol>
                <p class="subtitle">User Responses:</p>
                <ul>
                    <li>The stove's individual components are intuitive, but their relationships to each other are not necessarily (e.g. which knob corresponds to what burner)</li>
                    <li>The knob correspondance is not memorable, but is easy to understand through trial and error</li>
                    <li>Users note that each burner has different behavior with the same heat settings (e.g. one runs colder)</li>
                    <li>Generally, users think the stove is convenient as a stove, but think it has lesser or equal convenience compared to other stoves</li>
                </ul>
                </div>
            </div>
            <div className="section">
                <h3>Personas</h3>
                <p>With the data I collected, I was able to construct two personas based off the overall trends I saw and created empathy maps to describe them.</p>
                <h4>Rushed Roommate Austin:</h4>
                <ImageText img={austin} width={"50%"} content={austin_content} column={false} />
                <h4>Multitasking Marcy:</h4>
                <ImageText img={marcy} width={"50%"} content={marcy_content} column={false} />
            </div>
            <div className="section">
                <h3>Storyboarding</h3>
                <p>Lastly, I created a storyboard detailing a typical interaction that "Multitasking Marcy" would have with the kitchen stove.</p>
                <img src={storyboard} className="solo-img" alt="storyboard"></img>
            </div>
            </div>
        </div>
    )
}