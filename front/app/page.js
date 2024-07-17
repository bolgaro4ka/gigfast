import AlbumList from "./Components/AlbumList/AlbumList";
import styles from "./page.module.css";
import Hero from "./Components/Hero/Hero";
import { BASEURL, MUSIC, ALBUM, ADMIN, CATEGORY }  from './config/config.js'

export default async function Home() {
  const categories = await fetch(`${CATEGORY}`).then((response) => {return response.json()})

  
  

  return (
    <main className={`${styles.main}`}>
        <Hero/>

        <div className={styles.wrapper}>{categories ? <>{categories.map((element) => <div key={element.id}><h2 key={element.id} className={styles.h2}>{element.name}</h2><AlbumList category={element.albums} key={element.id}/></div>)}</> : <p>Загрузка</p>}</div>
    </main>
  );
}
