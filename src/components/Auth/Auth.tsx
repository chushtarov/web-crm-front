import { useDispatch, useSelector } from "react-redux";
import style from "./Auth.module.css";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import {useEffect} from 'react'

const Auth = () => {
const admin = useSelector((state: RootState) => state.signInSlice.user)
const dispatch = useDispatch<AppDispatch>()

// useEffect(dispatch())

  return (
    <div className={style.out_header}>
      <div className={style.out_content}>
        <nav className={style.out_nav}>
          <ul className={style.out_ul}>
            <li>
              <Link to={"/Chat"} className={style.out_a}>
                Чат
              </Link>
            </li>
            <li>
              <Link to={"/Tasks"} className={style.out_a}>
                Таски
              </Link>
            </li>
            <li>
              <Link to={"/group"} className={style.out_a}>
                Группа
              </Link>
            </li>
            <li>
              <Link to={"/listStud"} className={style.out_a}>
                Студенты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Auth;