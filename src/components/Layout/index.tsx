import Button from "../common/Button";
import { HeartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { useState } from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout = function ({
  title = "Linkuni",
  children,
}: //   ...styleProps
Props) {
  // add context- useAuth signOut, loading, user,signInWithGoogle => onClick

  // to-do - move to useAuth
  const [user, setUser] = useState<string | null>(null);

  // use Button component
  const logInBtn = (
    // IconButton으로 쪼갤 방법은..
    <Button onClick={() => console.log("login!")}>
      <UserCircleIcon className="w-6 h-6 text-white" />
    </Button>
  );
  const logOutBtn = <button>LogOut</button>;

  const FavListBtn = (
    <Button onClick={() => console.log("fav list")}>
      <HeartIcon className="w-6 h-6 mr-4 text-white" />
    </Button>
  );

  return (
    <div
    //   {...styleProps}
    >
      <Head>{title}</Head>
      {/* TOP NAV */}
      <div className="flex justify-end p-4 text-white shadow-md bg-slate-900 dark:bg-white dark:text-slate-900">
        {FavListBtn}
        {user ? logOutBtn : logInBtn}
      </div>
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
};
