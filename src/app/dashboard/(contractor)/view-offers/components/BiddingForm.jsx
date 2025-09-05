"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { CalendarIcon } from "lucide-react";

import { useRef, useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import GlobalModal from "@/components/GlobalModal/GlobalModal";

const BiddingFormForViewOffers = () => {


  const [availability, setAvailability] = useState(null);

  //Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  //form submission handler
  const submissionHandler = (e) => {
    e.preventDefault();

    const formElement = e.target;
    const price = formElement.price.value;
    const duration = formElement.duration.value;
   

    const data = {
      price,
      availability,
      duration,
    };

    console.log("All form data are", data);
    if (data) {
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-8">
      <GlobalModal
        isModalOpen={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
      >
        <div className="bg-white w-96 h-96"></div>
      </GlobalModal>
      <div className="w-full  my-4 px-2 lg:px-0">
        <form onSubmit={submissionHandler}>
          {/* Issue */}
          <div className="mb-2">
            <Label htmlFor="price" className="font-semibold">
              Quoted Price (Include material)
            </Label>
            <Input
              type="text"
              id="price"
              name="price"
              placeholder="Enter here"
              className="mt-1"
              required
            />
          </div>

          {/* Available date */}
          <div className="mb-2">
            <Label htmlFor="availability" className="font-semibold">
              Available Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-full pl-3 text-left font-normal"
                >
                  {availability ? availability.toDateString() : "Pick a date"}
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

           {/* Estimated Duration */}
          <div className="mb-2">
            <Label htmlFor="duration" className="font-semibold">
             Estimated Duration
            </Label>
            <Input
              type="text"
              id="duration"
              name="duration"
              placeholder="Enter here"
              className="mt-1"
              required
            />
          </div>


          {/* Work Details */}
          <div className="mb-2">
            <Label htmlFor="description" className="font-semibold">
              Work Details
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Write something "
              className="resize-none mt-2 h-40 md:h-60"
            />
          </div>

          <Button className={"w-1/3 block mx-auto mt-8"} type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BiddingFormForViewOffers;
