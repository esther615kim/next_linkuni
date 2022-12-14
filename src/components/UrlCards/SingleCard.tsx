import { UrlCardData } from "../../data/mockData";
import Link from "next/link";

type Props = {
  cardData: UrlCardData;
};

const SingleCard = ({ cardData }: Props) => {
  return (
    // todo: card width - fixed
    <li className="pt-2 m-1 bg-white shrink-0 rounded-lg shadow-md md:w-60 w-40 min-w-60 hover:shadow-gray-400 sm:pt-5 md:m-2 dark:bg-slate-800">
      <Link href={cardData.url}>
        <div className="p-1 pt-5 md:p-1">
          <h3 className="h-10 mt-2 overflow-hidden text-sm tracking-tight font-meSdium text-slate-900 dark:text-white">
            {cardData.title}
          </h3>
          <p className="h-4 pb-1 overflow-hidden text-xs break-all md:pb-2 text-slate-500 dark:text-slate-400">
            {cardData.url}
          </p>
        </div>
      </Link>
      {/* ICONS */}
      <div className="flex justify-end px-1 mt-2 bg-slate-100">Icons</div>
    </li>
  );
};

export default SingleCard;
