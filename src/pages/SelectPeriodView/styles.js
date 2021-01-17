import React from 'react';
import styled from 'styled-components';
import * as colors from '../../assets/colors';
import {
  RadioGroup,
  styled as MaterialStyled,
  FormControlLabel,
  Typography
} from '@material-ui/core';


export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -20px;
  padding-bottom: 32px;

  @media screen and (min-width: 980px) {
    margin-top: 10px;
    padding-bottom: 32px;
  }

  @media only screen and (min-width: 1900px) {
      margin-top: 30px;
      
  }
`;

export const SelectPeriodTitle = MaterialStyled(
  ({ ...rest }) => <Typography {...rest} />)({
  color: `${colors.darkBlue}`,
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '26px',
  textAlign: 'center',
  marginBottom: '7px',
});

export const ContentRadio = MaterialStyled(({...rest} ) => <RadioGroup {...rest} />)({
  backgroundColor: colors.white,
  borderRadius: '21px',
  border: `1px solid ${colors.lightBlue}`,
  height: '36px',
  width: '295px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft:'0px',
});

export const RadioButtonPanel = MaterialStyled((
  { active, ...rest }) => <FormControlLabel {...rest} />)({
  backgroundColor: props => (props.active ? `${colors.lightBlue}` : `${colors.white}`),
  borderRadius: '21px',
  height: '34px',
  width: props => (props.active ? '103px' : '95px'),
  marginLeft: 'unset',
  marginRight: 'unset',
  border: props => (props.active ? `1px solid ${colors.lightBlue}` : '0px'),
  color: props => (props.active ? colors.white : `${colors.blue}`),
  fontWeight: props => (props.active ? 700 : 400),
  fontSize: '16px',
  lineHeight: 23,
  '& .MuiRadio-colorSecondary': {
    color: `${colors.skyBlue}`,
    '&.Mui-checked': {
      color: `${colors.white}`
    }
  }
});
