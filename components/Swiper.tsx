// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import Link from "next/link";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";


const SwiperComponents = () => {
  return (
    <div className="group/section relative">
      <Swiper
        modules={[Navigation, Scrollbar, Pagination]}
        navigation={{
          nextEl: '.destination-button-next',
          prevEl: '.destination-button-prev',
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20,

          },
          480: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          580: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          840: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },

        }}
      >
        <SwiperSlide>
          <Link href="/" className="group/item relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl lg:h-[380px] xl:h-[420px] 2xl:h-[500px]">
            <Image src="/images/miami.webp" fill alt="Miami" sizes="" className="relative z-0 rounded-xl bg-gray-lighter object-cover transition-all duration-500 group-hover/item:scale-110" />
            <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-gray-dark/90 to-gray-dark/0 transition-all duration-500 group-hover/item:h-1/2 3xl:from-gray-dark/60"></div>
            <div className="relative z-10 mt-auto px-6 pb-6 md:px-7 md:pb-7 3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12">
              <h3 className="text-xl font-bold leading-7 text-white 3xl:text-2xl">Miami</h3>
              <p className="text-sm font-normal leading-7 text-white lg:text-base 3xl:pt-1.5 4xl:text-lg">Long Island City</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="group/item relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl lg:h-[380px] xl:h-[420px] 2xl:h-[500px]">
            <Image src="/images/miami.webp" fill alt="Miami" className="relative z-0 rounded-xl bg-gray-lighter object-cover transition-all duration-500 group-hover/item:scale-110" />
            <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-gray-dark/90 to-gray-dark/0 transition-all duration-500 group-hover/item:h-1/2 3xl:from-gray-dark/60"></div>
            <div className="relative z-10 mt-auto px-6 pb-6 md:px-7 md:pb-7 3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12">
              <h3 className="text-xl font-bold leading-7 text-white 3xl:text-2xl">Miami</h3>
              <p className="text-sm font-normal leading-7 text-white lg:text-base 3xl:pt-1.5 4xl:text-lg">Long Island City</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="group/item relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl lg:h-[380px] xl:h-[420px] 2xl:h-[500px]">
            <Image src="/images/miami.webp" fill alt="Miami" className="relative z-0 rounded-xl bg-gray-lighter object-cover transition-all duration-500 group-hover/item:scale-110" />
            <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-gray-dark/90 to-gray-dark/0 transition-all duration-500 group-hover/item:h-1/2 3xl:from-gray-dark/60"></div>
            <div className="relative z-10 mt-auto px-6 pb-6 md:px-7 md:pb-7 3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12">
              <h3 className="text-xl font-bold leading-7 text-white 3xl:text-2xl">Miami</h3>
              <p className="text-sm font-normal leading-7 text-white lg:text-base 3xl:pt-1.5 4xl:text-lg">Long Island City</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="group/item relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl lg:h-[380px] xl:h-[420px] 2xl:h-[500px]">
            <Image src="/images/miami.webp" fill alt="Miami" className="relative z-0 rounded-xl bg-gray-lighter object-cover transition-all duration-500 group-hover/item:scale-110" />
            <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-gray-dark/90 to-gray-dark/0 transition-all duration-500 group-hover/item:h-1/2 3xl:from-gray-dark/60"></div>
            <div className="relative z-10 mt-auto px-6 pb-6 md:px-7 md:pb-7 3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12">
              <h3 className="text-xl font-bold leading-7 text-white 3xl:text-2xl">Miami</h3>
              <p className="text-sm font-normal leading-7 text-white lg:text-base 3xl:pt-1.5 4xl:text-lg">Long Island City</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="group/item relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl lg:h-[380px] xl:h-[420px] 2xl:h-[500px]">
            <Image src="/images/miami.webp" fill alt="Miami" className="relative z-0 rounded-xl bg-gray-lighter object-cover transition-all duration-500 group-hover/item:scale-110" />
            <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-gray-dark/90 to-gray-dark/0 transition-all duration-500 group-hover/item:h-1/2 3xl:from-gray-dark/60"></div>
            <div className="relative z-10 mt-auto px-6 pb-6 md:px-7 md:pb-7 3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12">
              <h3 className="text-xl font-bold leading-7 text-white 3xl:text-2xl">Miami</h3>
              <p className="text-sm font-normal leading-7 text-white lg:text-base 3xl:pt-1.5 4xl:text-lg">Long Island City</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="group/item relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl lg:h-[380px] xl:h-[420px] 2xl:h-[500px]">
            <Image src="/images/miami.webp" fill alt="Miami" sizes="min-width:320" className="relative z-0 rounded-xl bg-gray-lighter object-cover transition-all duration-500 group-hover/item:scale-110" />
            <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-gray-dark/90 to-gray-dark/0 transition-all duration-500 group-hover/item:h-1/2 3xl:from-gray-dark/60"></div>
            <div className="relative z-10 mt-auto px-6 pb-6 md:px-7 md:pb-7 3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12">
              <h3 className="text-xl font-bold leading-7 text-white 3xl:text-2xl">Miami</h3>
              <p className="text-sm font-normal leading-7 text-white lg:text-base 3xl:pt-1.5 4xl:text-lg">Long Island City</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="group/item relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl lg:h-[380px] xl:h-[420px] 2xl:h-[500px]">
            <Image src="/images/miami.webp" fill alt="Miami" sizes="min-width:320" className="relative z-0 rounded-xl bg-gray-lighter object-cover transition-all duration-500 group-hover/item:scale-110" />
            <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-gray-dark/90 to-gray-dark/0 transition-all duration-500 group-hover/item:h-1/2 3xl:from-gray-dark/60"></div>
            <div className="relative z-10 mt-auto px-6 pb-6 md:px-7 md:pb-7 3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12">
              <h3 className="text-xl font-bold leading-7 text-white 3xl:text-2xl">Miami</h3>
              <p className="text-sm font-normal leading-7 text-white lg:text-base 3xl:pt-1.5 4xl:text-lg">Long Island City</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="group/item relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl lg:h-[380px] xl:h-[420px] 2xl:h-[500px]">
            <Image src="/images/miami.webp" fill alt="Miami" sizes="min-width:320" className="relative z-0 rounded-xl bg-gray-lighter object-cover transition-all duration-500 group-hover/item:scale-110" />
            <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-gray-dark/90 to-gray-dark/0 transition-all duration-500 group-hover/item:h-1/2 3xl:from-gray-dark/60"></div>
            <div className="relative z-10 mt-auto px-6 pb-6 md:px-7 md:pb-7 3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12">
              <h3 className="text-xl font-bold leading-7 text-white 3xl:text-2xl">Miami</h3>
              <p className="text-sm font-normal leading-7 text-white lg:text-base 3xl:pt-1.5 4xl:text-lg">Long Island City</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="group/item relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl lg:h-[380px] xl:h-[420px] 2xl:h-[500px]">
            <Image src="/images/miami.webp" fill alt="Miami" sizes="min-width:320" className="relative z-0 rounded-xl bg-gray-lighter object-cover transition-all duration-500 group-hover/item:scale-110" />
            <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-gray-dark/90 to-gray-dark/0 transition-all duration-500 group-hover/item:h-1/2 3xl:from-gray-dark/60"></div>
            <div className="relative z-10 mt-auto px-6 pb-6 md:px-7 md:pb-7 3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12">
              <h3 className="text-xl font-bold leading-7 text-white 3xl:text-2xl">Miami</h3>
              <p className="text-sm font-normal leading-7 text-white lg:text-base 3xl:pt-1.5 4xl:text-lg">Long Island City</p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
      {/* Özelleştirilmiş Navigasyon Butonları */}
      <button className="destination-button-prev items-center justify-center focus:outline-none duration-200 active:scale-95 p-1 w-9 h-9 rounded-full border border-transparent bg-white text-primary focus:ring-gray-900 hover:enabled:bg-gray-900 hover:enabled:text-white invisible absolute left-[25px] top-1/2 z-10 flex -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:left-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button className="destination-button-next items-center justify-center focus:outline-none duration-200 active:scale-95 p-1 w-9 h-9 rounded-full border border-transparent bg-white text-primary focus:ring-gray-900 hover:enabled:bg-gray-900 hover:enabled:text-white invisible absolute right-[25px] top-1/2 z-10 flex -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:right-4 sm:group-hover/section:right-6 lg:group-hover/section:-right-[19px]">
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SwiperComponents;
