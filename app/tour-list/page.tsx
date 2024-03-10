import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";


const TourPage = () => {
  return (
    <main className="flex-grow">
      <div className="container mb-12 pt-6 lg:mb-16">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-gray-900 text-sm md:text-base font-bold text-gray-dark">
            A Total of 30 Tours Found
          </p>
          <Button className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-4 py-2 text-sm rounded-md hover:text-gray-1000 focus:ring-gray-900/30 !p-0 focus:!ring-0 xl:hidden">
            <SlidersHorizontal className="w-6 h-6 md:w-7"/>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default TourPage;
