
import AlbumList from "../../Components/AlbumList/AlbumList";
import MusicList from "../../Components/MusicList/MusicList";
import styles from "./page.module.css"

export default function Home(props) {
  return (
    <main className={`${styles.main} ${styles.wrapper}`}>
      <MusicList id={props.params.id}/>
    </main>
  );
}