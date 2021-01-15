import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Header } from './styles';

const HeaderNavigator = () => (
  <Container>
    <Header maxWidth="lg">
      <img src={logoImg} alt="HostGatorLogo" />
    </Header>
  </Container>
);

export default HeaderNavigator;
