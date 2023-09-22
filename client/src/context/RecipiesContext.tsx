import { createContext, useState, useContext, ReactNode } from "react";
import { Recipie } from "../Interfaces";

export const RecipiesContext = createContext({});

export const useRecipies = () => {
  const context = useContext(RecipiesContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const RecipiesProvidier = ({ children }: { children: ReactNode }) => {
  const [otherRecipies, setOtherRecipies] = useState<Recipie[]>([])

  return (
    <RecipiesContext.Provider value={{otherRecipies, setOtherRecipies}}>
      {children}
    </RecipiesContext.Provider>
  )
}

export default RecipiesProvidier