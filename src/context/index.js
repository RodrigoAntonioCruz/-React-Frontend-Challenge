import React from 'react';
import { ContextProvider } from './plans.context';

const AppProvider = ({ children }) => (
  <ContextProvider>
    {children}
  </ContextProvider>
);

export default AppProvider;
