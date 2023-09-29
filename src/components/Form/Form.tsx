// import style from './Form.module.css'
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./Form.module.css";
import img from './Imagem.png';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_81yo8af",
        "template_0o7t7h3",
        form.current,
        "DxI3gho62aUgl7W4f"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className={style.form}>
      <form className={style.form__items} ref={form} onSubmit={sendEmail}>
        <div className={style.form_container}>
          <div className={style.form_inputs}>
            <h2>Форма для записи</h2>
            <div>
              <input className={style.input_form_name} name="user_name" placeholder="Name" type="text" />
            </div>
            <div>
              <input className={style.input_form_email} name="user_email" placeholder="Email" type="email" />
            </div>
            <div>
              <input className={style.input_form_telephone} name="user_phone" placeholder="Phone" type="phone" />
            </div>
            <div className={style.form_btn}>
              <button className={style.btn}>Записаться</button>
            </div>
          </div>
          <div className={style.form_img}>
            <img src={img} alt="error" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
