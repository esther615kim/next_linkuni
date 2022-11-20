import { UrlCardData } from "../../data/mockData";
import { db } from "../../firebase/firebase.admin";
import { startScraping } from "../../utils/index";
import SingleCard from "./SingleCard";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { collection, query } from "firebase/firestore";
import { useEffect } from "react";
import React, { useState } from "react";

type Props = {
  cardsData: UrlCardData[];
};

export const UrlCards = function ({ cardsData }: Props) {
  const [urlData, seturlData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("let's make cards", cardsData);
  }, []);

  return (
    // map div per category
    <div className="w-full p-5">
      <h3 className="pl-2 text-lg font-bold align-left">
        Category name
        {cardsData[0]?.category.toUpperCase()}
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
