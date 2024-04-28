import Image from "next/image"

const TourDetailCarousel = () => {
  return (
    <div className="lg:col-span-3 lg:row-end-1">
    <div className="lg:flex lg:items-start">
      <div className="lg:order-2 lg:ml-5">
        <div className="w-full overflow-hidden rounded-lg">
          <Image width={600} height={800} className="h-full w-full max-w-full object-cover" src="/images/antalya-kekova-cruise.jpg" alt="" />
        </div>
      </div>

      <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
        <div className="flex flex-row items-start lg:flex-col">
          <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-700 text-center">
            <Image width={180} height={180} className="h-full w-full object-cover" src="/images/antalya-kekova-cruise.jpg" alt="" />
          </button>
          <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
            <Image width={180} height={180} className="h-full w-full object-fill " src="/images/antalya-kekova-cruise.jpg" alt="" />
          </button>
          <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
            <Image width={180} height={180} className="h-full w-full object-cover" src="/images/antalya-kekova-cruise.jpg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TourDetailCarousel