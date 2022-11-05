import Head from "next/head";
import { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Layout = function ({
  title = "Linkuni",
  children,
  ...styleProps
}: Props) {
  // add context- useAuth signOut, loading, user,signInWithGoogle => onClick

  // to-do - move to useAuth
  const [user, setUser] = useState<string | null>("null");

  // use Button component
  const logInBtn = <button>Login</button>;

  const logOutBtn = <button>LogOut</button>;

  return (
    <div {...styleProps}>
      <Head>{title}</Head>
      {/* TOP NAV */}
      <div>{user ? logOutBtn : logInBtn}</div>
      {children}
    </div>
  );
};
