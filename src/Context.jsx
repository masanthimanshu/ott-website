import { useState, createContext, useContext, useEffect } from "react";

// Context created here
const Context = createContext({});

// Context provider created below
export const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  class Update {
    constructor() {
      this.UpdateAuth = () => setAuth(!auth);
    }
  }

  useEffect(() => {
    window.onbeforeunload = () => {
      return "";
    };
  }, []);

  return (
    <Context.Provider value={{ auth, Update }}>{children}</Context.Provider>
  );
};

// Custom hook to update context data
export function UpdateContext() {
  const { Update } = useContext(Context);
  const Updater = new Update();

  return Updater;
}

// Custom hook to read context data
export function ReadContext() {
  const { auth } = useContext(Context);

  const value = {
    auth,
  };

  return value;
}
