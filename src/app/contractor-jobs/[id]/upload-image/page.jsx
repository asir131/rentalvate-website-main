"use client";
import React, { useState, useRef } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { CircleX, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
const UploadImage = () => {
   const router = useRouter();
  
  const [selectedImages, setSelectedImages] = useState([]);

 
  const imageInputRef = useRef(null);

  const handleGoBack = () => {
    window.history.back();
  };

  
  const imageInputClickHandler = (e) => {
    e.preventDefault();
    imageInputRef.current.click();
  };

  
  const selectedImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImages((prev) => [...prev, file]);
    }
    
    e.target.value = "";
  };

  
  const removeSelectedImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="h-screen">
      <div
        onClick={handleGoBack}
        className="flex items-center cursor-pointer font-semibold text-lg mt-10 ml-5 md:ml-110 md:mb-10"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        Upload Image
      </div>
      <div className=" text-center mt-20">
        <p className="text-xs mx-10 md:mx-0 opacity-55">
          Please upload clear images showing the completed work. These images
          will be sent to the landlord for review and approval before payment is
          released.
        </p>
      </div>
      <div className="blank mx-10 md:mx-120 mt-20">
        <div className="mb-2">
          <Label htmlFor="images" className="font-semibold">
            Upload Images{" "}
            <span className="text-sm font-normal">
              (Maximum 3 photos can be uploaded)
            </span>
          </Label>

          <div className="w-full border  h-14 rounded-md mt-2 flex items-center p-2">
            {/* Display selected images */}
            {selectedImages.map((image, index) => {
              const blobUrl = URL.createObjectURL(image);

              return (
                <div className="relative" key={index}>
                  <Image
                    src={blobUrl}
                    width={58}
                    height={58}
                    alt="selected image"
                    quality={30}
                    className="object-cover rounded-xs overflow-hidden mx-2"
                  />
                  <CircleX
                    size={14}
                    color="#FF2147"
                    className="absolute top-1 right-2 cursor-pointer w-auto h-auto"
                    onClick={() => removeSelectedImage(index)}
                  />
                </div>
              );
            })}

            {/* Plus button to add images */}
            <Button
              variant={"outline"}
              onClick={imageInputClickHandler}
              disabled={selectedImages.length >= 3} // disable when 3+ images
            >
              <Plus />
            </Button>
          </div>

          {/* Hidden file input */}
          <Input
            type="file"
            id="images"
            name="images"
            className="mt-1 hidden"
            accept="image/*"
            ref={imageInputRef}
            onChange={selectedImageHandler}
          />

          {/* Warning message when limit reached */}
          {selectedImages.length >= 3 && (
            <p className="text-red-500 text-sm mt-2">
              You can only upload up to 3 images.
            </p>
          )}
        </div>
        <div className=" text-center w-full">
          <div>
            <p className="flex font-semibold mb-5 justify-start ml-0 md:ml-0 mt-8 md:mt-5">
              Description
            </p>
            <input
              type="text"
              className="border border-slate-300 pb-30 outline-none w-full py-2 px-3 rounded-lg"
              placeholder="Describe why you are requesting this payment…"
            />
          </div>

          <div className="flex justify-end text-xs opacity-55 mr-0 md:mr-2">
            Max 500Characters
          </div>
        </div>

        {/* Submit button */}
        <div onClick={()=>router.push("/")} className="flex cursor-pointer justify-center">
          <Button className="w-60 md:w-100 mt-6" type="button">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
