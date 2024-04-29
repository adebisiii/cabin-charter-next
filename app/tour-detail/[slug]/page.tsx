import InfoCard from "@/components/InfoCard"
import TourDetailCarousel from "@/components/TourDetailCarousel"
import { Button } from "@/components/ui/button"
import { AirVent, AlarmClockCheck, AlarmClockMinus, CalendarDays, CircleArrowOutDownRight, CircleArrowOutUpRight, Minus, Plus, Sunrise, Utensils } from "lucide-react"

const TourDetail = () => {
  return (
    <main className="w-full py-28">
      <div className="px-5 md:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <TourDetailCarousel />
            <div className="mt-8">
              <h2 className="text-2xl font-semibold">On Board Equipment</h2>
              <div className="mt-4 grid grid-cols-3 gap-6 md:grid-cols-4">

                <InfoCard icon = {<Sunrise />} title="Duration" content="7 Days"/>
                <InfoCard icon = {<CircleArrowOutDownRight />} title="Embarkation" content="Kemer"/>
                <InfoCard icon= {<CircleArrowOutUpRight />} title="Disembarkation" content="Kemer" />
                <InfoCard icon= {<AirVent />} title="With A/C" content="Yes" />
                <InfoCard icon = {<CalendarDays  />} title="Departure Days " content="Friday"/>
                <InfoCard icon = {<AlarmClockCheck  />} title="Check-in" content="15:30pm"/>
                <InfoCard icon= {<AlarmClockMinus  />} title="Check-out" content="10:30am" />
                <InfoCard icon= {<Utensils  />} title="Meals" content="Full Board" />

              </div>
            </div>
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
            <div className="text-sm mb-2 leading-7 text-gray-800">
              <p className="py-3">This yacht cruise is run by standard gulet yachts and departs every four days of the week during the season. By joining this yacht cruise you will explore the Lycian Coast which is one of the most beautiful coast line in the Mediterranean.</p>
            </div>

            {/* Tour Avaliable Dates Start */}
            <div className="border rounded-md p-6 shadow-md">
              <div className="flex items-center justify-between py-2">
                <p className="text-md font-semibold">Number of People </p>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon">
                    <Minus className="w-5 h-5" />
                  </Button>
                  <p className="text-center font-normal">0</p>
                  <Button variant="outline" size="icon">
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="flex mt-4 mb-2 text-md font-semibold">
                Select Date
              </div>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2 text-sm">
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">11.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">18.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">25.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€ 1190</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
                <div className="border rounded-md text-center py-3 font-medium">
                  <span className="block">04.05.2024</span>
                  <span className="block">€700</span>
                </div>
              </div>
              <Button className="mt-4 w-full py-6 text-base">RESERVE</Button>
              <ul className="mt-3 xl:mt-5">
                <li className="flex items-center justify-between py-1.5 text-base first:pt-0 last:border-t last:border-gray-300 last:pb-0">
                  <span className="font-normal">€ 700 * 2 Guest(s)</span>
                  <span className="font-bold">€ 1400</span>
                </li>
                <li className="flex items-center justify-between py-1.5 text-base first:pt-0 last:border-t last:border-gray-300 last:pb-0">
                  <span className="font-normal">Discount</span>
                  <span className="font-bold text-red-600">- € 200</span>
                </li>
                <li className="flex items-center justify-between py-1.5 text-base first:pt-0 last:border-t last:border-gray-300 last:pb-0">
                  <span className="font-normal">Total</span>
                  <span className="font-bold">€ 1200</span>
                </li>
              </ul>
            </div>

          </div>
          {/* right column end */}
        </div>

      </div>
    </main>
  )
}

export default TourDetail