import '../ImageText.css'

export default function ImageText(props) {
    return (
        <div className="img-tile" style={{flexDirection: props.column ? "column" : "row", width: props.tileWidth ? props.tileWidth : "auto"}}>
            <img src={props.img} style={{width: props.width}} alt="tile"></img>
            <div className={props.column ? "img-content-col" : "img-content"} style={{width: props.column ? props.width : "auto", height: props.height ? props.height :"auto"}}>
                {props.content}
            </div>
        </div>
    )
}