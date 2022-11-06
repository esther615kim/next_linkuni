import { UrlCardData } from "../../data/mockData";

type Props = {
  cardData: UrlCardData;
};

const SingleCard = ({ cardData }: Props) => {
  return (
    <div className="w-40 m-2 overflow-x-auto bg-purple-200 rounded-lg shadow-md hover:shadow-gray-400 sm:pt-5 sm:m-1 md:w-1/5 dark:bg-slate-800 ring-1 ring-slate-900/5">
      <div className="mt-10 xs-mt-5 bg-gray-50">
        <h3 className="h-12 mt-2 overflow-hidden text-sm tracking-tight font-meSdium md:p-1 text-slate-900 dark:text-white">
          {cardData.title}
        </h3>
        <p className="h-4 px-1 pb-1 overflow-hidden text-xs break-all md:pb-1 text-slate-500 dark:text-slate-400">
          {cardData.url}
        </p>
        {/* ICONS */}
        <div className="px-1 mt-2 bg-slate-100">Icons</div>
      </div>
    </div>
  );
};

export default SingleCard;
