import React from 'react';
import usePokemon from '../../hooks/Pokemons';
import listaNamesPokemon from '../api/pokemons';
import Description from '../Description/Description';
import TextsPokemons from '../TextsPokemons/TextsPokemons';
import TypesPokemon from '../TypesPokemon/TypesPokemon';
import {
  ContainerPokedex, DadosLi, ImagemB, TextsNameType,
} from './DadosGet.style';

function DadosGet() {
  const {
    flag, listaPokemons, currentPokemon, setCurrentPokemon,
  } = usePokemon();

  const pokemonsFotos = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

  // const getNames = async () => {
  //   const requests = listaNamesPokemon.map((element) => (
  //     api.get(`pokemon/${element[1]}`)
  //   ));

  //   const responses = await Promise.all(requests);
  //   // console.log(responses);

  //   responses.map((element) => {
  //     console.log(element.data);
  //     setlistaPokemons([...listaPokemons, element.data]);
  //   });

  //   setlistaTypesPokemons(responses);
  //   setFlag2(true);
  // };

  // useEffect(() => {
  //   getNames();
  // }, []);

  const handleClickColor = (element) => {
    console.log('listaPokemons é ', listaPokemons);
    console.log('o element é ', element);
    if (element.types[0].type.name === 'grass') {
      return '#21610B';
    }
    if (element.types[0].type.name === 'water') {
      return '#08088A';
    }
    if (element.types[0].type.name === 'bug') {
      return '#5FB404';
    }
    if (element.types[0].type.name === 'fire') {
      return '#F78181';
    }
    if (element.types[0].type.name === 'normal') {
      return '#585858';
    }
    if (element.types[0].type.name === 'ground') {
      return '#785746';
    }
    if (element.types[0].type.name === 'poison') {
      return '#54129B';
    }
    if (element.types[0].type.name === 'electric') {
      return '#BBB92B';
    }
    if (element.types[0].type.name === 'fairy') {
      return '#CEDB8C';
    }
    if (element.types[0].type.name === 'fighting') {
      return '#DD7180';
    }
    if (element.types[0].type.name === 'psychic') {
      return '#9A953B';
    }
    if (element.types[0].type.name === 'rock') {
      return '#5A4B2F';
    }
    if (element.types[0].type.name === 'ghost') {
      return '#2E034D';
    }
    if (element.types[0].type.name === 'dragon') {
      return '#570D07';
    }
    if (element.types[0].type.name === 'flying') {
      return '#817A71';
    }
    if (element.types[0].type.name === 'ice') {
      return '#368B8E';
    }
    if (element.types[0].type.name === 'dark') {
      return '#122626';
    }
    if (element.types[0].type.name === 'steel') {
      return '#6E6E6E';
    }
  };

  console.log('ta reenderizando tudo');
  return (
    <section>
      {flag
        ? listaPokemons.map((element, index) => (

          <ContainerPokedex
            onClick={() => {
              // setCurrentPokemon(element);
              setCurrentPokemon({ ...element, index: listaNamesPokemon[index][3] });
              // console.log('Current Pokemon is ', currentPokemon);
              // console.log(index);
            }}
            // key={`${element.id}${element.name} `}
            color={handleClickColor(element)}
          >
            <TextsNameType>

              <h1>{element.name}</h1>
              {/* <h6>{element.types[0].type.name}</h6> */}
            </TextsNameType>
            {/* <TextsPokemons index={element.id} /> */}
            {/* <ImagemB src={listaNamesPokemon[index][3]} /> */}
          </ContainerPokedex>
        ))
        : <section>buscando...</section>}

    </section>
  );
}

export default DadosGet;
