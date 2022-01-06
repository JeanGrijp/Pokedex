import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListaNamesPokemons from '../api/pokemons';
import Description from '../Description/Description';
import TextsPokemons from '../TextsPokemons/TextsPokemons';
import TypesPokemon from '../TypesPokemon/TypesPokemon';
import { ContainerPokedex, DadosLi, ImagemB } from './DadosGet.style';

function DadosGet() {
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [dadosAPI, setdadosAPI] = useState({});
  const [listaPokemons, setlistaPokemons] = useState([]);
  const [listaTypesPokemons, setlistaTypesPokemons] = useState([]);

  const pokemonsFotos = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

  const response = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokedex/1').then(
      (resposta) => {
        setdadosAPI(resposta.data);

        setFlag(true);
      },
    ).catch((e) => console.log('error', e));
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <></>
  //   <>
  //     {
  // 			flag
  // 			  ? dadosAPI.pokemon_entries.map((element, index) => {
  // 			    let num = '';
  // 			    const aux = index.toString();
  // 			    if (aux === '9') {
  // 			      num = `0${index + 1}`;
  // 			      console.log(num);

  // 			      console.log(index + 1);
  // 			    } else if (aux === '99') {
  // 			      num = `${index + 1}`;
  // 			      console.log(num);
  // 			    } else if (aux.length === 1) {
  // 			      num = `00${index + 1}`;
  // 			      console.log(num);
  // 			      console.log(index + 1);
  // 			    } else if (aux.length === 2) {
  // 			      num = `0${index + 1}`;
  // 			      console.log(index + 1);
  // 			      console.log(num);
  // 			    } else if (aux.length === 3) {
  // 			      num = `${index + 1}`;
  // 			      console.log(num);
  // 			      console.log(index + 1);
  // 			    }
  // 			    return (

  // <ContainerPokedex key={index + 3}>
  //   {/* <DadosLi key={index} id={index}>{element.pokemon_species.name}</DadosLi>
  //   ,
  //   <p>{index + 1}</p>
  //   <TypesPokemon index={index + 1} />
  //   ,
  //   {/* <TextsPokemons index={index + 1}></TextsPokemons> */}
  //   {/* <ImagemB src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="B"/> */}
  //   <ImagemB src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`} alt="B" />
  // </ContainerPokedex>
  // 			    );
  // 			  })
  // 			  : <p>Renderizando</p>
  // 		}
  //   </>
  );
}

export default DadosGet;
