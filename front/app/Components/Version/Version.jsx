import styles from './Version.module.css'


export default function Version() {
    return (
        <div className={styles.version}>
            <p>Версия: 1.0.0 <a href="https://github.com/bolgaro4ka" style={{textDecoration: "underline"}}>Bolgaro4ka</a> Build (BB) - 2024 | Все права защищены</p>
        </div>
    )
}