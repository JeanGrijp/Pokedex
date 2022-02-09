export const handleClickColor = (element) => {
  if (element.types[0].type.name === 'grass') {
    setCurrentPokemon({ ...element, color: '#21610B' });
    return '#21610B';
  }
  if (element.types[0].type.name === 'water') {
    setCurrentPokemon({ ...element, color: '#08088A' });

    return '#08088A';
  }
  if (element.types[0].type.name === 'bug') {
    setCurrentPokemon({ ...element, color: '#5FB404' });

    return '#5FB404';
  }
  if (element.types[0].type.name === 'fire') {
    setCurrentPokemon({ ...element, color: '#F78181' });

    return '#F78181';
  }
  if (element.types[0].type.name === 'normal') {
    setCurrentPokemon({ ...element, color: '#585858' });

    return '#585858';
  }
  if (element.types[0].type.name === 'ground') {
    setCurrentPokemon({ ...element, color: '#785746' });

    return '#785746';
  }
  if (element.types[0].type.name === 'poison') {
    setCurrentPokemon({ ...element, color: '#54129B' });

    return '#54129B';
  }
  if (element.types[0].type.name === 'electric') {
    setCurrentPokemon({ ...element, color: '#BBB92B' });

    return '#BBB92B';
  }
  if (element.types[0].type.name === 'fairy') {
    setCurrentPokemon({ ...element, color: '#CEDB8C' });

    return '#CEDB8C';
  }
  if (element.types[0].type.name === 'fighting') {
    setCurrentPokemon({ ...element, color: '#DD7180' });

    return '#DD7180';
  }
  if (element.types[0].type.name === 'psychic') {
    setCurrentPokemon({ ...element, color: '#9A953B' });

    return '#9A953B';
  }
  if (element.types[0].type.name === 'rock') {
    setCurrentPokemon({ ...element, color: '#5A4B2F' });

    return '#5A4B2F';
  }
  if (element.types[0].type.name === 'ghost') {
    setCurrentPokemon({ ...element, color: '#2E034D' });

    return '#2E034D';
  }
  if (element.types[0].type.name === 'dragon') {
    setCurrentPokemon({ ...element, color: '#570D07' });

    return '#570D07';
  }
  if (element.types[0].type.name === 'flying') {
    setCurrentPokemon({ ...element, color: '#817A71' });

    return '#817A71';
  }
  if (element.types[0].type.name === 'ice') {
    setCurrentPokemon({ ...element, color: '#368B8E' });

    return '#368B8E';
  }
  if (element.types[0].type.name === 'dark') {
    setCurrentPokemon({ ...element, color: '#122626' });

    return '#122626';
  }
  if (element.types[0].type.name === 'steel') {
    setCurrentPokemon({ ...element, color: '#6E6E6E' });

    return '#6E6E6E';
  }
};
