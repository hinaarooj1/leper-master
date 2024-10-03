// context/UserContext.js
import {
  createContext,
  useState,
  useContext,
  useMemo,
  useReducer,
} from "react";

const defaultValue = {
  name: "",
  walletAddress: "",
  links: [],
};

const UserContext = createContext(null);

export { UserContext };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultValue);

  const value = { user, totalCount: 54, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
