import Album from "../Album/Album";
import axios from "axios";
import Style from "./AlbumList.module.css"


export default async function AlbumList(props) {
    const data = await axios.get(`http://127.0.0.1:8000/api/v1/album/${props.id ? props.id : null}/`)
        .then((response) => {
            return (props.id ? [response.data] : response.data)
        })
        .catch((error) => {
            console.log(error)
        })



    // console.log(data)
    return (
        <div className={Style.musicList}>
            {data ? <>{data.map((element) => <Album img={element.picture} title={element.title} text="some text" date={element.date} key={element.id} id={element.id}/>)}</> : <p>Загрузка</p>} 
        </div>
    )
}