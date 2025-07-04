import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Thumbs, Navigation, Pagination } from "swiper/modules";
import {GlobleVal} from "../Hooks/GlobleVal"
const {DefaultImageUrl} = GlobleVal()

const DiamondGallary = ({ diamondData }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="relative ">
        <Swiper
          speed={800}
          spaceBetween={10}
          loop={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={true}
          modules={[FreeMode, Thumbs, Navigation, Pagination]}
          className="mySwiper2"
        >
          {diamondData.diamondVideo && (
            <SwiperSlide>
              <iframe
                key={Math.random()}
                src={diamondData.diamondVideo}
                className="w-full h-[440px] sm:h-[750px] md:h-[550px]"
              ></iframe>
            </SwiperSlide>
          )}

          <SwiperSlide className="unset-img1 bg-[#f3f3f3] !relative">
            <img
              src={
                diamondData?.diamondImage
                  ? diamondData.diamondImage
                  : `${DefaultImageUrl}/diamond-${diamondData.Shape}.jpg`
              }
              alt={diamondData.Shape}
              fill
              className="!relative !h-auto mix-blend-multiply m-auto"
              unoptimized
            />
            {!diamondData.ImageB && (
              <p className="absolute !text-white font-medium bottom-0 w-full text-center text-xs sm:text-xl z-10 my-5">
                  This is a sample image
              </p>
            )}
          </SwiperSlide>
          <SwiperSlide>
            <div className="unset-img1 relative">
              <img
                src={`${DefaultImageUrl}/side_view_${diamondData.Shape}.webp`}
                alt="Diamond_Side_View"
                fill
                className="!relative !h-auto"
                unoptimized
              />
              <span
                id={`${diamondData.Shape}-T`}
                className="!absolute bg-[white] lg:text-sm text-xs"
              >
                Table: {diamondData.TablePer}%
              </span>
              <span
                id={`${diamondData.Shape}-D`}
                className="!absolute bg-[white] lg:text-sm text-xs"
              >
                Depth: {diamondData.DepthPer}%
              </span>
              <span
                id={`${diamondData.Shape}-C`}
                className="!absolute bg-[white] lg:text-sm text-xs"
              >
                Culet: {diamondData.Culet == "NON" ? "" : diamondData.Culet}
              </span>
              <span
                id={`${diamondData.Shape}-G`}
                className="!absolute bg-[white] lg:text-sm text-xs"
              >
                Girdle: {diamondData.GirdleFrom}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="unset-img1 relative">
              <img
                src={`${DefaultImageUrl}/upper_view_${diamondData.Shape}.webp`}
                alt="Diamond_Upper_View"
                fill
                className="!relative !h-auto"
                unoptimized
              />
              <span
                id={`${diamondData.Shape}-W`}
                className="!absolute bg-[white] lg:text-sm text-xs"
              >
                Width: {diamondData.Width} mm
              </span>
              <span
                id={`${diamondData.Shape}-L`}
                className="!absolute bg-[white] lg:text-sm text-xs"
              >
                Length: {diamondData.Length} mm
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-10 mx-auto w-full">
        <Swiper
          speed={800}
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          className="mySwiper active thumb-swipe"
        >
          {diamondData.VideoLink && (
            <SwiperSlide className="!h-auto !w-[70px] unset-img1 ">
              <img
                src={`${DefaultImageUrl}/360-icon.webp`}
                alt="360 Icon"
                fill
                className="!relative !h-auto"
              />
            </SwiperSlide>
          )}
          <SwiperSlide className="!h-auto !w-[70px] unset-img1 bg-[#f3f3f3] ">
            <img
               src={
                diamondData?.ImageB
                  ? diamondData.ImageB
                  : `${DefaultImageUrl}/diamond-${diamondData.Shape}.jpg`
              }
              alt={diamondData.Shape}
              fill
              className="!relative !h-auto mix-blend-multiply"
            />
          </SwiperSlide>
          <SwiperSlide className="!h-auto !w-[70px] unset-img1">
            <img
              src={`${DefaultImageUrl}/side_view_${diamondData.Shape}.webp`}
              alt="Diamond_Side_View"
              fill
              className="!relative !h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="!h-auto !w-[70px] unset-img1">
            <img
              src={`${DefaultImageUrl}/upper_view_${diamondData.Shape}.webp`}
              alt="Diamond_Upper_View"
              fill
              className="!relative !h-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default DiamondGallary;