import MusicList from "../Components/MusicList/MusicList";
import Hero from "../Components/Hero/Hero";
import styles from "./page.module.css"


export default function Home() {
    return (
        <div className={`${styles.main}`}>
            <Hero subtitle="Вы просматриваете /music - всю музыку"/>
            <h2 className={styles.wrapper} style={{textAlign: "center"}}>Вся музяка</h2>
            <div className={styles.wrapper}><MusicList/></div>
        </div>
        
    )
}