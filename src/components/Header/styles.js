import styled from 'styled-components';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5; // Cor de fundo opcional
`;

const Logo = styled.img`
  /* Logo */
  width: 120px; // Tamanho do logo
  height: auto;
  src: '../../assets/logo.svg';
`;

export { HeaderContainer, Logo };