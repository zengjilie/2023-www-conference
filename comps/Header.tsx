import { useState } from 'react';
import { HiOutlineX, HiOutlineMenuAlt3, HiChevronRight } from 'react-icons/hi';
import Link from 'next/Link';

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [levelTowMenu, setLevelTwoMenu] = useState("");

  const navLevelOneHandler = (currentMenu: string) => {
    if (currentMenu === levelTowMenu) {
      setLevelTwoMenu("");
    } else {
      setLevelTwoMenu(currentMenu);
    }
  }

  return (
    <>
      <nav className="header">
        <a href='./index.html'>
          <div className="header-logo">
            <img src="./www-logo.svg" alt="" width={180} />
          </div>
        </a>

        <a href="#"
          className={showNav ? "header-toggle hidden" : "header-toggle"}
          onClick={() => {
            setShowNav(!showNav);
            document.body.style.overflowY = 'hidden';
          }}>
          <HiOutlineMenuAlt3 />
        </a>

        <a href="#"
          className={showNav ? "header-toggle" : "header-toggle hidden"}
          onClick={() => {
            setShowNav(!showNav);
            document.body.style.overflowY = 'scroll';
          }}>
          <HiOutlineX />
        </a>

        <div className={showNav ? "background" : "background hidden"} ></div>

        <div className={showNav ? "nav" : "nav hidden"}>

          <div className='header-logo'>
            {/* <img src="/www-logo.svg" alt="" width={180} /> */}
          </div>

          <nav className='nav-level-one'>

            <ul>
              <li className="nav-option" onClick={() => navLevelOneHandler("menu-1")}>
                <span>Calls</span>
                <HiChevronRight />
              </li>

              {/* <li className="nav-option" onClick={() => navLevelOneHandler("menu-2")}>
                <span>Calls 2</span>
                <HiChevronRight />
              </li> */}

            </ul>
          </nav>

          <nav className='nav-level-two' >
            {
              (() => {
                if (levelTowMenu === "menu-1") {
                  return (
                    <ul id="menu-1">
                      <li className="nav-option nav-link">
                        {/* <Link href="./research-track.html"> */}
                        <a href='./research-track.html'>
                          <span>Research Track</span>
                        </a>
                        {/* </Link> */}
                      </li>
                    </ul>
                  )
                } else if (levelTowMenu === "menu-2") {
                  return (
                    <>
                    </>
                  )
                }
              })()
            }
          </nav>
        </div>
      </nav>

    </>
  )
}

export default Header