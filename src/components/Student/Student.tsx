import React from "react";
import { useState } from "react";
import style from "./Student.module.css";
import { RiCloseCircleLine } from 'react-icons/ri'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'

const Student = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.student}>
      <div className={style.student_container}>
        <div className={style.student_content}>       
            <div className={style.list_student}>
                  <div className={style.close_list}>
                    
                    <h2>Студенты</h2>
                   <div>
                    <div className={style.list_content}>
                      <button onClick={() => setOpen(!open)} className={style.add}><AiOutlineUsergroupAdd/></button>
                      {open ? <div className={style.add_stud}>
                        <div className={style.block_stud}>
                        <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '20px', marginTop: '20px'}}><button className={style.close_modal} onClick={() => setOpen(!open)}><RiCloseCircleLine/></button></div>
                        <h2 className={style.add_student}>Добавление нового студента</h2>
          <div className={style.student_group_name}>
            <div>
            <p>Группа</p>
            <input placeholder="Группа" className={style.input_group} type="text" />
            </div>
            <div>
            </div>
          </div>
          <div className={style.student_registor}>
            <div>
              <p>Логин</p>
              <input placeholder="Логин" className={style.input_login} type="text" />
            </div>
            </div>
            <div className={style.student_password}>
            <div>
              <p>Пароль</p>
              <input placeholder="Password" className={style.input_login} type="text" />
            </div>
            </div>
            <div className={style.add_btn}>
            <button className={style.adds}>Добавить</button>
            </div>
            </div>
                      </div> : null}
                      <input className={style.search_student} placeholder="Search" type="text" />
                  </div>
                   </div>
                  </div>
                  <div className={style.students}>
                    <div className={style.students_one}>
                      <p className={style.student_number}>1</p>
                      <p className={style.student_name}>name...</p>
                      <p className={style.student_group}>bootcamp#18</p>
                    </div>
                  </div>                
                </div>
            </div>
        </div>
      </div>
  );
};

export default Student;
