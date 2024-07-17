
import axios from "axios";
import styles from "./AlbumList.module.css"
import Album from "../Album/Album";
import { BASEURL, MUSIC, ALBUM }  from '../../config/config.js'


export default async function AlbumList(props) {
    
    
    if (!props.category) {
        var data = await axios.get(`${ALBUM}`)
            .then((response) => {
                return (response.data)
        })
            .catch((error) => {
                console.log(error)
            })
    } else {
        var data = []

        for (let i of props.category) {
            let temp = await axios.get(`${ALBUM}${i}/`)
                .then((response) => {
                    return (response.data)
            })
                .catch((error) => {
                    console.log(error)
            })
            data.push(temp)
        }
    }


    return (
    <div className={styles.albumList}>
        {data ? <>{data.map((element) => <div className={styles.albumCard} key={element.id}><Album img={element.picture} title={element.title} text={element.text} date={element.date} key={element.id} id={element.id} like={element.likes} songs={element.songs}/></div>)}</> : <p>Загрузка</p>}
    </div>
    )
} 




