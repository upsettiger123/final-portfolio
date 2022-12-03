import logo from "../assets/tiger.svg";
import hack1 from "../assets/hack1.png";
import hack2 from "../assets/hack2.png";
import hack3 from "../assets/hack3.png";
import { Link } from "react-router-dom";
import ImgSeq from "./ImgSeq"

export default function Hack() {
    return(
        <div className="page">
            <div className="logo">
                <Link to="/">
                <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <div className="page-content">
                <h1 className="page-title">Hack @ Home</h1>
                <h2>Creating a virtual home to gather and host information for a hackathon over the Covid-19 pandemic</h2>
                <div className="section">
                    <h3>Context</h3>
                    <p>Problem: Over the pandemic, it was difficult to plan large virtual gatherings that actually felt engaging and like a gathering, but Brown's full stack club had desires to host their first ever hackathon.</p>
                    <p>Solution: Recreate an actual place of gathering using 3D modeling and interaction. Create a novel experience that people will actually like to interact with and make their hackathon experience memorable while still acknowledging the fact that everyone had to stay at home.</p>
                    <p>With my co-tech lead, we coded all the user interaction with models that a design team created. Here I will explain my contributions to the project.</p>
                </div>
                <div className="section">
                    <h3 style={{marginBottom:"1rem"}}>Description</h3>
                    <p>A 9-walled home, a wall per section of the traditional <a href="https://fullstackatbrown.github.io/hack-at-home/">2D website</a>, where the side in view can be iterated through with arrow clicks. Please click through or view the <a href="https://fullstackatbrown.github.io/hack-at-home/home.html">3D home</a> directly on a separate tab!</p>
                    <iframe style={{height: "40rem"}} src="https://fullstackatbrown.github.io/hack-at-home/home.html"></iframe>
                </div>
                <div className="section">
                    <h3 style={{marginBottom:"1rem"}}>User Interactability</h3>
                    <h4>Hovering & Clicking:</h4>
                    <ImgSeq imgs={[hack2, hack3]}></ImgSeq>
                    <p>The user is essentially a camera that can interact with the scene. Any object they can interact with will highlight on hover, indicating that they are clickable. 
                        <br/><br/>
                        When clicked, one of these results happen with easing to create a natural feel to the movement:</p>
                        <ul>
                            <li>The camera zooms or unzooms into the object</li>
                            <li>Hidden information will appear</li>
                            <li>A tab will open directing the user to a link</li>
                        </ul>
                </div>
                <div className="section">
                    <div className="highlight-content">
                        <p className="subtitle">Mental Models</p>
                        <ul>
                        <li>We wanted to stay within user's current mental models of very simple online games in terms of camera movement and finding interactive items</li>
                        </ul>
                        <p className="subtitle">Usability</p>
                        <ul>
                        <li>It was important to have the proper affordances to make navigation easy. The arrows indicate buttons that switch walls in the direction of pointing. Things that are interactive communicate that both through highlighting/change of color and change of cursor. When text is visible but too small, it suggests that it is zoomable.</li>
                        <li>Each wall has a different color to differentiate</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}