import { useContext } from 'react';
import { CardContext } from '../contexts/Card/Card';

const usePokemon = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('usePokemons must be used within a CardProvider.');
  }

  return context;
};

export default usePokemon;
