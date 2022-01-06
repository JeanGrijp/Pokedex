import styled from 'styled-components';

export const ContainerPokedex = styled.section`
  background-color: ${(props) => props.color};
  width: 40%;
  height: 40%;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid white;
  margin: 15px;
  border-radius: 38px 38px 38px 38px;  


`;

export const DadosLi = styled.article`
  height: 2vh;
  color: white;
  font-size: 1rem;
  margin: 15px;

`;

export const ImagemB = styled.img`
  width: 50%;
  height: 50%;
`;

export const TextsNameType = styled.section`
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: white;
  }

  h6 {
    color: white;
  }
`;

export const CenterCards = styled.section`
  
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;
