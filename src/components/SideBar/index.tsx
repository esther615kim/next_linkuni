// FIX categories type
import Link from "next/link";

export const SideBar = function ({ categories }) {
  return (
    <div className="absolute left-0 my-5 w-min-50 rounded-r-lg md:w-1/5 h-fit drop-shadow-lg bg-yellow-200 px-2 py-5">
      <ul>
        {categories &&
          categories.map((li: string, i: number) => (
            <li className="pl-2 font-medium" key={i}>
              {/* HOW TO ADD PROPS with LINK? */}
              <Link href={li}>{li}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
