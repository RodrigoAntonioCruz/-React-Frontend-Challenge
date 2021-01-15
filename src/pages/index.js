import React from 'react';

import HostGatorHeader from '../components/header-nav';
import Header from './Header';


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



      </MainPage>
    </AppProvider>
  )
};

export default Index;
