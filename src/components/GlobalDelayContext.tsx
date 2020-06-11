import React, { createContext, useContext, useRef } from 'react';

type GlobalDelayContextValue = {
  getCurrentCssDelay(): string;
  registerAnimation(duration: number, delayToNextAnimation?: number): void;
};

const throwProviderError = () => {
  throw new Error(
    'You cannot call `useGlobalDelay` without a GlobalDelayProvider'
  );
};

const GlobalDelayContext = createContext<GlobalDelayContextValue>({
  getCurrentCssDelay: throwProviderError,
  registerAnimation: throwProviderError,
});

export const useGlobalDelay = () => {
  return useContext(GlobalDelayContext);
};

type GlobalDelayProviderProps = {
  children: React.ReactNode;
};

export const GlobalDelayProvider = ({ children }: GlobalDelayProviderProps) => {
  const delayRef = React.useRef<number>(0);

  const getCurrentCssDelay = () => {
    return `${delayRef.current}ms`;
  };

  const registerAnimation = (
    duration: number,
    delayToNextAnimation?: number
  ) => {
    delayRef.current += duration + (delayToNextAnimation || 0);
  };

  return (
    <GlobalDelayContext.Provider
      value={{ getCurrentCssDelay, registerAnimation }}
    >
      {children}
    </GlobalDelayContext.Provider>
  );
};
