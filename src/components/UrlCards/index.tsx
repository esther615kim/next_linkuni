import { UrlCardData } from "../../data/mockData";
import { startScraping } from "../../utils/index";
import SingleCard from "./SingleCard";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import React, { useState } from "react";

type Props = {
  cardsData: UrlCardData[];
};

export const UrlCards = function ({ cardsData }: Props) {
  const [urlData, seturlData] = useState<UrlCardData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    seturlData(cardsData);
    setLoading(false);
    console.log("cards loaded");
  }, [cardsData]);

  return (
    <div className="w-full p-5">
      <h3 className="pl-2 text-lg font-bold align-left">
        Category name
        {/* {cardsData[0]?.category.toUpperCase()} */}
      </h3>
      {/* CARD */}
      {/* <ul className="flex overflow-x-scroll md:overflow-x-hidden flex-nowrap">
        {cardsData.length ? (
          cardsData.map((card) => <SingleCard key={card.id} cardData={card} />)
        ) : (
          <p className="font-medium text-gray-800 text-semibold">
            You have not saved any links yet.
          </p>
        )}
      </ul> */}
    </div>
  );
};

// WEB SCRAPING

// startScraping(
//   "https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually"
// );
