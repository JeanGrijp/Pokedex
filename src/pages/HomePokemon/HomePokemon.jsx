import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DadosGet from '../DadosGet/DadosGet';
import { ContainerHomePokemon, PokemonsList, ListGuidePokemons } from './HomePokemon.style';

function HomePokemon() {
  return (
    <ContainerHomePokemon>
      <PokemonsList>
        <ListGuidePokemons className="ListGuide">
          <section className="center">

            <DadosGet />
          </section>
        </ListGuidePokemons>
        <ListGuidePokemons />
      </PokemonsList>
    </ContainerHomePokemon>
  );
}

export default HomePokemon;