import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from "swiper";
import { useSelector } from "react-redux";
import "swiper/swiper-bundle.css";
import "./style.css";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

export function Slider() {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [slide, setSlide] = useState(0);
  const country = useSelector((state) => state.countries.currentCountry);

  // const slides = [];
  // for (let i = 1; i <= 6; i += 1) {
  //   slides.push(
  //     <SwiperSlide key={`slide-${i}`}>
  //       <img
  //         src={`../../public/assets/img/country/brit_${i}.jpg`}
  //         alt={`Slide ${i}`}
  //       />
  //     </SwiperSlide>,
  //   );
  // }
  const slides = country.places.map((place, index) => {
    return (
      <SwiperSlide key={`slide-${index}`}>
        <img src={`${place.imageUrl}.jpg`} alt={`Slide ${index}`} />
      </SwiperSlide>
    );
  });

  // const thumbs = [];
  // for (let i = 1; i <= 6; i += 1) {
  //   thumbs.push(
  //     <SwiperSlide key={`thumb-${i}`}>
  //       <img
  //         src={`../../public/assets/img/country/brit_${i}.jpg`}
  //         alt={`Thumbnail ${i}`}
  //       />
  //     </SwiperSlide>,
  //   );
  // }
  // const thumbs = country.places.map((place, index) => {
  //   return (
  //     <>
  //       <SwiperSlide key={`thumb-${index}`}>
  //         <img src={`${place.imageUrl}.jpg`} alt={`Thumbnail ${index}`} />
  //       </SwiperSlide>
  //     </>
  //   );
  // });

  return (
    <React.Fragment>
      <Swiper
        id="main"
        className="gallery-top"
        // thumbs={{ swiper: thumbsSwiper }}
        navigation
        pagination
        spaceBetween={5}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          setSlide(swiper.activeIndex);
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {slides}
      </Swiper>

      {/* <Swiper
        id="thumbs"
        className="gallery-thumbs"
        spaceBetween={5}
        slidesPerView={6}
        onSwiper={setThumbsSwiper}
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 4,
          },
          500: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {thumbs}
      </Swiper> */}
      <div className="slider-description">
        <div className="slider-description-sight text-center">
          {country.places && (
            <>
              <h4>{country.places[slide].name}</h4>
              <p>{country.places[slide].description}</p>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
