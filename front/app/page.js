import Image from "next/image";
import styles from "./page.module.css";
import Music from "./Components/Music/Music";
import MusicList from "./Components/MusicList/MusicList";
import AlbumList from "./Components/AlbumList/AlbumList";

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.wrapper}`}>
      <AlbumList/>
    </main>
  );
}
