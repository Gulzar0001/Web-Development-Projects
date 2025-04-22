import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import slider from '../assets/img/slider.png'
import slider2 from '../assets/img/slider2.png'
import slider3 from '../assets/img/slider3.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div className='rounded-lg w-'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    
      <SwiperSlide>
       
      <img 
      src={slider}
      className='w-[75%] mx-[10%] my-8 rounded-xl'
      /> </SwiperSlide>
      
      <SwiperSlide>
      <img 
      src={slider2}
      className='w-[75%] mx-[10%] my-8 rounded-xl'
      /></SwiperSlide>


      <SwiperSlide>
      <img 
      src={slider3}
      className='w-[75%] mx-[10%] my-8 rounded-xl'
      /></SwiperSlide>

      ...
    </Swiper>
    
    </div>
  );
};
