"use client";

import { Input } from "@/components/ui/input";
import { CalendarIcon, MapPin } from "lucide-react";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import SectionTitle from "@/components/SectionTitle";
import SwiperComponents from "@/components/Swiper";
import HowToNormal from "@/components/HowToNormal";
import HowToSwiper from "@/components/HowToSwiper";
import YachtCard from "@/components/YachtCard";
import FaqsBanner from "@/components/FaqsBanner";

export default function Home() {
  const [date, setDate] = useState<Date>();

  //Cumartesi günlerini kontrol et
  const isSaturday = (date: any) => date.getDay() === 6;

  const disabledDays = (date: any) => {
    // Eğer tarih Cumartesi günü değilse devre dışı bırak
    return !isSaturday(date);
  };

  

  return (
    <main className="flex-grow">
      <div className="relative flex min-h-full items-end justify-center px-4 pb-28 pt-48 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-1/4 before:w-full before:bg-gradient-to-b before:from-black/60 sm:flex-none sm:justify-start sm:px-0 sm:pb-20 sm:pl-6 sm:pt-[120px] md:pl-16 3xl:pb-[132px] 3xl:pt-[142px] 4xl:pl-[200px]">
        <Image
          src="/images/1.webp"
          fill
          className="object-cover"
          priority
          alt="Cabin Charter Banner"
        />
        <form
          className="relative z-[2] w-full max-w-[450px] rounded-lg bg-white p-6 shadow-2xl sm:m-0 sm:max-w-[380px] sm:p-7 sm:pt-9 md:max-w-[400px] md:shadow-none lg:rounded-xl xl:max-w-[460px] xl:p-9 4xl:max-w-[516px] 4xl:p-12"
          action=""
        >
          <div className="mb-3 sm:mb-0">
            <span className="mb-2 hidden font-satisfy text-xl leading-7 text-gray-dark sm:block 4xl:text-[28px] 4xl:leading-[44px]">
              Enjoy your trip
            </span>
            <h1 className="md:text-h1 font-bold text-gray-dark leading-12 mb-2 !text-xl uppercase text-gray-dark sm:!text-[28px] sm:!leading-9  4xl:!text-4xl 4xl:!leading-[52px]">
              Discover the <br className="hidden sm:block" />
              new world
            </h1>
            <p className="text-gray-700 text-sm md:text-base mb-5 hidden leading-6 sm:block 3xl:leading-8 4xl:mb-6 4xl:text-lg">
              Compare prices from 200+ booking sites to help you find the lowest
              price on the right hotel for you.
            </p>
            <div className="relative mb-3">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-4">
                <MapPin className="w-5 h-5"/>
              </div>
              <Input
                type="text"
                placeholder="Location"
                className="pl-12 py-6 text-[14px]"
              />
            </div>
            <div className="relative mb-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal py-6",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon color="#000000" className="mr-2 h-5 w-5" />
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span className="text-[14px]">Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={disabledDays}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="relative mb-3">
              <Button className="w-full py-7 text-lg">Search</Button>
            </div>
          </div>
        </form>
      </div>
      <section className="lg:container mx-auto mt-12 pl-4 sm:pl-6 lg:mt-16">
        <header className="flex justify-between capitalize mb-4 md:mb-5 xl:mb-6">
          <SectionTitle
            title="Top Destinations For Boat Rentals"
            description="Unsatiable It Considered Invitation He Traveling Insensible."
          />
        </header>
        <SwiperComponents />
      </section>
      <section className="group/section instruction-section lg:container mt-12 pl-4 sm:pl-6 lg:mt-16">
        <header className="flex justify-between capitalize mb-4 md:mb-5 xl:mb-6">
          <SectionTitle
            title="How to rent a boat"
            description="Unsatiable it considered invitation he traveling insensible."
          />
        </header>
        <HowToNormal />
        <HowToSwiper />
      </section>
      <section className="group/section container mt-12 overflow-hidden lg:mt-16">
        <header className="flex justify-between capitalize items-end mb-4 md:mb-5 xl:mb-6 gap-5">
          <SectionTitle
            title="Top boat rentals"
            description="Unsatiable it considered invitation he traveling insensible."
          />
          <div>
            <a
              className="inline-block whitespace-nowrap pr-4 text-sm font-bold leading-6 text-gray-light underline sm:pr-6 md:text-base lg:pr-0"
              href="/explore"
            >
              See More
            </a>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:gap-y-10">
          <YachtCard />
          <YachtCard />
          <YachtCard />
          <YachtCard />
          <YachtCard />
          <YachtCard />
          <YachtCard />
          <YachtCard />
        </div>
      </section>
      <section className="w-full mt-6 sm:pl-6 px-4 2xl:px-4 3xl:px-8 4xl:px-16 relative">
        <FaqsBanner />
      </section>
    </main>
  );
}
