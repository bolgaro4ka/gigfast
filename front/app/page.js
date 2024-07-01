import Image from "next/image";
import styles from "./page.module.css";
import Music from "./Components/Music/Music";
import MusicList from "./Components/MusicList/MusicList";

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.wrapper}`}>
      <MusicList/>
    </main>
  );
}
