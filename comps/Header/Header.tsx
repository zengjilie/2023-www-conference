import { useState } from 'react';
import { HiOutlineX, HiOutlineMenuAlt3, HiChevronRight } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';

import styles from './Header.module.scss';

function Header() {

    return (
        <div className={styles.header}>
            <nav className={styles.headerWrapper}>
                <a href='./index.html'>
                    <div className={styles.headerLogo}>
                        <img src="../../www-logo2.svg" alt="" width={180} />
                    </div>
                </a>

                <nav className={styles.headerList}>
                    <ul className={styles.headerLevelOne}>
                        <li className={styles.headerOptionOne}>
                            <span>Calls</span>
                            <div className={styles.headerIcon}>
                                <AiFillCaretDown />
                            </div>
                        </li>

                        <ul className={styles.headerLevelTwo}>
                            <a href='./research-track.html' className={styles.headerOptionTwo}>
                                Research Tracks
                            </a>
                        </ul>
                    </ul>

                    {/* <ul className={styles.headerLevelOne}>
                        <li className={styles.headerOption}>
                            <span>Calls</span>
                        </li>

                        <ul className={styles.headerLevelTwo}>
                            <li className={styles.headerOption}>
                                <span>Research Tracks</span>
                            </li>
                        </ul>
                    </ul> */}

                </nav>

                {/* <div className={styles.menuIcon}>
                <HiOutlineMenuAlt3/>
            </div> */}

                {/* <nav className={styles.header}></nav> */}
            </nav>
        </div>
    )
}

export default Header