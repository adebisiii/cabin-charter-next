import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const YachtCard = () => {
  return (
    <div className="listing-card group/item relative inline-flex w-full flex-col">
      <div className="relative w-full overflow-hidden rounded-xl">
        <span className="absolute right-4 top-4 z-10 inline-block items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Early Discount
        </span>
        <Link href={""}>
          <div className="listing-item after:absolute after:bottom-0 after:left-0 after:z-[1] after:h-1/4 after:w-full after:bg-gradient-to-t after:from-black/25">
            <Swiper
              modules={[Pagination, Navigation]}
              navigation={{
                nextEl: '.yacht-image-button-next',
                prevEl: '.yacht-image-button-prev',
              }}
              uniqueNavElements= {false}
              pagination={true}
            >
              <SwiperSlide>
                <Image src="/images/boat-twelve.webp" alt="boat" width={816} height={600} className="aspect-[34/25] bg-gray-500" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/boat-twelve.webp" alt="boat" width={816} height={600} className="aspect-[34/25] bg-gray-500" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/boat-twelve.webp" alt="boat" width={816} height={600} className="aspect-[34/25] bg-gray-500" />
              </SwiperSlide>
            </Swiper>
            {/* Özelleştirilmiş Navigasyon Butonları */}
            <button className="yacht-image-button-prev inline-flex items-center justify-center focus:outline-none transition duration-200 active:scale-95 p-0.5 w-7 h-7 rounded-full border border-transparent bg-white/70 hover:enabled:bg-white/100 focus:ring-white absolute left-4 top-1/2 z-10 -translate-y-1/2 shadow-md focus:!ring-0 md:invisible md:flex md:disabled:hidden md:group-hover/item:visible top-boat-grid-0-listing-item-button-prev">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button className="yacht-image-button-next inline-flex items-center justify-center focus:outline-none transition duration-200 active:scale-95 p-0.5 w-7 h-7 rounded-full border border-transparent bg-white/70 hover:enabled:bg-white/100 focus:ring-white absolute right-4 top-1/2 z-10 -translate-y-1/2 opacity-80 shadow-md focus:!ring-0 md:invisible md:flex md:disabled:hidden md:group-hover/item:visible md:group-hover/item:opacity-100 top-boat-grid-1-listing-item-button-next">
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </Link>
      </div>
      <Link href="">
        <div className="pt-3">
          <h4 className="mb-1 relative flex items-center font-bold text-gray-900 before:absolute before:-right-3 before:block before:h-1 before:w-1 before:rounded-full before:bg-gray-dark">
            Antalya – Kekova – Antalya
          </h4>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-gray-700">
              <span className="font-bold text-gray-900 xl:text-[18px] 3xl:text-xl">$260</span>
              / one person
            </p>
            <p className="text-gray-700">7 Days</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default YachtCard;
