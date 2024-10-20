import styled from 'styled-components';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5; 
`;

const Logo = styled.div`
  width: 306.08px;
  height: 38.84px;
  gap: 0px;
  opacity: 0px;

  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export { HeaderContainer, Logo };