import styled from 'styled-components';
import media from '../../utils/media';

export const ContainerHomePokemon = styled.main`

  ${media.mobile} {
    
  }

  ${media.desktop} {
    width: 100%;
    height: 100vh;
    background-color: #210B61;
    background-color: ${(props) => props.theme.colors.bgSecond};
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export const PokemonsList = styled.section`

  ${media.mobile} {

  }

  ${media.desktop} {
    position: relative;
    width: 80%;
    height: 80%;
    background-color: #380B61;
    border-radius: 26px 26px 26px 26px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 22px -3px rgba(0,0,0,0.75);

  }

`;

export const ListGuidePokemons = styled.section`

  ${media.mobile} {

  } 

  ${media.desktop} {
    ::-webkit-scrollbar {
    width: 15px;   
    height: 10px;   
    border-radius: 10px 0px 10px 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: white; 
    border-radius: 10px 10px 0px 0px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color:gray;    
    border-radius: 20px;       
    border: 3px solid gray;  
  }
    position: relative;
    margin: 5%;
    width: 20%;
    height: 60%;
    border-radius: 26px 26px 26px 26px;
    background-color: #F8E0E0;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 0px 22px -3px rgba(0,0,0,0.75);
  
    .center {
      display: flex;
      /* flex-wrap: wrap; */
      justify-content: center;
      align-items: center;
    }
  }

`;

export const ListCardPokemons = styled.section`

  ${media.mobile} {

  }

  ${media.desktop} {
    position: relative;
    margin: 5%;
    width: 60%;
    height: 60%;
    border-radius: 26px 26px 26px 26px;
    background-color: #210B61;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 0px 22px -3px rgba(0,0,0,0.75);

    .center {
      display: flex;
      /* flex-wrap: wrap; */
      justify-content: center;
      align-items: center;
    }
  }
  /* ::-webkit-scrollbar {
  width: 15px;   
  height: 10px;   
  border-radius: 10px 0px 10px 10px;
}

::-webkit-scrollbar-track {
  background: white; 
  border-radius: 10px 10px 0px 0px;
}

::-webkit-scrollbar-thumb {
  background-color:gray;    
  border-radius: 20px;       
  border: 3px solid gray;  
} */

`;
