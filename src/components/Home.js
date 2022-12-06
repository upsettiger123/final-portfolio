import ProjectTile from "./ProjectTile.js";
import logo from "../assets/tiger.svg";
import down from "../assets/chevron-down.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home(props) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <div className="home">
                <h1 className="intro">
                Hi - I'm Upset Tiger, a designer interested in the social aspect of technology. I wanted to explore ways to humanize users and UX and make/implement designs that enrich people's lives rather than distract from them. Follow along on my journey through these 4 projects!
                </h1>
                {props.projectData.map((item, index) => ( 
                    <div className="tile-group">
                    <Link to={"/"+item.id}>
                        <ProjectTile item={item} home={true}></ProjectTile> 
                    </Link>
                    {index < props.projectData.length - 1 ? <img src={down} className="chevron" alt="down"></img> : <></>}
                    </div>
                ))}
            </div>
        </div>
    )
}