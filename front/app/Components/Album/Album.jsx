import Style from "./Album.module.css"
import Link from "next/link"


export default function Album(props) {

    return (
        <Link className={Style.album} href={`/album/${props.id}`}>
            <img src={props.img} alt="" />
            <div>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <p>{props.date}</p>
            </div>
            
        </Link>
    )
}