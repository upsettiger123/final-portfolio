export default function ImgSeq(props) {
    return (
    <div className="img-seq">
          {props.imgs.map((img) => <img src={img} alt="sequence"style={{width: (100/props.imgs.length).toString()+"%"}}/>)}          
    </div>
    )
}