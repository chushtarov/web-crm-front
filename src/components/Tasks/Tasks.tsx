import React from 'react'
import style from './Tasks.module.css'

const Tasks = () => {
  return (
    <div className={style.tasks}>
        <button className={style.item__task}>1. HTML</button><button></button><diva></diva>
        <button className={style.item__task}>2. CSS ВЕРСТКА МАКЕТА</button>
        <button className={style.item__task}>3. JS ОСНОВЫ</button>
        <button className={style.item__task}>4. MongoDb</button>
        <button className={style.item__task}>5. DOM-дерево</button>
    </div>
  )
}

export default Tasks