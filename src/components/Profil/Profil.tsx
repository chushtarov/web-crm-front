import React from "react";
import style from "./Profil.module.css";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiSolidUser, BiDotsVerticalRounded } from "react-icons/bi";



const Profil = () => {
  return (
    <div className={style.profil}>
    <div className={style.groups_content}>
      <div className={style.group}>
        <span className={style.one}>
          <HiMiniUserGroup />
        </span>
        <p>Группа 1</p>
      </div>
      <div className={style.group}>
        <span className={style.two}>
          <HiMiniUserGroup />
        </span>
        <p>Группа 2</p>
      </div>
      <div className={style.group}>
        <span className={style.three}>
          <HiMiniUserGroup />
        </span>
        <p>Группа 3</p>
      </div>
    </div>
    <div className={style.chat_users}>
      <div className={style.active_user}>
        <div className={style.current_user}>
          <span className={style.icon_user}>
            <BiSolidUser />
          </span>
        </div>
        <h3>User</h3>
        <div className={style.dop_info}>
          <button className={style.btn_profil}>
              <p className={style.dots}><BiDotsVerticalRounded/></p>              
          </button>
        </div>
      </div>
      <h2 className={style.user_h2}>Чат с пользователем...</h2>
      <div className={style.chat}>
          <div className={style.user_1}>Привет</div>
          <div className={style.user_2}>Привет</div>
      </div>
      <div className={style.dispatch}>
          <input className={style.chat_input} placeholder="Введите сообщение" type="text" />
          <button className={style.send}>Отправить</button>
      </div>
    </div>
    </div>
  )
}

export default Profil