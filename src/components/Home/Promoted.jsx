
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Promoted.css';
// Import Swiper styles
import 'swiper/css';




// import required modules




const Promoted = () => {
  
    return (
        <section className='home_promoted'>
              <Swiper
        slidesPerView={4.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
       
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Promoted;