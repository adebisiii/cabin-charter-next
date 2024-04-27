import TourDetailCarousel from "@/components/TourDetailCarousel"
import { User } from "lucide-react"

const TourDetail = () => {
  return (
    <main className="w-full py-28">
      <div className="max-w-[1440px] px-5 md:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex- max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
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
                Available Dates / Guests
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="border rounded-md text-center py-3 font-medium">
                  24.09.2024 / 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  24.09.2024 / 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  24.09.2024 / 11
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  24.09.2024 / Left 8 Guests
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  24.09.2024 / Left 8 Guests
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  24.09.2024 / Left 8 Guests
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  24.09.2024 / Left 8 Guests
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  24.09.2024 / Left 8 Guests
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  24.09.2024 / Left 8 Guests
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  24.09.2024 / Left 8 Guests
                </div>
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