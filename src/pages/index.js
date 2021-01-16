import React from 'react';
import HostGatorHeader from '../components/header-nav';
import Header from './Header';
import ContentView from './ContentView';
import SelectPeriodView from './SelectPeriodView';
import Footer from './Footer';
import AppProvider from '../context';
import {
  MainPage,
  HeaderContainer,
  ViewContainer
} from './styles';

const Index = () => {
  return (
    <AppProvider>
      <MainPage>

        <HeaderContainer>
          <HostGatorHeader />
          <Header />
        </HeaderContainer>

          <ViewContainer>

            <SelectPeriodView/>
            <ContentView />

          </ViewContainer>

        <Footer>
        </Footer>

      </MainPage>
    </AppProvider>
  )
};

export default Index;
