import React, { ChangeEvent, FormEvent, useEffect } from "react";
import { useState } from "react";
import style from "./ListStudent.module.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchUsers } from "../../features/usersSlice";
import { authSignUp } from "../../features/signUpSlice";

const Student = () => {
  const user = useSelector((state: RootState) => state.usersSlice.users);
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [group, setGroup] = useState("")

  const handleAddStud = (e: FormEvent)=> {
    e.preventDefault();
    setGroup("")
    setLogin("")
    setPassword("")
    dispatch(authSignUp({_id: "", login, password, group}))
  }
  const handleGroup = (e: ChangeEvent<HTMLInputElement>) => {
    setGroup(e.target.value)
  }

  const handleLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const result = user.filter((item) => {
    return item.login.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log(fetchUsers);

  return (
    <div className={style.student}>
      <div className={style.student_content}>
        <div className={style.list_student}>
          <div className={style.close_list}>
            <h2>Студенты</h2>
            <div>
              <div className={style.list_content}>
                <button onClick={() => setOpen(!open)} className={style.add}>
                  <AiOutlineUsergroupAdd />
                </button>
                {open ? (
                  <form onSubmit={handleAddStud} className={style.modal_add}>
                    <h2 className={style.add_student}>
                      Добавление нового студента
                      <button onClick={() => setOpen(!open)} className={style.close_btn}>х</button>
                    </h2>
                    <div className={style.student_group_name}>
                      <div>
                        <p>Группа</p>
                        <input
                        value={group}
                        onChange={handleGroup}
                          placeholder="Группа"
                          className={style.input}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className={style.student_registor}>
                      <div>
                        <p>Логин</p>
                        <input
                            value={login}
                            onChange={handleLogin}
                          placeholder="Логин"
                          className={style.input}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className={style.student_password}>
                      <div>
                        <p>Пароль</p>
                        <input
                            value={password}
                            onChange={handlePassword}
                          placeholder="Password"
                          className={style.input}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className={style.student_button}>
                      <button type="submit" className={style.student_btn}>Добавить</button>
                    </div>
                  </form>
                ) : null}
                <input
                  className={style.search_student}
                  placeholder="Search"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={style.students}>
            {result.map((item, index) => {
              return item.isStudent === true ? (
                <div className={style.students_one}>
                  <p className={style.student_number}>
                    {search === "" ? index : index + 1}
                  </p>
                  <p className={style.student_name}>{item.login}</p>
                  <p className={style.student_group}>{item.group}</p>
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
