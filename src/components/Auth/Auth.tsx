import style from "./Auth.module.css";
import { Link } from "react-router-dom";

const Out = () => {
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Out;