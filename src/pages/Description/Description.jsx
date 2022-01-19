import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { ContainerTextsPokemons } from './TextsPokemons.style';

const Description = (props) => {
	const [text, setText] = useState([]);
	const [resultTexts, setresultTexts] = useState([]);

	// const dataImg = async () => {
	// 	await axios.get('https://bulbapedia.bulbagarden.net/wiki/' + props.name).then(
	// 		(resposta) => {
	// 			const classeRequest = 'mw-parser-output';
	// 			console.log(resposta);
	// 			// const innet = resposta
	// 			// setText(resposta.data.flavor_text_entries);
	// 		}
	// 	).catch((e) => console.log('error', e));
	// };

	// useEffect(() => {
	// 	dataImg();
	// }, []);

	// useEffect(() => {
	// 	texts.map((element, index) => {
	// 		if (element.language.name === 'en') {

	// 			setresultTexts([...resultTexts, element.flavor_text]);
	// 		}
	// 	});
	// }, [texts]);
  
	
	return (
		<div>
			<>oi</>
		</div>
	);
};

export default Description;
