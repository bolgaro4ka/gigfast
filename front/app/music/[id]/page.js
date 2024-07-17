
import AlbumList from "../../Components/AlbumPage/AlbumPage";
import Hero from "../../Components/Hero/Hero";
import Music from "../../Components/Music/Music";
import MusicList from "../../Components/MusicList/MusicList";
import styles from "./page.module.css"
import axios from "axios";
import { BASEURL, MUSIC, ALBUM, ADMIN }  from '../../config/config.js'
export default async function Home(props) {
  const data = await axios.get(`${MUSIC}${props.params.id}/`).then((response) => {return response.data}).catch((error) => {console.log(error)})


  return (
    <main className={`${styles.main}`}>
      <Hero subtitle={`Вы просматриваете /music/${props.params.id} - Музыка ${data.title}`}/>
      <div className={styles.wrapper}><Music text={data.title} src={data.file} pic={data.picture} /></div>
    </main>
  );
}