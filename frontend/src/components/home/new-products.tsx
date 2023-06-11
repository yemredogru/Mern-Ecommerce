import React, {useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './new-products.css'

export default function NewProducts(){
    return(
        <div>
            <div className='headers'>
                <p>New Products</p>
                <a>See All New Products</a>
            </div>
            <div>
            <Swiper
      spaceBetween={50}
      slidesPerView={6}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div>
            <p>in stock</p>
            <p>Reviews (4)</p>
            <p>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p>$499.00</p>
            <p>$499.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            <p>in stock</p>
            <p>Reviews (4)</p>
            <p>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p>$499.00</p>
            <p>$499.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            <p>in stock</p>
            <p>Reviews (4)</p>
            <p>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p>$499.00</p>
            <p>$499.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            <p>in stock</p>
            <p>Reviews (4)</p>
            <p>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p>$499.00</p>
            <p>$499.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            <p>in stock</p>
            <p>Reviews (4)</p>
            <p>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p>$499.00</p>
            <p>$499.00</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            <p>in stock</p>
            <p>Reviews (4)</p>
            <p>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p>$499.00</p>
            <p>$499.00</p>
        </div>
      </SwiperSlide>
    </Swiper>
            </div>
        </div>
    )
}