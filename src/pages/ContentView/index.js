import React from 'react';
import { PlansView } from './PlansView';
import { CircularProgress } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useDataPlans } from '../../context/plans.context';
import planoP from '../../assets/small_plan.svg';
import planoM from '../../assets/medium_plan.svg';
import planoTurbo from '../../assets/large_plan.svg';

import {
  Container,
  ButtonNavigation,
  CarouselContainer,
  CarouselView,
  PlanCardContainer,
  LoadingContainer
} from './styles';

const PlansCarouselView = () => {
  const { allPlans, scrollTo, carouselRef } = useDataPlans();
  const plansImages = {
    'Plano P': planoP,
    'Plano M': planoM,
    'Plano Turbo': planoTurbo
  };

  return (
    <Container>
      {allPlans.length > 0 ? (
        <>
          <ButtonNavigation onClick={() => scrollTo((266 + 14) * -1)}
            className="leftArrow">
            <ArrowBackIosIcon />
          </ButtonNavigation>

          <CarouselContainer ref={carouselRef}>
            <CarouselView size={allPlans.length}>
              {allPlans.map(plan => {
                const image = plansImages[plan.name];
                return (
                  <PlanCardContainer key={`plan_${plan.id}`}>
                    <PlansView plan={plan} image={image} />
                  </PlanCardContainer>
                );
              })}
            </CarouselView>
          </CarouselContainer>

          <ButtonNavigation onClick={() => scrollTo(266 + 14)}
            className="rightArrow">
            <ArrowForwardIosIcon />
          </ButtonNavigation>
        </>
      ) : (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      )}
    </Container>

  );
};

export default PlansCarouselView;
