
import AlbumPage from "../../Components/AlbumPage/AlbumPage";
import MusicList from "../../Components/MusicList/MusicList";
import styles from "./page.module.css"

export default function Home(props) {
  return (
    <main className={`${styles.main} ${styles.wrapper}`}>
      <AlbumPage ida={props.params.id}/>
    </main>
  );
}