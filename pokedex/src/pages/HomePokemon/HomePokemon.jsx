import React from 'react';
import { ContainerHomePokemon, PokemonsList, ListGuidePokemons } from './HomePokemon.style';

function HomePokemon() {
  return (
    <ContainerHomePokemon>
      <PokemonsList>
        <ListGuidePokemons />
      </PokemonsList>
    </ContainerHomePokemon>
  );
}

export default HomePokemon;
