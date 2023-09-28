import style from "./Auth.module.css";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

const Auth = () => {
  const admin = useSelector((state: RootState) => state.usersSlice.oneUser);

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
               {admin.isAdmin === true ? <Link to={"/listStud"} className={style.out_a}>
                Студенты
              </Link> : null}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Auth;
