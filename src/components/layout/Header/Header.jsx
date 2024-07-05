// import React from 'react'
import s from './Header.module.scss'

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={s.module}>
            <div className="container">
                <nav className={s.nav}>
                    <Link to="/">
                        <img src="/logo.svg" alt="logo" />
                    </Link>

                    <Link>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.8982 18.6019C20.2562 18.96 20.2562 19.54 19.8982 19.8981C19.7191 20.0772 19.4846 20.1667 19.25 20.1667C19.0155 20.1667 18.781 20.0772 18.6019 19.8981L11 12.2962L3.39815 19.8981C3.21912 20.0772 2.98458 20.1667 2.75004 20.1667C2.5155 20.1667 2.28097 20.0772 2.10193 19.8981C1.74386 19.54 1.74386 18.96 2.10193 18.6019L9.70382 11L2.10193 3.39812C1.74386 3.04005 1.74386 2.45997 2.10193 2.1019C2.46 1.74383 3.04008 1.74383 3.39815 2.1019L11 9.70379L18.6019 2.1019C18.96 1.74383 19.5401 1.74383 19.8982 2.1019C20.2562 2.45997 20.2562 3.04005 19.8982 3.39812L12.2963 11L19.8982 18.6019Z" fill="#322228" />
                        </svg>
                    </Link>

                </nav>
            </div>
        </header>
    )
}

export default Header