import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img from './photo_2023-09-21_15-12-40.jpg';
import style from './Slider.module.css';

const Slider = () => {
  return (
    <div className={style.slider}>
        <Carousel showArrows={false} showThumbs={false} showStatus={false}>
        <div>
          <img className={style.img_slider} src={img} alt="error" />
        </div>
        <div>
          <img className={style.img_slider} src={img} alt="error" />
        </div>
        <div>
          <img className={style.img_slider} src={img} alt="error" />
        </div>
      </Carousel>
    </div>
  )
}

export default Slider