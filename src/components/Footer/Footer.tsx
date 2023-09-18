import React from 'react';
import style from './Footer.module.css';
import img from './logo.svg';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { BiMap } from 'react-icons/bi';
import { MdOutlineWatchLater } from 'react-icons/md'

const Footer = () => {

  const coordinates = [43.324675, 45.692376];

  return (
    <div className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_content}>
          <div className={style.map_content}>
            <div className={style.footer_map}>
            <YMaps>
              <Map height="429px"  width="100%" defaultState={{ center: coordinates, zoom: 17 }}>
                <Placemark geometry={coordinates} options={{iconLayout: 'default#image', iconImageSize: [20, 20], iconColor: 'red'}}/>
              </Map>
            </YMaps>
            </div>
            <div className={style.contacts}>
                <h1 className={style.contact_h1}>Контакты</h1>
                <div className={style.adress}>
                  <div className={style.span_map}><BiMap/></div>
                  <h2 className={style.adress_h2}>Адрес:</h2>
                </div>
                <p className={style.text_footer_one}>Грозный</p>
                <p className={style.text_footer_two}>Улица Трошева 7</p>
                <div className={style.contacts_two}>
                  <div className={style.hors_work}>
                  <span className={style.hour_span}><MdOutlineWatchLater/></span>
                  <h2 className={style.hour_h2}>Время работы:</h2>
                  </div>
                  <p className={style.text_footer_two}>пн-чт 10:00 - 18:00</p>
                </div>
            </div>
          </div>
        </div>
         <div className={style.footer_bottom}>
          <div className={style.footer_bottom_content}>
            <div className={style.footer_logo}>
              <img className={style.into_logo} src={img} alt="error" />
            </div>
            <ul className={style.footer_ul}>
              <li>
                <a className={style.footer_nav} href="">Каталог</a>
              </li>
              <li>
                <a className={style.footer_nav} href="">О компании</a>
              </li>
              <li>
                <a className={style.footer_nav} href="">Частые вопросы</a>
              </li>
              <li>
                <a className={style.footer_nav} href="">Контакты</a>
              </li>
            </ul>
            <div className={style.footer_email}>
            <a className={style.email} href=''>intocode.gmail.com</a>
            <a className={style.email} href=''>8-800-700-97-10</a>
          </div>
          </div>
        </div> 
        
      </div>     
    </div>
  )
}

export default Footer
