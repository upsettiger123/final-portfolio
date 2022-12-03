import '../ProjectTile.css'

export default function ProjectTile(props) {
    const item = props.item;
    return (
        <div className={props.home ? "project-tile" : "project-tile-noscale"} style={{height: props.height}}>
            <img src={item.img} style={{width: props.width}} alt={props.name}></img>
            <div className="tile-content">
                <h2>{item.name}</h2>
                <p>{item.descr}</p>
            </div>
        </div>
    )
}