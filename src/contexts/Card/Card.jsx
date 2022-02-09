import React, { createContext, useEffect, useState } from 'react';
import api from '../../api/service';
import listaNamesPokemon from '../../pages/api/pokemons';
import 'babel-polyfill';

export const CardContext = createContext();

export function CardContextProvider({ children }) {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [listaPokemons, setListaPokemons] = useState([]);
  const [listaTypesPokemons, setListaTypesPokemons] = useState([]);
  const [textFlavorPokemon, setTextFlavorPokemon] = useState('');
  const [flag, setFlag] = useState(false);

  const getNames = async () => {
    const requestNames = listaNamesPokemon.map((element) => (
      api.get(`pokemon/${element[1]}`)
    ));
    const requestSpecies = listaNamesPokemon.map((element) => (
      api.get(`pokemon/${element[1]}`)
    ));

    const responseNames = await Promise.all(requestNames);
    const responseSpecies = await Promise.all(requestSpecies);
    const listaAux = [];
    const listaAuxSpecies = [];

    responseNames.map((element) => {
      listaAux.push(element.data);
    });
    responseSpecies.map((element) => {
      listaAuxSpecies.push(element.data);
    });

    const finalList = [...listaAux, ...listaAuxSpecies];
    setListaPokemons(finalList);
    setListaTypesPokemons(responseNames);
    setFlag(true);
  };

  useEffect(() => {
    getNames();
  }, []);

  return (
    <CardContext.Provider
      value={
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      {
        currentPokemon,
        setCurrentPokemon,
        listaPokemons,
        setListaPokemons,
        listaTypesPokemons,
        setListaTypesPokemons,
        flag,
        setFlag,
      }
      }
    >
      {children}
    </CardContext.Provider>
  );
}
