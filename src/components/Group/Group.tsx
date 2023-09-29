import React, { useState } from "react";
import style from "./Group.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import Modal from "react-modal";
import { useEffect } from "react";
import { fetchUsers } from "../../features/usersSlice";

const Group = () => {
  const group = useSelector((state: RootState) => state.chat.chats);
  const user = useSelector((state: RootState) => state.usersSlice.users);
  const dispatch = useDispatch<AppDispatch>();
  const [showModal, setShowModal] = useState(false);
  const [openId, setOpenId] = useState("");
  const handleOpenModal = (_id: string) => {
    setOpenId(_id);
    setShowModal(true);
  };
  console.log(openId);
  console.log(group);
  const userChat = group
    .find((chat) => chat._id === openId)
    ?.participants.map((userChat) =>
      user.find((userAll) => userAll._id === userChat)
    );
  console.log(userChat);

  useEffect(() => {
    dispatch(fetchUsers(openId));
  }, []);
  return (
    <div className={style.group}>
      <Modal
        onRequestClose={() => setShowModal(false)}
        ariaHideApp={false}
        className={style.modal}
        isOpen={showModal}
      >
        <h2>Все студенты</h2>

        {userChat?.map((user, index) => (
            <div className={style.login__name} key={user?._id}>{index+1}. {user?.login}</div>
        ))}
      </Modal>
      {group.map((item) => {
        return (
          <div
            onClick={() => handleOpenModal(item._id)}
            className={style.group__item}
          >
            <div className={style.item__img}>i</div>
            <div>
              <p className={style.name}>{item.name}</p>
              <p className={style.mentor}>Наставники: Magomed, Zelim</p>
              <p className={style.lection}>Лектор: Альви</p>
              <p className={style.student}>
                количество студентов: {item.participants.length}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Group;
