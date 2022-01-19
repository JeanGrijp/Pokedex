import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import ListaNamesPokemons from '../api/pokemons';
import Description from '../Description/Description';
import TextsPokemons from '../TextsPokemons/TextsPokemons';
import TypesPokemon from '../TypesPokemon/TypesPokemon';
import {
  ContainerPokedex, DadosLi, ImagemB, TextsNameType,
} from './DadosGet.style';

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

  // const [type, settype] = useState('');

  // const dataImg = async () => {
  //   // for (let i of namePokemons) {
  //   await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.index}`).then(
  //     (resposta) => {
  //       settype(`${resposta.data.types[0].type.name}`);
  //       // setlistaPokemons([...listaTypesPokemons, resposta.data.types[0].type.name]);
  //       // console.log( `Pokemon ${i} tem ` , resposta.data);
  //     },
  //   ).catch((e) => console.log('error', e));
  //   // }
  // };

  // useEffect(() => {
  //   dataImg();
  // }, []);

  // const [cor, setcor] = useState('#FFFFFF');

  // useEffect(
  //   () => {
  //     if (type === 'fire') {
  //       setcor('#FA5858');
  //     } else if (type === 'grass') {
  //       setcor('#81F781');
  //     } else if (type === 'water') {
  //       setcor('#A9D0F5');
  //     } else if (type === 'bug') {
  //       setcor('#BCF5A9');
  //     }
  //   },
  //   [type],
  // );

  // useEffect(() => {
  //   const retornoMapDadosAPI = dadosAPI.pokemon_entries.map((element, index) => {
  //     let num = '';
  //     const aux = index.toString();
  //     if (aux === '9') {
  //       num = `0${index + 1}`;
  //       console.log(num);
  //       console.log(index + 1);
  //     } else if (aux === '99') {
  //       num = `${index + 1}`;
  //       console.log(num);
  //     } else if (aux.length === 1) {
  //       num = `00${index + 1}`;
  //       console.log(num);
  //       console.log(index + 1);
  //     } else if (aux.length === 2) {
  //       num = `0${index + 1}`;
  //       console.log(index + 1);
  //       console.log(num);
  //     } else if (aux.length === 3) {
  //       num = `${index + 1}`;
  //       console.log(num);
  //       console.log(index + 1);
  //     }
  //     setlistaPokemons([...listaPokemons, [element.pokemon_species.name, index + 1, `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`]]);
  //   });
  // }, []);

  return (
    <section>
      {flag
        ? ListaNamesPokemons.map((element) => (
          <ContainerPokedex color={
            () => {
              if (element[2] === 'grass') {
                return '#21610B';
              }
              // if (element[2] === 'fire') {
              //   return '#8A0808';
              // }
              if (element[2] === 'water') {
                return '#08088A';
              }
              if (element[2] === 'bug') {
                return '#5FB404';
              }
              if (element[2] === 'fire') {
                return '#F78181';
              }
              if (element[2] === 'normal') {
                return '#585858';
              }
              if (element[2] === 'ground') {
                return '#785746';
              }
              if (element[2] === 'poison') {
                return '#54129B';
              }
              if (element[2] === 'electric') {
                return '#BBB92B';
              }
              if (element[2] === 'fairy') {
                return '#CEDB8C';
              }
              if (element[2] === 'fighting') {
                return '#DD7180';
              }
              if (element[2] === 'psychic') {
                return '#9A953B';
              }
              if (element[2] === 'rock') {
                return '#5A4B2F';
              }
              if (element[2] === 'ghost') {
                return '#2E034D';
              }
              if (element[2] === 'dragon') {
                return '#570D07';
              }
              if (element[2] === 'flying') {
                return '#817A71';
              }
              if (element[2] === 'ice') {
                return '#368B8E';
              }
              if (element[2] === 'dark') {
                return '#122626';
              }
              if (element[2] === 'steel') {
                return '#6E6E6E';
              }
            }
          }
          >
            <TextsNameType>

              <h1>{element[0]}</h1>
              <h6>{element[2]}</h6>
            </TextsNameType>
            <ImagemB src={element[3]} />
          </ContainerPokedex>
        ))
        : <p>Renderizando</p>}
    </section>
  );
}

export default DadosGet;
