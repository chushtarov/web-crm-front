import React from 'react'
import { GrClose } from "react-icons/gr";
import { useState } from 'react';
import style from './Students.module.css';
import { Collapsible } from 'react-collapsible';


const Student =({item}) => {
    const [openCard, setOpenCard] = useState(false)
  return (
    <div className={style.card_student}>
    <ul className={style.hover_effect_scale}>
      <li>
        <img className={style.img_student} src={`http://localhost:3000/img/${item.img}`} alt="" />
        <div className={style.dop_info_student}>     
          <button onClick={() => setOpenCard(!openCard)}>
            Подробнее
          </button>         
        </div>
      </li>
    </ul>
    {openCard ? (
  <div className={style.card_student_info}>
    <div className={style.close_card}>
      <button
        className={style.close}
        onClick={() => setOpenCard(!openCard)}
      >
        <GrClose />
      </button>
    </div>
    <img className={style.dop_block_img} src={`http://localhost:3000/img/${item.img}`} alt="" />
    <p className={style.student_text}>
     {item.text}
    </p>
  </div>
) : null}
  </div>
  )
}

export default Student