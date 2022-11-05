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
  const logInBtn = <button>Login</button>;

  const logOutBtn = <button>LogOut</button>;

  console.log("user", user);
  return (
    <div
      className="p-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
      //   {...styleProps}
    >
      <Head>{title}</Head>
      {/* TOP NAV */}
      <div className="p-2 shadow-md bg-slate-900 dark:bg-white text-slate-900 dark:text-white">
        {user ? logOutBtn : logInBtn}
      </div>
      {children}
    </div>
  );
};
