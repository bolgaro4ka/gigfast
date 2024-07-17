import Album from "../Album/Album";
import axios from "axios";
import Style from "./AlbumPage.module.css"
import Music from "../Music/Music";
import MusicList from "../MusicList/MusicList";
import { BASEURL, MUSIC, ALBUM }  from '../../config/config.js'


export default async function AlbumPage(props) {
    const data = await axios.get(`${ALBUM}${props.ida ? props.ida : null}/`)
        .then((response) => {
            return (props.ida ? [response.data] : response.data)
        })
        .catch((error) => {
            console.log(error)
        })


    var isError = false

    try {
        let check = data[0].songs
    } catch (error) {
        isError = true
    }
    return (
        <>
            {isError ? <p>Такого альбома нет</p> : <div>
                <div className={Style.musicList}>
                    
                    <div className={Style.musicWrapper}>
                        {data ? <>{data.map((element) => <Album img={element.picture} title={element.title} text={element.text} date={element.date} key={element.id} id={element.id} like={element.likes}  songs={element.songs}/>)}</> : <p>Загрузка</p>} 
                    </div>
                    <div className={Style.line}></div>
                </div>

                <MusicList ids={data[0].songs}/>
            </div>}
        </>
    )
}