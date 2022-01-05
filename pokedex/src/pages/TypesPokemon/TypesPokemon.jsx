import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { namePokemons } from './names';
import { ContainerTypesPokemons } from './TypesPokemon.style';

const TypesPokemon = (props) => {
	const [listaPokemons, setlistaPokemons] = useState([]);
	const [listaTypesPokemons, setlistaTypesPokemons] = useState([]);
	const [type, settype] = useState('');

	const dataImg = async () => {
		// for (let i of namePokemons) {
		await axios.get('https://pokeapi.co/api/v2/pokemon/' + props.index).then(
			(resposta) => {
				settype(`${resposta.data.types[0].type.name}`);
				// setlistaPokemons([...listaTypesPokemons, resposta.data.types[0].type.name]);
				// console.log( `Pokemon ${i} tem ` , resposta.data);
			}
		).catch((e) => console.log('error', e));
		// }
		
	};

	useEffect(() => {
		dataImg();
	}, []);


	return (
		<div>
			<ContainerTypesPokemons>
				{type}
			</ContainerTypesPokemons>
		</div>
	);
};

export default TypesPokemon;
