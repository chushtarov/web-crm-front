// import style from './Form.module.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

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
<section>
  <div>
    <h2>Contact Us</h2>
    <form ref={form}  onSubmit={ sendEmail}>
      <input type="text" placeholder='ФИО' name='user_name' required />
      <input type="email" placeholder='Email' name='user_email'  required/>
      <input type="phone" placeholder='Phone' name='user_phone'  required/>
      <button type="submit">Отправить</button>
    </form>
  </div>
</section>
  )
}

export default Form