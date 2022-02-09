import React, { useEffect } from 'react';
import usePokemon from '../../hooks/Pokemons';
import listaNamesPokemon from '../api/pokemons';
import { ContainerChoosePokemon, ImagePokemon } from './ChoosePokemon.style';

function ChoosePokemon() {
  const { currentPokemon, listaPokemons, listaTypesPokemons } = usePokemon();
  // console.log('Current Pokemon id', listaNamesPokemon[currentPokemon.id]);
  console.log('ta renderizando o choose');
  useEffect(() => {
    // console.log('renderizou o current');
    // console.log(currentPokemon);
    // console.log('listaPokemons é ', listaPokemons);
    // console.log('listaTypesPokemons é ', listaTypesPokemons);
  }, [currentPokemon]);

  return (

    <ContainerChoosePokemon bgColor={currentPokemon.color}>
      {currentPokemon
        ? <ImagePokemon src={currentPokemon.index} />
        : <section>img</section>}
    </ContainerChoosePokemon>

  );
}

export default ChoosePokemon;
