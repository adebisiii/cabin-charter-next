"use client";

import { CalendarIcon, CloudMoon, MapPin, Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Sidebar = () => {
  const [date, setDate] = useState<Date>();
  //Cumartesi günlerini kontrol et
  const isSaturday = (date: any) => date.getDay() === 6;

  const disabledDays = (date: any) => {
    // Eğer tarih Cumartesi günü değilse devre dışı bırak
    return !isSaturday(date);
  };

  return (
    <div className="h-full overflow-y-auto bg-white xl:px-0.5 hidden xl:block">
      <div className="h-full overflow-y-auto bg-white xl:px-0.5 hidden xl:block">
        <div className="mb-4 flex items-center justify-between px-5 py-2 pt-3 uppercase md:px-7 xl:px-0 xl:pt-0">
          <h5 className="md:text-h5 font-bold text-gray-dark leading-8">
            Filter
          </h5>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-700 font-normal"
            type="reset"
          >
            Reset
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 px-5 pb-3 md:px-7 xl:p-0 xl:pb-0">
          <div className="flex flex-col">
            <label className="block font-bold leading-7">
              <span className="font-normal">Search Destination</span>
              <div className="relative mb-3">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-4">
                  <MapPin className="w-5 h-5 text-slate-500" />
                </div>
                <Input
                  type="text"
                  placeholder="Location"
                  className="font-normal pl-12 py-6 text-[14px] ring-0 ring-slate-300 focus:ring-0 focus-visible:ring-inset focus-visible:ring-slate-500"
                />
              </div>
              <span className="font-normal">Pick a Departure Date</span>
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
              <span className="font-normal">Duration</span>
              <div className="relative mb-3">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-4">
                  <CloudMoon className="w-5 h-5 text-slate-500" />
                </div>
                <Select>
                  <SelectTrigger className="font-normal text-slate-500 pl-12 py-6 text-[14px] ring-0 ring-slate-300 focus:ring-0 focus-visible:ring-inset focus-visible:ring-slate-500">
                    <SelectValue placeholder="Select Cruise Days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 Days</SelectItem>
                    <SelectItem value="7">7 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between py-2">
                <p className="font-normal">Number of People </p>
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
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
