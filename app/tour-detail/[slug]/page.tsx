import TourDetailCarousel from "@/components/TourDetailCarousel"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarSearch } from "lucide-react"

const TourDetail = () => {
  return (
    <main className="w-full py-28">
      <div className="max-w-[1440px] px-5 md:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-none max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <TourDetailCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-1">
            {/* Tour Title */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Antalya – Kekova – Antalya Cruise
            </div>
            {/* Tour Price */}
            <div className="flex items-center">
              <span className="text-base">Starting from</span>
              <p className="text-xl font-semibold ml-2">€ 700</p>
            </div>
            {/* Tour Subtitle */}
            <div className="text-sm mb-5 leading-7 text-gray-800">
              <p className="py-3">This yacht cruise is run by standard gulet yachts and departs every four days of the week during the season. By joining this yacht cruise you will explore the Lycian Coast which is one of the most beautiful coast line in the Mediterranean.</p>
            </div>

            {/* Tour Avaliable Dates Start */}
            <div className="mb-10">
              <div className="flex mb-2 text-md font-semibold">
                Available Dates and Guests Capacity
              </div>
              <div className="relative mb-3">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-4">
                  <CalendarSearch className="w-5 h-5 text-slate-500" />
                </div>
                <Select>
                  <SelectTrigger className="font-normal text-slate-500 pl-12 py-6 text-[14px] ring-0 ring-slate-300 focus:ring-0 focus-visible:ring-inset focus-visible:ring-slate-500">
                    <SelectValue placeholder="Select Departure Day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">
                      <div className="flex !justify-between items-center">
                        <span className="mr-4">24.08.2024</span>
                        <span>9 Persons</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="7">
                      <div className="flex !justify-between items-center">
                        <span className="mr-4">31.08.2024</span>
                        <span>3 Persons</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

          </div>
          {/* right column end */}
        </div>

      </div>
    </main>
  )
}

export default TourDetail