import Music from "../Music/Music";
import axios from "axios";
import Style from "./MusicList.module.css"


export default async function MusicList(props) {
    const data = await axios.get("http://127.0.0.1:8000/api/v1/music/")
        .then((response) => {
            console.log(response.data[0])
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })



    // console.log(data)
    return (
        <div className={Style.musicList}>
            {data ? <>{data.map((element) => <Music text={element.title} src={element.file} pic={element.picture} key={element.id}/>)}</> : <p>Загрузка</p>} 
        </div>
    )
}