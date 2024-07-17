
import Music from "../Music/Music";
import axios from "axios";
import Style from "./MusicList.module.css"
import { BASEURL, MUSIC, ALBUM, ADMIN }  from '../../config/config.js'

export default async function MusicList(props) {
    var ids = props.ids
    if (props.ids) {
        
        var data = []
        for (let i of ids) {
            let temp = await axios.get(`${MUSIC}${i}/`).then((response) => {return response.data}).catch((error) => {console.log(error)})

        data.push(temp)
    }
    } else {
        var data = await axios.get(`${MUSIC}`).then((response) => {return response.data}).catch((error) => {console.log(error)})

    }
    



    console.log(data)
    return (
        <div className={Style.musicList}>
            {data ? <>{data.map((element) => <Music text={element.title} src={element.file} pic={element.picture} key={element.id}/>)}</> : <p>Загрузка</p>} 
        </div>
    )
}