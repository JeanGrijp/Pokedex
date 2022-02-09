import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ContainerTextsPokemons } from './TextsPokemons.style.jsx';

function TextsPokemons(props) {
  const [texts, setTexts] = useState([]);
  const [resultTexts, setresultTexts] = useState([]);

  const dataImg = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${props.index}/`).then(
      (resposta) => {
        setTexts(resposta.data.flavor_text_entries);
      },
    ).catch((e) => console.log('error', e));
  };

  useEffect(() => {
    dataImg();
  }, []);

  useEffect(() => {
    texts.slice(0, 15).map((element, index) => {
      if (element.language.name === 'en' && index % 2 !== 0) {
        const aux = element.flavor_text.replace('\n', ' ');
        setresultTexts((prev) => `${prev + aux.replace('\f', ' ')} `);
      }
    });
  }, [texts]);

  return (
    <div>
      <ContainerTextsPokemons>{resultTexts}</ContainerTextsPokemons>
    </div>
  );
}

export default TextsPokemons;
