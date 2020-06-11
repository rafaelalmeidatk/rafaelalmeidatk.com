import React, { createContext, useContext, useRef } from 'react';

const LabelledByContext = createContext<string>('');

export const useLabelledBy = () => {
  return useContext(LabelledByContext);
};

type LabelledByProviderProps = {
  labelledBy: string;
  children: React.ReactNode;
};

export const LabelledByProvider = ({
  labelledBy,
  children,
}: LabelledByProviderProps) => {
  return (
    <LabelledByContext.Provider value={labelledBy}>
      {children}
    </LabelledByContext.Provider>
  );
};
