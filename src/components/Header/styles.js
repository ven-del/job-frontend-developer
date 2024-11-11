import styled from 'styled-components';


const HeaderContainer = styled.header`
  width: Fixed (1,440px)px;
  height: Hug (420px)px;
  min-height: 140px;
  max-height: 420px;
  gap: 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  margin-bottom: 30px;
  background-color: #F1F5F9;
`;

const Logo = styled.div`
  width: 306.08px;
  height: 38.84px;
  gap: 0px;
  opacity: 0px;
  margin-bottom: 20px;
  opacity: 1;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.h1`
  font-family: Playfair Display;
  font-size: 64px;
  font-weight: 700;
  line-height: 72px;
  text-align: center;
  max-width: 880px;
  margin-bottom: 20px;
`

const Caption = styled.p`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  height: 60px;
  max-width: 700px;
  color: #475569;
  margin-top: 10px;
`

export { HeaderContainer, Logo, Title, Caption };