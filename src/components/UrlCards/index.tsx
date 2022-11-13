import { UrlCardData } from "../../data/mockData";
import { startScraping } from "../../utils/index";
import SingleCard from "./SingleCard";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

type Props = {
  cardsData: UrlCardData[];
};

export const UrlCards = function ({ cardsData }: Props) {
  // WEB SCRAPING

  // startScraping(
  //   "https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually"
  // );

  return (
    <div className="w-full p-5 bg-gray-100">
      <h3 className="pl-2 text-lg font-bold align-left">
        {cardsData[0].category.toUpperCase()}
      </h3>
      {/* CARD */}
      <ul className="flex overflow-x-scroll md:overflow-x-hidden flex-nowrap">
        {cardsData.map((card) => (
          <SingleCard key={card.id} cardData={card} />
        ))}
      </ul>
    </div>
  );
};
