import Link from "next/link";

const TileCards = ({ title, icon, url }) => {
  return (
    <Link
      href={url}
      className="bg-[#FFF0E6] h-60 lg:h-72 rounded-md w-full place-items-center place-content-center shadow"
    >
      <p className="text-4xl text-orange-600">{icon}</p>
      <p className="text-gray-700 mt-2 font-bold">{title}</p>
    </Link>
  );
};

export default TileCards;
