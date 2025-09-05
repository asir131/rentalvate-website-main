import Image from "next/image";

const NoActiveJobs = ({ imageSource, title, width, height }) => {
  return (
    <div className="max-w-5xl  mx-2 lg:mx-auto my-4 p-4 shadow md:h-64 lg:h-72  flex flex-col gap-4 justify-center items-center rounded-md ">
      <Image
        src={imageSource}
        width={width}
        height={height}
        alt={"image for no active jobs"}
      />
      <p>{title}</p>
    </div>
  );
};

export default NoActiveJobs;
