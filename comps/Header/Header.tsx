import { useState } from 'react';
import { HiOutlineX, HiOutlineMenuAlt3, HiChevronRight } from 'react-icons/hi';
import styles from './Header.module.scss';

function Header() {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <nav className={styles.header}>
                <a href='./index.html'>
                    <div className={styles.headerLogo}>
                        <img src="../../www-logo.svg" alt="" width={180} />
                    </div>
                </a>

                <nav className={styles.headerList}>
                    <ul >
                        <li>
                            <span>Calls</span>
                            <ul>
                                <li></li>
                            </ul>
                        </li>
                    </ul>
                </nav>



            </nav>
        </>
    )
}

export default Header