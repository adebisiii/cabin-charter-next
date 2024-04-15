import { Ghost } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"


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
        </div>
    </div>
  )
}

export default Sidebar