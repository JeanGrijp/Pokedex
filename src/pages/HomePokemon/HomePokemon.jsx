import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ChoosePokemon from '../ChoosePokemon/ChoosePokemon';
import DadosGet from '../DadosGet/DadosGet';
import {
  ContainerHomePokemon, PokemonsList, ListGuidePokemons, ListCardPokemons,
} from './HomePokemon.style';

function HomePokemon() {
  return (
    <ContainerHomePokemon>
      {/* <PokemonsList>
        <ListGuidePokemons className="ListGuide">
          <section className="center">

            <DadosGet />
          </section>
        </ListGuidePokemons>
        <ListCardPokemons>
          <ChoosePokemon />
        </ListCardPokemons>
      </PokemonsList> */}
    </ContainerHomePokemon>
  );
}

export default HomePokemon;
