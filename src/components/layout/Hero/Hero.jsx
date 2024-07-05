import React from 'react'
import s from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.wrap}>
          <h2 className={s.sum}>
            <img src="/public/sum-icon.png" alt="icon" />
            <span>10533</span>
          </h2>

          <div className={s.rank}>
            <div className={s.rank_top}>
              <h3>ADMINISTRATOR</h3>

              <p className={s.rank_level}>
                Уровень <span>1/10</span>
              </p>
            </div>

            <div className={s.rank_progress}>
              <div></div>
            </div>
          </div>

          <div className={s.coin}>
            <img src="/coin.png" alt="coin" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero