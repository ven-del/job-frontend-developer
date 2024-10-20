import React from 'react';
import { HeaderContainer, Logo } from './styles';
import logoSrc from '../../assets/logo.svg';

const Header = () => (
    <HeaderContainer>
      <Logo src={logoSrc} />
    </HeaderContainer>
  );

export default Header;