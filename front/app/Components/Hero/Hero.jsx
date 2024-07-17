import styles from "./Hero.module.css"


export default function Hero(props) {
    return (<section className={styles.hero}>
        <div></div>
        <div>
          <h1>Gigfast</h1>
          <p>Крутой сайт для крутых фонков</p>
          <p className={styles.subtitle}>{props.subtitle}</p>
        </div>
        <div><p className={styles.play}>▼ Пролистните ▼</p></div>
        
      </section>)
}