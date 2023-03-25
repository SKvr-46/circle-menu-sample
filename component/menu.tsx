import styles from "styles/menu.module.scss"
import Link from "next/link"
import { useState } from "react"

export const Menu = () => {

    const [menuIsOpened, setMenuIsOpened] = useState(false)

    const toggleMenuIsOpened = () => {
        setMenuIsOpened(!menuIsOpened)
    }

    return (
        <div className={styles.container}>
            <div className={menuIsOpened ? styles.opened : styles.closed}>
                {/* open,closeでgridが変化するのが問題。open、closeの中にdiv要素を追加して、変化をゆるやかにできないか？ */}
                {/* gridレイアウトではない方法でできないか？ */}
                <button 
                className={styles.btn}
                onClick={toggleMenuIsOpened}
                >
                    <span className={styles.bar}></span>
                </button>
                <div className={styles.nav}>
                    <Link href="/">LinkA</Link>
                    <Link href="/">LinkB</Link>
                    <Link href="/">LinkC</Link>
                    <Link href="/">LinkD</Link>
                </div>

        </div>
        </div>
    )
}