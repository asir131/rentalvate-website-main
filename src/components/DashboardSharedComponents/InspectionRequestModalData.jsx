"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { Calendar } from "../ui/calendar";

const InspectionRequestModalData = ({isModalOpen, setIsModalOpen}) => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [availability, setAvailability] = useState(null);

  const handleNavigation = (routeURL) => {
    router.push(routeURL);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!availability || !selectedTime) {
      alert("Please select both date and time");
      return;
    }
    if (availability && selectedTime) {
      router.push("/dashboard")
    }

    // Handle form submission with the selected date and time
    console.log("Selected Date:", availability);
    console.log("Selected Time:", selectedTime);

    // You can process the form data here or call an API
    // Example: handleNavigation("/confirmation") or submit to API
  };

  // Generate time options (24-hour format)
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        const displayTime = new Date(
          `2000-01-01T${timeString}`
        ).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        times.push({ value: timeString, display: displayTime });
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();
  const selectedTimeDisplay = selectedTime
    ? timeOptions.find((time) => time.value === selectedTime)?.display ||
      selectedTime
    : "Select time";

  return (
    <div className="bg-white w-80 md:w-96 h-70 rounded-lg flex flex-col items-center justify-center gap-4 p-6">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-semibold">Inspection Request</h1>
        <button
          className="text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        {/* Select Date */}
        <div className="mb-2">
          <Label htmlFor="availability" className="font-semibold mb-2">
            Select Date
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className="w-full pl-3 text-left font-normal"
              >
                {availability ? availability.toDateString() : "Select one"}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={availability}
                onSelect={setAvailability}
                captionLayout="dropdown"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Select Time */}
        <div className="mb-2">
          <Label htmlFor="time" className="font-semibold mb-2">
            Select Time
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className="w-full pl-3 text-left font-normal"
              >
                {selectedTimeDisplay}
                <Clock className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-70 p-0 max-h-60 overflow-y-auto"
              align="end"
            >
              <div className="p-2">
                {timeOptions.map((time) => (
                  <Button
                    key={time.value}
                    variant="ghost"
                    className="w-full text-left justify-start hover:bg-gray-100"
                    onClick={() => setSelectedTime(time.value)}
                  >
                    {time.display}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 mt-6"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default InspectionRequestModalData;
