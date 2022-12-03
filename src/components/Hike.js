import logo from "../assets/tiger.svg";
import components from "../assets/components.png";
import { Link } from "react-router-dom";

export default function Hike() {
    return(
        <div className="page">
            <div className="logo" style={{maxWidth: '50px'}}>
                <Link to="/">
                <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <div className="page-content">
                <h1 className="page-title">Hiking To-Do List</h1>
                <h2>Creating a <a href="https://upsettiger123.github.io/development/">hiking to do list</a> with trails well known within driving distance from Brown's campus using an app that tracks states</h2>
                <div className="section">
                    <h3>Goal and Value of the Application</h3>
                    <p>The goal of this application is to serve as the user's to do list of hikes. The value for users is that this application can keep track of which hikes users have completed and how many miles they have already hiked. The filtering and sorting would be useful to view what hikes users want to complete and determine their next hike given different user preferences.</p>
                    <iframe src="https://upsettiger123.github.io/development/"></iframe>
                </div>
                <div className="section">
                    <h3 style={{marginBottom:"1rem"}}>Usability Principles</h3>
                    <div className="highlight-content">
                    <p class="subtitle">Layout</p>
                        <ul>
                            <li>The aggregator is displayed at the same time as the list item so that there is immediate feedback when a user checks off a hike as completed. This way, the (system) status of their to do list is always visible</li>
                            <li>The option to view completed hikes as tiles through the menu represents a second way to view some of the same information in the aggregator</li>
                        </ul>
                    <p class="subtitle">Interactivity</p>
                    <ul>
                        <li>The menu is also sitcky to facilitate user interaction since the menu remains close to where it needs to be used rather than requiring the user to scroll back up each time they want to change filter or sorting conditions</li>
                        <li>When no hikes are completed, there is a default tile displayed instructing the user of the purpose of the aggregator</li>
                        <li>When a hike is marked as complete, the button changes from outlined to filled in to display its change of status. On hover, a tooltip appears explaining what the button does (mark as complete or undo the action)</li>
                    </ul>
                    <p class="subtitle">Mental Models</p>
                    <ul>
                        <li>The colors of the banners with hike difficulty match user intuition that green is easy and red is hard</li>
                    </ul>
                    </div>
                </div>
                <div className="section">
                    <h3 style={{marginBottom:"1rem"}}>Organization of Components</h3>
                    <img src={components} className="solo-img" alt="components"></img>
                    <p>There are 3 main components outside of the App component: AggregatorBanner, FilteredList, and HikeTile. The App component includes both the AggregatorBanner and FilteredList (as well as a menu that isn't a component), and the FilteredList component filters/sorts the hike data and maps it to HikeTile components. The AggregatorBanner component displays the aggregated value (distance) and the names of hikes aggregated (marked as completed).</p>
                </div>
                <div className="section">
                    <h3 style={{marginBottom:"1rem"}}>How the User Triggers State Changes</h3>
                    <ul>
                        <li>Because App houses the menu, its state is what keeps track of what filters and sorting conditions are checked off/clicked through menu interaction (time, difficulty, added, sortBy). Its state also keeps track of the list of hikes (hikeList) aggregated and its aggregator value, distance</li>
                        <li>This hikeList state is a JSON which has a list of all the hikes (each hike is assinged an index that matches their index in hike-data.json and a 0 or 1 depending on if it is added to the aggregator) and the aggregate distance</li>
                        <li>The method to update hikeList is passsed through components until it hits HikeTile, which houses a button that triggers a change to the hikeList state.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}