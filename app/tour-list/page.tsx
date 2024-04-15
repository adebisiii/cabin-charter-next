"use client"
import Sidebar from "@/components/Sidebar";
import YachtCard from "@/components/YachtCard";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const TourListPage = () => {
  return (
    <main className="flex-grow">
      <div className="container mb-12 pt-24 lg:mb-16">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-gray-700 text-sm md:text-base font-bold">
            A Total of 30 Tours Found
          </p>
          <Button className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-4 py-2 text-sm rounded-md hover:text-gray-1000 focus:ring-gray-900/30 !p-0 focus:!ring-0 xl:hidden">
            <SlidersHorizontal className="w-6 h-6 md:w-7" />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[330px_5fr] 3xl:gap-12">
          <Sidebar />
          <div className="mt-1 grid grid-cols-1 gap-x-5 gap-y-8 xs:grid-cols-2 lg:grid-cols-4 3xl:gap-y-10">
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
            <YachtCard/>
          </div>
        </div>

      </div>
    </main>
  );
};

export default TourListPage;
