import { UrlCardData } from "../../data/mockData";
import SingleCard from "./SingleCard";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

type Props = {
  cardsData: UrlCardData[];
};

export const UrlCards = function ({ cardsData }: Props) {
  return (
    <div className="w-full p-5 bg-gray-100">
      <h3 className="pl-2 text-lg font-bold align-left">
        {cardsData[0].category.toUpperCase()}
      </h3>
      {/* CARD */}
      <ul className="flex overflow-x-scroll flex-nowrap">
        {cardsData.map((card) => (
          <SingleCard key={card.id} cardData={card} />
        ))}
      </ul>
    </div>
  );
};
