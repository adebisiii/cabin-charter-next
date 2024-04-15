import { Ghost, MapPin } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { Input } from "./ui/input"


const Sidebar = () => {
  return (
    <div className="h-full overflow-y-auto bg-white xl:px-0.5 hidden xl:block">
        <div className="h-full overflow-y-auto bg-white xl:px-0.5 hidden xl:block">
            <div className="mb-4 flex items-center justify-between px-5 py-2 pt-3 uppercase md:px-7 xl:px-0 xl:pt-0">
                <h5 className="md:text-h5 font-bold text-gray-dark leading-8">
                    Filter
                </h5>
                <Button variant="ghost" size="sm" className="text-gray-700 font-normal" type="reset">Reset</Button>
            </div>
            <div className="grid grid-cols-1 gap-8 px-5 pb-3 md:px-7 xl:p-0 xl:pb-0">
                <div className="flex flex-col">
                    <label className="block font-bold leading-7">
                        <span className="font-normal font-medium">Search Destination</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar