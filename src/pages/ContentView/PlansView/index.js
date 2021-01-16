import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDataPlans } from '../../../context/plans.context';
import {
  Container,
  CardHeader,
  SeparatorLine,
  CardPrices,
  PriceContainer,
  PriceByMonthContainer,
  ButtonContainer,
  TextYearFree,
  IconInfoContainer,
  DiscountContainer,
  DiscountText,
  CardInfo,
  PlanText,
  ImgCard
} from './styles';

export const PlansView = props => {
  const { plan, image } = props;

  const { paymentPeriod } = useDataPlans();

  const priceFormatted = useMemo(() => {
    return Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2
    }).format(plan.cycle[paymentPeriod].priceOrder);
  }, [paymentPeriod, plan.cycle]);

  const priceFormattedWithDiscount = useMemo(() => {
    return Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2
    }).format(
      plan.cycle[paymentPeriod].priceOrder -
      (plan.cycle[paymentPeriod].priceOrder * 40) / 100
    );
  }, [paymentPeriod, plan.cycle]);

  const priceFormattedWithDiscountByMonth = useMemo(() => {
    return Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2
    }).format(
      (plan.cycle[paymentPeriod].priceOrder -
      (plan.cycle[paymentPeriod].priceOrder * 40) / 100) /
      plan.cycle[paymentPeriod].months
    );
  }, [paymentPeriod, plan.cycle]);

  const discountValue = useMemo(() => {
    return Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2
    }).format(
      (plan.cycle[paymentPeriod].priceOrder * 40) / 100
    );
  }, [paymentPeriod, plan.cycle]);

  return (
    <Container highlighted={plan.name === 'Plano M'}>
      <ImgCard>
        <img src={image} alt={`card_header_img_${plan.name}`} />
      </ImgCard>

      <CardHeader>
        <p>{plan.name}</p>
      </CardHeader>

      <SeparatorLine />

      <CardPrices>
        <PriceContainer>
          <span>
            R$ { priceFormatted }
          </span>
          &nbsp;
          R$ { priceFormattedWithDiscount }

          <p>
          equivalente a 
          </p>
        </PriceContainer>

        <PriceByMonthContainer>
          R$ {' '}
          <span>
            { priceFormattedWithDiscountByMonth }
          </span>
          /mês*
        </PriceByMonthContainer>

        <Link to={`/?a=add&pid=${plan.id}&billingcycle=${paymentPeriod}&promocode=PROMOHG40`} >
          <ButtonContainer
            isSelected={plan.name === 'Plano M'}
          >
            Contrate Agora
          </ButtonContainer>
        </Link>

        <TextYearFree>
          1 ano de Domínio Grátis&nbsp;
          <IconInfoContainer />
        </TextYearFree>

        <DiscountContainer>
          <DiscountText>
            economize{' '}
            R$ { discountValue }{' '}
          </DiscountText>
          <span>40% OFF</span>
        </DiscountContainer>
      </CardPrices>

      <SeparatorLine />

      <CardInfo>
        <PlanText>
          <span>{plan.name === 'Plano P' ? 'Para 1 site' : 'Sites Ilimitados'}</span>
        </PlanText>

        <PlanText>
          <span>
            <b>{plan.name === 'Plano Turbo' ? '150' : '100'} GB</b> de Armazenamento
          </span>
        </PlanText>

        <PlanText>
          <span>
            Contas de E-mail <b>Ilimitadas</b>
          </span>
        </PlanText>

        <PlanText>
          <span>
            Criador de Sites{' '}
            <b>
              <u>Grátis</u>
            </b>
          </span>
        </PlanText>

        <PlanText>
          <span>
            Certificado SSL <strong>Grátis</strong> (https)
          </span>
        </PlanText>
      </CardInfo>

    </Container>
  );
};

export default PlansView;
