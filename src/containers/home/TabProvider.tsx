import React, { createContext, useContext, useState } from "react";

// const initialValues = {};

const TabContext = createContext<{
  index: typeof Number;
  setIndex: React.Dispatch<React.SetStateAction<typeof Number>>;
} | null>(null);

const TabProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [index, setIndex] = useState(0);

  return (
    <TabContext.Provider value={{ index, setIndex }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabIndex = () => {
  return useContext(TabContext);
};

export default TabProvider;
