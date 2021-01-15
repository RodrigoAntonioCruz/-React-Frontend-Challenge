import React from 'react';

import HostGatorHeader from '../components/header-nav';
import Header from './Header';
import Footer from './Footer';

import AppProvider from '../hooks';

import {
  MainPage,
  HeaderContainer
} from './styles';

const Index = () => {
  return (
    <AppProvider>
      <MainPage>

        <HeaderContainer>
          <HostGatorHeader />
          <Header />
        </HeaderContainer>

        <Footer>
        </Footer>

      </MainPage>
    </AppProvider>
  )
};

export default Index;
