import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Google Sign In
  const signInWithGoogle = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, provider);
    return result.user;
  };

  // 🔓 Logout
  const logout = async () => {
  setLoading(true);
  await signOut(auth);
  setLoading(false);
  };

  // 👀 Observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    signInWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;