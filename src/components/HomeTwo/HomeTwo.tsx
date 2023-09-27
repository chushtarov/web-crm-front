import React from 'react';
import style from './HomeTwo.module.css';

const HomeTwo = () => {
  return (
    <div className={style.home}>
        <div className={style.home_container}>
            <div className={style.home_content}>
                <h1 className={style.home_h1}>Как проходит обучение</h1>
                <h2 className={style.home_h2}>Курс «Фронтенд-разработчик» состоит из учебных модулей с уроками и проектами</h2>
                <div className={style.block_content}>
                    <div className={style.block_content_text}>
                       <div>
                       <h3 className={style.home_h3_content}>В каждом уроке</h3>
                        <p className={style.home_p_content}>теория, тесты на закрепление изученного и практика прямо в браузере</p>
                       </div>
                       <div>
                        <h3 className={style.home_h3_content}>1-2 раза в неделю —</h3>
                        <p className={style.home_p_content}>встречи с наставником: вебинары, сессии лайвкодинга</p>
                       </div>
                    </div>
                    <div className={style.block_content_text_2}>
                       <div>
                       <h3 className={style.home_h3_content}>Все онлайн-встречи сохраняем в записи —</h3>
                        <p className={style.home_p_content}>можно пересматривать</p>
                       </div>
                       <div>
                        <h3 className={style.home_h3_content}>Наставники и кураторы</h3>
                        <p className={style.home_help}>помогают в учебном процессе</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTwo