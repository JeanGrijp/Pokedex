import React, { createContext, useState } from 'react';

export const CardContext = createContext();

export function CardContextProvider({ children }) {
  const [currentPokemon, setCurrentPokemon] = useState([]);

  return (
    <CardContext.Provider value={{ currentPokemon, setCurrentPokemon }}>{children}</CardContext.Provider>
  );
}
