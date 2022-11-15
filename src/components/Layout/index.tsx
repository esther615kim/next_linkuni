import Button from "../common/Button";
import { gLogin } from "./../../firebase/firebase.admin";
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
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    console.log("login");
    gLogin();
  };

  // use Button component
  const logInBtn = (
    <Button onClick={handleLogin}>
      <div className="flex mr-1 md:mr-2">
        <h3 className="mr-2">Login</h3>
        <UserCircleIcon className="w-6 h-6 text-white" />
      </div>
    </Button>
  );
  const logOutBtn = (
    <Button onClick={() => console.log("logout!")}>
      <div className="flex mr-1 md:mr-2">
        <h3 className="mr-2">Logout</h3>
        <UserCircleIcon className="w-6 h-6 text-white" />
      </div>
    </Button>
  );

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
        {user ? logOutBtn : logInBtn}
        {FavListBtn}
      </div>
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
};
