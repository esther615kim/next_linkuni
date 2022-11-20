import { firebaseConfig } from "../firebase/firebase.admin";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext, createContext, useState, ReactNode } from "react";

// GLogin
type AuthUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
};

type UserAuthContextProps = {
  user: AuthUser | null;
  loading: boolean;
  googleLogin: () => void;
  signOut: () => void;
};

const UserAuthContext = createContext<UserAuthContextProps>({
  user: null,
  loading: true,
  googleLogin: () => ({ user: null, credential: null }),
  signOut: () => {},
});

export const AuthUserProvider = function ({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  return (
    <UserAuthContext.Provider value={user}>{children}</UserAuthContext.Provider>
  );
};

export const useAuth = () => useContext(UserAuthContext);
