"use client"
import Styles from "./Footer.module.css"
import Link from "next/link"
import { BASEURL, MUSIC, ALBUM, ADMIN }  from '../../config/config.js'

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <h2 className={Styles.logo}>GigFast</h2>
            <div className={Styles.links}>
                <button onClick={() => alert('За бесплатно сделал челику сайт: Федосов Никита \n| tg https://t.me/papyas_07 | github https://github.com/bolgaro4ka |\n\n В любом случае мне надо было опробовать React и Next.js ')} className={Styles.button}>О нас</button>
                <Link href="/album">Альбомы</Link>
                <Link href="/music">Вся музыка</Link>
                <Link href="https://github.com/bolgaro4ka">GitHub и контакты</Link>
                <Link href={ADMIN}>Админ-панель</Link>
            </div>
        </footer>
    )
}