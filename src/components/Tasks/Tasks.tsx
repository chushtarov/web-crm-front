import React, { useEffect, useState } from "react";
import style from "./Tasks.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { oneUser } from "../../features/usersSlice";
import { TbLock, TbLockOpen } from "react-icons/tb";
import { Link } from "react-router-dom";
const Tasks = () => {
  const user = useSelector((state: RootState) => state.usersSlice.oneUser);
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  useEffect(() => {
    dispatch(oneUser());
  }, []);


  return (
    <div className={style.tasks}>
      <div className={open ? style.item__task2 : style.item__task}>
        <button className={open ? style.button2 : style.button}><Link className={style.Link}to="https://www.youtube.com/results?search_query=html">1. HTML. CSS-первое касание. Figma. Адаптивная Верстка</Link></button>
        {user.isAdmin ? (
          <button className={style.button} onClick={() => setOpen(!open)}>
            {open ? <TbLockOpen /> : <TbLock />}
          </button>
        ) : null}
      </div>
      <div className={!open ? style.item__task2 : style.item__task}>
        <button className={!open2 ? style.button2 : style.button}>2. Java script, основы, первая практика</button>
        {user.isAdmin ? (
          <button  className={style.button}onClick={() => setOpen2(!open2)}>
            {open2 ? <TbLockOpen /> : <TbLock />}
          </button>
        ) : null}
      </div>
      <div className={!open3 ? style.item__task2 : style.item__task}>
        <button className={!open3 ? style.button2 : style.button}>3. Node.js</button>
        {user.isAdmin ? (
          <button className={style.button} onClick={() => setOpen3(!open3)}>
            {open3 ? <TbLockOpen /> : <TbLock />}
          </button>
        ) : null}
      </div>
      <div className={!open3 ? style.item__task2 : style.item__task}>
        <button className={!open3 ? style.button2 : style.button}>4. DOM-дерево</button>
        {user.isAdmin ? (
          <button className={style.button} onClick={() => setOpen3(!open3)}>
            {open3 ? <TbLockOpen /> : <TbLock />}
          </button>
        ) : null}
      </div>
      <div className={!open3 ? style.item__task2 : style.item__task}>
        <button className={!open3 ? style.button2 : style.button}>5. TypeScript</button>
        {user.isAdmin ? (
          <button className={style.button} onClick={() => setOpen3(!open3)}>
            {open3 ? <TbLockOpen /> : <TbLock />}
          </button>
        ) : null}
      </div>
      <div className={!open3 ? style.item__task2 : style.item__task}>
        <button className={!open3 ? style.button2 : style.button}>6. Redux</button>
        {user.isAdmin ? (
          <button className={style.button} onClick={() => setOpen3(!open3)}>
            {open3 ? <TbLockOpen /> : <TbLock />}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Tasks;
