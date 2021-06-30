import React, {
  memo,
  createContext,
  useState,
  useContext,
  ReactNode,
} from "react";
import { User } from "views/project-list/search-pannel";
import * as auth from "utils/auth-provider";

const AuthContext = createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => void;
    }
  | undefined
>(undefined);

// devtool
AuthContext.displayName = "AuthContext";

interface AuthForm {
  username: string;
  password: string;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => {
    // user => setUser(user)
    // point free
    return auth.login(form).then(setUser);
  };
  const register = (form: AuthForm) => {
    return auth.register(form).then(setUser);
  };
  const logout = () => {
    auth.logOut().then(() => setUser(null));
  };
  return (
    <AuthContext.Provider
      children={children}
      value={{ login, register, logout, user }}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used in AuthProvider");
  }

  return context;
};
