import React from 'react';
import style from './Home.module.css';
import img from './tild3763-6136-4135-b939-303264396137___2_1 1.png';
import img_1 from './ewrwer.svg';
import img_2 from './red.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={style.home}>
        <div className={style.home_container}>
            <div className={style.home_content}>
                <div className={style.home_about}>
                    <div className={style.home_promotion}>
                        <p className={style.home__well}>Курс «Фронтенд-разработчик» с нуля до трудоустройства <span className={style.home_span}>за 4 месяцев</span>
                        </p>
                        <img className={style.home_garanty} src={img_1} alt="error" />
                        <img className={style.akcia_img} src={img_2} alt="error" />
                        <p className={style.akcia}>Акция</p>
                    </div>
                    <h2 className={style.home_profes}>Профессия</h2>
                    <h1 className={style.home_frontend}>«Фронтенд- <br/>разработчик»</h1>
                    <p className={style.home_info}>Научитесь программировать на языке JavaScript и создавать <br/>пользовательские интерфейсы сайтов и приложений</p>
                    <button className={style.home_btn}>
                        <Link to={'/info'} className={style.home_link}>Начать учиться</Link>
                    </button>
                </div>
                <div className={style.home_img}>
                    <p className={style.home_img_content}>Трудоустроим <br/> или вернем деньги</p>
                    <img className={style.glav_img} src={img} alt="error" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home