"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { CalendarIcon, CircleX, Plus } from "lucide-react";

import { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ManualBiddingProposalForm = () => {
  // input ref for image
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  // controlled state for non-native inputs
  const [category, setCategory] = useState("");
  const [urgencyLevel, setUrgencyLevel] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [startingDate, setStartingDate] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoThumbnail, setVideoThumbnail] = useState(null);

  const router = useRouter();

  //activate image selection field while clicking on the plus button
  const imageInputClickHandler = (e) => {
    e.preventDefault();
    imageInputRef.current.click();
  };

  //selected image handle
  const selectedImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImages((prev) => [...prev, file]);
    }
    // Reset input value so selecting the same file again triggers onChange
    e.target.value = "";
  };

  //Remove selected image from array
  const removeSelectedImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle video selection and generate thumbnail
  const handleVideoSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setSelectedVideo(file);
      generateVideoThumbnail(file);
    }
  };

  // Generate thumbnail from video
  const generateVideoThumbnail = (videoFile) => {
    const video = document.createElement("video");
    const url = URL.createObjectURL(videoFile);

    video.src = url;
    video.addEventListener("loadeddata", () => {
      // Seek to 1 second or 25% of duration (whichever is smaller)
      const seekTime = Math.min(1, video.duration * 0.25);
      video.currentTime = seekTime;
    });

    video.addEventListener("seeked", () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setVideoThumbnail(canvas.toDataURL("image/jpeg"));
      }
      URL.revokeObjectURL(url);
    });

    video.addEventListener("error", () => {
      console.error("Error loading video");
      URL.revokeObjectURL(url);
    });
  };

  // Remove selected video
  const removeSelectedVideo = () => {
    setSelectedVideo(null);
    setVideoThumbnail(null);
    if (videoInputRef.current) {
      videoInputRef.current.value = "";
    }
  };

  //form submission handler
  const submissionHandler = (e) => {
    e.preventDefault();
    const formElement = e.target;
    const issue = formElement.issue.value;
    const description = formElement.description.value;
    const address = formElement.address.value;
    const unitNumber = formElement.unitNumber.value;
    const amount = formElement.amount.value;

    const data = {
      issue,
      category,
      urgencyLevel,
      deadline,
      startingDate,
      description,
      address,
      unitNumber,
      amount,
      images: selectedImages,
      video: selectedVideo,
      videoThumbnail, // Include thumbnail in submission
    };

    console.log("All form data are", data);
    if (data) {
      router.push("/dashboard/create-post-manually/select-contractor");
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-8">
      <div className="w-full max-w-2xl mx-auto my-4 px-2 lg:px-0">
        <form onSubmit={submissionHandler}>
          {/* Issue */}
          <div className="mb-2">
            <Label htmlFor="issue" className="font-semibold">
              Issue
            </Label>
            <Input
              type="text"
              id="issue"
              name="issue"
              placeholder="Enter here"
              className="mt-1"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-2">
            <Label htmlFor="category" className="font-semibold">
              Category
            </Label>
            <Select onValueChange={setCategory}>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Plumbing">Plumbing</SelectItem>
                <SelectItem value="Cleaning">Cleaning</SelectItem>
                <SelectItem value="Sweeping">Sweeping</SelectItem>
                <SelectItem value="Moping">Moping</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="mb-2">
            <Label htmlFor="description" className="font-semibold">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe the issue"
              className="resize-none mt-2"
            />
          </div>

          {/* Urgency Level */}
          <div className="mb-2">
            <Label htmlFor="urgencyLevel" className="font-semibold">
              Urgency Level
            </Label>
            <Select onValueChange={setUrgencyLevel}>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Deadline */}
          <div className="mb-2">
            <Label htmlFor="deadline" className="font-semibold">
              Deadline
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-full pl-3 text-left font-normal"
                >
                  {deadline ? deadline.toDateString() : "Pick a date"}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={deadline}
                  onSelect={setDeadline}
                  captionLayout="dropdown"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Work Starting Date */}
          <div className="mb-2">
            <Label htmlFor="startingDate" className="font-semibold">
              Work starting date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-full pl-3 text-left font-normal"
                >
                  {startingDate ? startingDate.toDateString() : "Pick a date"}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={startingDate}
                  onSelect={setStartingDate}
                  captionLayout="dropdown"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Property Address */}
          <div className="mb-2">
            <Label htmlFor="address" className="font-semibold">
              Property Address
            </Label>
            <Input
              type="text"
              id="address"
              name="address"
              placeholder="Enter here"
              className="mt-1"
              required
            />
          </div>

          {/* Unit Number */}
          <div className="mb-2">
            <Label htmlFor="unitNumber" className="font-semibold">
              Unit Number
            </Label>
            <Input
              type="text"
              id="unitNumber"
              name="unitNumber"
              placeholder="Enter here"
              className="mt-1"
              required
            />
          </div>

          {/* Fixed Amount ($) */}
          <div className="mb-2">
            <Label htmlFor="amount" className="font-semibold">
              Fixed Amount ($)
            </Label>
            <Input
              type="text"
              id="amount"
              name="amount"
              placeholder="Enter here"
              className="mt-1"
              required
            />
          </div>

          {/* Upload images */}
          <div className="mb-2">
            <Label htmlFor="images" className="font-semibold">
              Upload Images{" "}
              <span className="text-sm font-normal">
                (Maximum 3 photos can be uploaded)
              </span>
            </Label>
            <div className="w-full border border-orange-400 h-14 rounded-md mt-2 flex items-center p-2">
              {/* Photos */}
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

              {/* Plus button */}
              <Button
                variant={"outline"}
                onClick={imageInputClickHandler}
                disabled={selectedImages.length >= 3} // disable when 3+ images
              >
                <Plus />
              </Button>
            </div>

            {/* Hidden input */}
            <Input
              type="file"
              id="images"
              name="images"
              className="mt-1 hidden"
              accept="image/*"
              ref={imageInputRef}
              onChange={selectedImageHandler}
            />
            {/* Warning message */}
            {selectedImages.length >= 3 && (
              <p className="text-red-500 text-sm mt-2">
                You can only upload up to 3 images.
              </p>
            )}
          </div>

          {/* Upload a video */}
          <div className="mb-2">
            <Label htmlFor="video" className="font-semibold">
              Upload a Video{" "}
              <span className="text-sm font-normal">(optional)</span>
            </Label>

            {/* Video preview and thumbnail */}
            {selectedVideo ? (
              <div className="mt-2 mb-3 p-3 border rounded-md relative">
                <div className="flex items-center gap-3">
                  {videoThumbnail && (
                    <Image
                      src={videoThumbnail}
                      width={80}
                      height={60}
                      alt="Video thumbnail"
                      className="rounded-md object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium truncate">
                      {selectedVideo.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(selectedVideo.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <CircleX
                    size={16}
                    color="#FF2147"
                    className="cursor-pointer"
                    onClick={removeSelectedVideo}
                  />
                </div>
              </div>
            ) : (
              <Input
                type="file"
                id="video"
                name="video"
                className="mt-1"
                accept="video/*"
                ref={videoInputRef}
                onChange={handleVideoSelect}
              />
            )}
          </div>

          <Button className={"w-1/2 block mx-auto mt-8"} type="submit">
            Next
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ManualBiddingProposalForm;
