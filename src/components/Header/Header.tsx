
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Header.module.css";
import logo from "../../img/logo.f5584409.svg";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiProfileLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImExit } from "react-icons/im";
import { FaInfo } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import { HiArrowDownOnSquare } from "react-icons/hi2";
import { AppDispatch, RootState } from "../../app/store";
import { oneUser } from "../../features/usersSlice";

import { fetchChats } from "../../features/chatsSlice";
import img__prof from '../../img/2224588662290622381_99.jpg'



const Header = () => {
  const token = useSelector((state: RootState) => state.signInSlice.token);
  const userOne = useSelector((state: RootState) => state.usersSlice.oneUser);
  const dispatch = useDispatch<AppDispatch>();

  const chats = useSelector((state: RootState) => state.chat.chats);

  useEffect(() => {
    dispatch(oneUser());
    dispatch(fetchChats());
  }, [ token, dispatch]);

  const getChatIdForUser = (userId) => {
    const chat = chats.find((chat) => chat.participants.includes(userId));

    return chat ? chat._id : null;
  };


  const userId = userOne ? userOne._id : null;
  const chatId = userId ? getChatIdForUser(userId) : null;


  const [openProf, setOpenProf] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const profRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profRef.current && !profRef.current.contains(event.target)) {
        setOpenProf(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickProf = () => {
    setOpenProf(!openProf);
  };

  const handleExit = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={open ? style.open : style.nav}>
        <ul className={style.nav__ul}>
          <li className={style.ul__link}>
            <button className={style.ul__menu}><Link className={style.ul__link} to="/info">Экзамен</Link></button>
          </li>
          <li>
            <Link className={style.ul__link} to={"/"}>
              О нас
            </Link>
          </li>
          <li>
            <Link className={style.ul__link} to={"/student"}>
              Выпускники
            </Link>
          </li>
          <li>
            <Link className={style.ul__link} to={"/sandbox"}>
              Тренажер
            </Link>
          </li>
          <li>
            <Link className={style.ul__link} to={"/contact"}>
              Контакты
            </Link>
          </li>
          <li className={style.ul__link}>
            <Link className={style.ul__menu} to={`/chat/${chatId}`}>
              Чат
            </Link>
          </li>
        </ul>

      </div>

      <div className={style.prof}>
        {token ? <div className={style.log__user}>{userOne.login}</div> : ""}
        <button
          onClick={handleClickProf}
          className={style.prof__btn}
          ref={profRef}
        >
          {token ? (
            <img className={style.ava} src={img__prof} alt="" />
          ) : (
            <CgProfile />
          )}
        </button>
        <button onClick={() => setOpen(!open)} className={style.burger_click}>
          <span className={style.burger_icon}>
            <RxHamburgerMenu />
          </span>
        </button>
        {openProf ? (
          <div className={style.prof__ul}>
            {token ? (

              <div className={style.profil_auth}>
          
                <div className={style.ava__prof}>
                  <img src={img__prof} alt="" />
                </div>
                <h3>Профиль</h3>
                <div>
                  <p>Пользователь:</p>
                  <p>{userOne.login}</p>
                </div>
                <div>
                  <p>Группа:</p>
                  <p>{userOne.group}</p>
                </div>
                <button onClick={handleExit}>
                  <ImExit className={style.icon} /> Выход
                </button>
              </div>
            ) : (
              <button onClick={handleExit}>
                <HiArrowDownOnSquare className={style.icon} />{" "}
                <Link className={style.link__color} to="/login">
                  Вход
                </Link>
              </button>
            )}
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
