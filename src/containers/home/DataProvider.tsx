import { IState } from "@src/interface/forms";
import React, { createContext, useContext, useState } from "react";

const initialValues = {
  requisitionDetails: {
    gender: "",
    noOfOpenings: 0,
    requisitionTitle: "",
    urgency: "",
  },
  jobDetails: {
    jobDetails: "",
    jobLocation: "",
    jobTitle: "",
  },
  interviewSettings: {
    interviewDuration: "",
    interviewLanguage: "",
    interviewMode: "",
  },
};

export interface IDataProvider {
  state?: typeof initialValues;
  setState?: React.Dispatch<React.SetStateAction<typeof initialValues>>;
} ;


const DataContext = createContext<{
  state?: typeof initialValues;
  setState?: React.Dispatch<React.SetStateAction<typeof initialValues>>;
} | null>(null);

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<typeof initialValues>(initialValues);

  return (
    <DataContext.Provider value={{ state , setState }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export default DataProvider;
