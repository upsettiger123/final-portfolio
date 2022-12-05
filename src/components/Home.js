import ProjectTile from "./ProjectTile.js";
import logo from "../assets/tiger.svg";
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
                Hi - I'm Upset Tiger, a designer interested in the social aspect of technology. I like to explore ways to humanize users and UX and make designs that enrich people's lives rather than distract from them.
                </h1>
                {props.projectData.map((item, index) => ( 
                    <Link to={"/"+item.id}>
                        <ProjectTile item={item} home={true}></ProjectTile> 
                    </Link>
                ))}
            </div>
        </div>
    )
}