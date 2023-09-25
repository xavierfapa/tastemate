import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from "react";
import { Match } from "../Interfaces";

type MatchContextType = {
  matches: Match[];
  setMatches: Dispatch<SetStateAction<Match[]>>;
};

export const MatchContext = createContext<MatchContextType | undefined>(undefined);

export const useMatch = () => {
  const context = useContext(MatchContext);
  if (!context) {
    throw new Error("useMatch must be used within a MatchProvider");
  }
  return context;
};

export const MatchProvider = ({ children }: { children: ReactNode }) => {
  const [matches, setMatches] = useState<Match[]>([]);

  return (
    <MatchContext.Provider value={{ matches, setMatches }}>
      {children}
    </MatchContext.Provider>
  );
};
