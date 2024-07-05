// import React from 'react'
import { Link } from 'react-router-dom'
import s from './Footer.module.scss'

const Footer = () => {
    return (

        <>

            <div className={s.footer_top}>
                <div className="container">
                    <div className={s.top_menu}>
                        <button>
                            <img src="/rocket-icon.png" alt="icon" />
                            <p><span>1000</span> / 1000</p>
                        </button>

                        <button>
                            <img src="/rocket-icon2.png" alt="icon" />
                            <p>Boost</p>
                        </button>
                    </div>
                </div>
            </div>

            <footer className={s.footer}>
                <div className="container">



                    <div className={s.menu}>
                        <Link>
                            <img src="/axe.png" alt="icon" />
                            <p>Майнинг</p>
                        </Link>

                        <Link>
                            <img src="/axe.png" alt="icon" />
                            <p>Майнинг</p>
                        </Link>

                        <Link>
                            <img src="/axe.png" alt="icon" />
                            <p>Майнинг</p>
                        </Link>

                        <Link>
                            <img src="/axe.png" alt="icon" />
                            <p>Майнинг</p>
                        </Link>
                    </div>
                </div>
            </footer>

        </>

    )
}

export default Footer