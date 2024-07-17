import AlbumList from "../Components/AlbumList/AlbumList";
import Hero from "../Components/Hero/Hero";
import styles from "./page.module.css"


export default function Home() {
    return (
        <div className={`${styles.main}`}>
            <Hero subtitle="Вы просматриваете /album - все альбомы"/>
            <h2 className={styles.wrapper} style={{textAlign: "center"}}>Все альбомы</h2>
            <AlbumList className={styles.wrapper}/>
        </div>
        
    )
}