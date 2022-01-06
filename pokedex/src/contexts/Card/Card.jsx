import React, { createContext, useState } from 'react';

export const CardContext = createContext();

export function CardContextProvider() {
  const [currentPokemon, setCurrentPokemon] = useState([]);

  return (
    <CardContext.Provider value={{ currentPokemon, setCurrentPokemon }} />
  );
}
