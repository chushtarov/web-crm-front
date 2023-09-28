import React from 'react'
import style from './Group.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'

const Group = () => {
const group = useSelector((state: RootState) => state.chat.chats)
const dispatch = useDispatch<AppDispatch>()
  return (
    <div className={style.group}>
        <div className={style.group__item}>
            <div className={style.item__img}>
                i
            </div>
            <div>
            <p className={style.name}>Bootcamp 17</p>
            <p className={style.mentor}>Наставники: Magomed, Zelim</p>
            <p className={style.lection}>Лектор: Альви</p>
            <p className={style.student}>количество студентов: 14</p>

            </div>
        </div>
    </div>
  )
}

export default Group