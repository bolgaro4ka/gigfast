import Styles from "./Header.module.css"
import Link from "next/link"

export default function Header() {
    return (
        <header className={Styles.header}>
            <h2 className={Styles.logo}>GigFast</h2>
            <div className={Styles.links}>
                <Link href="/login">О нас</Link>
                <Link href="/about">Альбомы</Link>
                <Link href="/contact">Контакты</Link>
                <Link href="/login">Админ-панель</Link>
            </div>
        </header>
    )
}