import { auth } from "config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProps {
  children: React.ReactElement;
}

interface IContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  signUp: (email: string, password: string) => Promise<unknown>;
  signIn: (email: string, password: string) => Promise<unknown>;
  signOutUser: () => Promise<void>;
}

const initialContext = {
  user: null,
  setUser: function (value: React.SetStateAction<User | null>): void {
    throw new Error("Function not implemented.");
  },
  signUp: function (email: string, password: string): Promise<unknown> {
    throw new Error("Function not implemented.");
  },
  signIn: function (email: string, password: string): Promise<unknown> {
    throw new Error("Function not implemented.");
  },
  signOutUser: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
};

export const AuthContext = React.createContext<IContext>({ ...initialContext });

const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = React.useState<User | null>(null);

  const signUp = async (email: string, password: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const userCredential: UserCredential =
          await createUserWithEmailAndPassword(auth, email, password);

        console.log("user created", userCredential.user);

        setUser(userCredential.user);
        resolve(userCredential.user);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  const signIn = async (email: string, password: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const userCredential: UserCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        setUser(userCredential.user);
        resolve(userCredential.user);
        return;
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, signUp, signIn, signOutUser }}
    >
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
