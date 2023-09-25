import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Students.module.css";
import { fetchCard } from "../../features/cardSlicer";
import { RootState } from "../../app/store";
import Student from "./Student";
const Students = () => {
  const card = useSelector((state: RootState) => state.cardSlicer.card);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCard());
  }, [dispatch]);

  return (
    <div className={style.block_students}>
      <div className={style.student_container}>
        <h1 className={style.h1_students}>Наши Выпускники</h1>
        <div className={style.students_content}>
          {card.map((item) => (
            <Student item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
