import logo from "../assets/tiger.svg";
import account from "../assets/account_lofi.png";
import matched from "../assets/matched_lofi.png";
import swipe from "../assets/swiping_lofi.png";
import creation_crit from "../assets/creation_crit.png";
import react_crit from "../assets/react_crit.png";
import settings_crit from "../assets/settings_crit.png";
import match_crit from "../assets/match_crit.png";
import compatibility_crit from "../assets/compatibility_crit.png";
import design from "../assets/design.png";
import { Link } from "react-router-dom";
import ImageText from "./ImageText"
import ProjectTile from "./ProjectTile"

const crit1 = <div className="crit-content">
    <h4>“Create Account & Profile is too long, cluttered, and boring!”</h4>
    <p>We added progress bars, colloquial and engaging language, and separated each question in account creation onto their own screen</p>
</div>

const crit2 = <div className="crit-content">
    <h4>“I don't understand why I can't keep messaging somebody after I react to their profile…”</h4>
    <p>We added a new Reaction sent! screen!</p>
</div>

const crit3 = <div className="crit-content">
    <h4>“I don't understand why I can't keep messaging somebody after I react to their profile…”</h4>
    <p>We added a new Reaction sent! screen!</p>
</div>

const crit4 = <div className="crit-content">
    <h4>“I don't understand what the pink colors mean or when I'm actually matched”</h4>
    <p>The app always has a strong color theme: blue when unmatched, pink when matched. Matching also permanently changes the heart profile-viewing button to a messaging button for your new match!</p>
</div>

const crit5 = <div className="crit-content">
    <h4>“I wish there was a more drastic change in UI when I'm matched”</h4>
    <p>We modified the main menu to view a combined profile featuring compatibility with your match to replace your own profile in unmatched mode.</p>
</div>

export default function Delight(props) {
    console.log(props.sketches)
    return(
        <div className="page">
            <div className="logo" style={{maxWidth: '50px'}}>
                <Link to="/">
                <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <div className="page-content">
                <h1 className="page-title">Delight Dating App</h1>
                <h2>Mocking up a solution to <a href="https://www.delightapp.co/" target="_blank">Delight's</a> startup concept&mdash;a mobile dating app for more serious relationships, so you only talk to one person at a time&mdash;and iteratively designing it</h2>
                <div className="section">
                    <h3>Sketches</h3>
                    <p>We began by brainstorming different interface ideas that emphasize different considerations related to common mental models and conceptual goals.</p>
                    {props.sketches.map((item, index) => ( 
                        <ProjectTile item={item} home={false} height={'35rem'}></ProjectTile> 
                    ))}
                </div>
                <div className="section">
                    <h3>Low Fidelity Wireframes</h3>
                    <p>We wanted to emphasize the one to one matching that is central to Delight’s mission. After reviewing our four different sketched designs, we created one final low fidelity wireframe in Balsamiq and annotated our design decisions within it.</p>
                    <div className="rowWrap" id="lofi">
                        <figure>
                            <img src={account} alt="account lofi"></img>
                            <figcaption>Landing Page & Account Creation</figcaption>
                        </figure>
                        <figure>
                            <img src={swipe} alt="swiping lofi"></img>
                            <figcaption>Interaction With Other Users on Delight</figcaption>
                        </figure>
                        <figure>
                            <img src={matched} alt="matched lofi"></img>
                            <figcaption>Matched Notification & Enabled Messaging</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="section">
                    <h3>Group Critique</h3>
                    <p>The HiFi prototype shown above is after we implemented changes from crit feedback, so to show our iteration, we’ve included updated versions of our low fidelity prototypes below (and when not applicable, we have our HiFi). In the LoFi Prototype section above, we have the first draft before feedback.</p>
                    <div className="column">
                        <ImageText img={creation_crit} width={"45%"} content={crit1} column={false} tileWidth={"70%"}></ImageText>
                        <ImageText img={react_crit} width={"45%"} content={crit2} column={false} tileWidth={"70%"}></ImageText>
                        <ImageText img={settings_crit} width={"45%"} content={crit3} column={false} tileWidth={"70%"}></ImageText>
                        <ImageText img={match_crit} width={"45%"} content={crit4} column={false} tileWidth={"70%"}></ImageText>
                        <ImageText img={compatibility_crit} width={"45%"} content={crit5} column={false} tileWidth={"70%"}></ImageText>
                    </div>
                </div>
                <div className="section">
                    <h3>High Fidelity Prototypes</h3>
                    <p>We created a <a href="https://www.figma.com/file/GSsBgUN6PHhHouCgbGh1I2/Delight?node-id=0%3A1" target="_blank">final version of the product</a> where we made screens for 5 different workflows and go through the interactions as a new user.</p>
                    <img src={design}></img>
                </div>
                <div className="section">
                    <h3>User Testing</h3>
                    <p>
                        Our interface’s intended functionality is first and foremost to allow our users to match and message with others as well as unmatch. Our testing instructions were as follows: "Imagine you’re a woman seeking both men and women on a brand new dating app. Create a profile and try to match with both users that are available to match with. Think aloud as you go through the app, especially when you find something confusing."
                        <br/><br/>
                        Most of the results were in line with our expectations. All subtasks were successfully done, but there were some confusions. You can also view the user testing <a href="https://upsettiger123.github.io/iterative/#testing">videos</a>.
                        </p>
                    <div className="highlight-content">
                <p class="subtitle">Task: Successfully Match With Someone</p>
                <ol>
                    <li>Create a profile (selecting desired buttons, dropdowns, etc)</li>
                    <li>React to other users’ profiles</li>
                    <li>Explore the matched profile page and unmatch with your match [5-point rating scale: Very difficult to Very easy]</li>
                </ol>
                <p class="subtitle">Post Test Questions:</p>
                <ol>
                    <li>What frustrated you most about the matching/unmatching process?</li>
                    <li>If you had a magic wand, how would you improve this site?</li>
                    <li>What did you like about the site?</li>
                    <li>Does this stove differ from your expectations of what a typical stove is like?</li>
                    <li>How likely are you to recommend this site to a friend or colleague (0=Not at all likely, and 10=Very likely)?</li>
                </ol>
                </div>
                </div>
            </div>
        </div>
    )
}