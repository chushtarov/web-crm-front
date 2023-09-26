// import style from './Form.module.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import style from './Form.module.css'

const Form = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_81yo8af', 'template_0o7t7h3', form.current, 'DxI3gho62aUgl7W4f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
  <div className={style.form}>
    <h2>Форма для записи</h2>
    <form className={style.form__items} ref={form}  onSubmit={sendEmail}>
      <h4>ФИО</h4>
      <input type="text"  name='user_name' required />
      <h4>Email</h4>

      <input type="email" name='user_email'  required/>
      <h4>Телефон</h4>

      <input type="phone"  name='user_phone'  required/>
      <button type="submit">Отправить</button>
    </form>
  </div>

  )
}

export default Form