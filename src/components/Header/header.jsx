import React from 'react';
import { HeaderContainer, Logo, Title, Caption } from './styles';
import logoSrc from '../../assets/logo.svg';

const Header = () => (
    <HeaderContainer>
      <Logo src={logoSrc} />
      <Title>Explore as últimas notícias sobre tecnologia da web</Title>
      <Caption>Selecionamos todas as notícias sobre tecnologia<br></br>produzidas na web para você. Aproveite, foi tudo feito com dedicação.</Caption> 
    </HeaderContainer>

  );

export default Header;