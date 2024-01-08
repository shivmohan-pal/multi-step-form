import React, { createContext, useContext, useState } from "react";

// const initialValues = {};

const TabContext = createContext<{
  index: Number;
  handlePrev:Function;
  handleNext:Function;
} | null>(null);

const TabProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [index, setIndex] = useState(0);
 
  const handlePrev = () => {
    setIndex((prev) => prev - 1);
  }
  const handleNext = () => {
    setIndex((prev) => prev + 1);
  }
  return (
    <TabContext.Provider value={{ index, handlePrev, handleNext }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabIndex = () => {
  return useContext(TabContext);
};

export default TabProvider;
