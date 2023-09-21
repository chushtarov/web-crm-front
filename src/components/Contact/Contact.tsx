import React from "react";
import style from "./Contact.module.css";
import img from "./logo.svg";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { BiMap } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";

const contact = () => {
  const coordinates = [43.324675, 45.692376];

  return (
    <div className={style.contact}>
      <div className={style.contact_container}>
        <div className={style.contact_content}>
          <div className={style.map_content}>
            <div className={style.contact_map}>
              <YMaps>
                <Map
                  height="429px"
                  width="100%"
                  defaultState={{ center: coordinates, zoom: 18 }}
                >
                  <Placemark
                    geometry={coordinates}
                    options={{
                      iconLayout: "default#image",
                      iconImageSize: [40, 40],
                      iconColor: "red",
                    }}
                  />
                </Map>
              </YMaps>
            </div>
            <div className={style.contacts}>
              <h1 className={style.contact_h1}>Контакты</h1>
              <div className={style.adress}>
                <div className={style.span_map}>
                  <BiMap />
                </div>
                <h2 className={style.adress_h2}>Адрес:</h2>
              </div>
              <p className={style.text_contact_one}>ЧР г.Грозный</p>
              <p className={style.text_contact_two}>Улица Трошева 7</p>
              <div className={style.contacts_two}>
                <div className={style.hors_work}>
                  <span className={style.hour_span}>
                    <MdOutlineWatchLater />
                  </span>
                  <h2 className={style.hour_h2}>Время работы:</h2>
                </div>
                <p className={style.text_contact_two}>пн-пт 10:00 - 18:00</p>
                <p className={style.text_contact_two}>сб-вс выходные</p>
              </div>
              <div className={style.contact_email}>
                <a className={style.email} href="">
                  intocode.gmail.com
                </a>
                <a className={style.email} href="">
                  8-800-700-97-10
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
