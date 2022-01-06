import { createContext, useState } from 'react';

export const CardContext = createContext();

export function CardContextProvider() {
  const [currentPokemon, setCurrentPokemon] = useState(null);

  return (
    <CardContext.Provider value={{ currentPokemon, setCurrentPokemon }} />
  );
}
