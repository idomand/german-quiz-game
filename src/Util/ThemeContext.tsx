import React, { createContext, useContext, useState } from "react";

export const useTheme = () => {
  return useContext(themeContextProvider);
};

interface ThemeInterface {
  themeColor: string;
  setThemeColor: any;
}
const themeContextProvider = createContext<ThemeInterface>({
  themeColor: "light",
  setThemeColor: () => {},
});

export default function ThemeContext({ children }: any) {
  const [themeColor, setThemeColor] = useState("light");

  const value = { themeColor, setThemeColor };

  return (
    <themeContextProvider.Provider value={value}>
      {children}
    </themeContextProvider.Provider>
  );
}
