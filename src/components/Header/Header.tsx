import React, { useState, useRef, useEffect } from "react";
import style from "./Header.module.css";
import logo from "../../img/logo.f5584409.svg";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiProfileLine } from "react-icons/ri";
import { ImExit } from "react-icons/im";
import { FaInfo } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProf, setOpenProf] = useState(false);
  const menuRef = useRef(null);
  const profRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
      if (profRef.current && !profRef.current.contains(event.target)) {
        setOpenProf(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickProf = () => {
    setOpenProf(!openProf);
  };

  const handleExit = () => {
    
  }

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={style.nav}>
        <ul className={style.nav__ul}>
          <li className={style.ul__link}>
            <button  onClick={handleClickMenu} className={style.ul__menu} ref={menuRef}>
              Экзамен
            </button>
          </li>
          <li>
            <Link className={style.ul__link} to={"/"}>
              О нас
            </Link>
          </li>
          <li>
            <Link className={style.ul__link} to={"/"}>
              Выпускники
            </Link>
          </li>
          <li>
            <Link className={style.ul__link} to={"/"}>
              Тесты
            </Link>
          </li>
          <li>
            <Link className={style.ul__link} to={"/"}>
              Контакты
            </Link>
          </li>
        </ul>
        {openMenu ? (
          <div className={style.menu}>
            <button><FaInfo className={style.icon}/> <Link to="https://www.youtube.com/watch?v=eWO1b6EoCnQ">нформация</Link>И</button>
            <button><MdAssignmentAdd className={style.icon}/> Записаться</button>
          </div>
        ) : null}
      </div>
      <div className={style.prof}>
        <button onClick={handleClickProf} className={style.prof__btn } ref={profRef}>
          <CgProfile />
        </button>
        {openProf ? (
          <div className={style.prof__ul}>
            <button>
              <RiProfileLine className={style.icon} /> Профиль
            </button>
            <button onClick={handleExit}>
              <ImExit className={style.icon} /> Выход
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
