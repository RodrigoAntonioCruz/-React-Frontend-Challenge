import styled from 'styled-components';

export const Container = styled.div``;


export const FooterContainer = styled.div`
  color: white;
  height: 30px;
  line-height: 1.5;
  font-weight: 300;
  overflow: hidden !important;
`;

export const Content = styled.div`
  height: 100%;
  flex: 1 !important;
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column;
  padding: 0 !important;
`;

export const DescriptionFooter = styled.div`
    @media screen and (min-width: 1024px) {
        button{
          background-color:transparent;
          border:none;
          color: #4480C5;
          position: relative;
          top: -5px;
          cursor: pointer;
          left:300px;
        }

        p {
          position:relative;
          top:-20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          text-decoration: underline;
          font: normal normal normal 12px/12px Montserrat;
          letter-spacing: 0px;
          color: #4480C5;
          opacity: 0.7;
        }
    }

    @media screen and (min-width: 300px) and (max-width: 1024px) {
        button{
          background-color:transparent;
          border:none;
          color: #4480C5;
          position: relative;
          top: -5px;
          cursor: pointer;
        }

        p {
          position:relative;
          top:-5px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          text-decoration: underline;
          font: normal normal normal 12px/12px Montserrat;
          letter-spacing: 0px;
          color: #4480C5;
          opacity: 0.7;
        }

    }

    @media screen and (min-height: 768px) and (max-height: 1050px) {
        button{
          background-color:transparent;
          border:none;
          color: #4480C5;
          position: relative;
          top: -5px;
          cursor: pointer;
        }

        p {
          position:relative;
          top:-5px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          text-decoration: underline;
          font: normal normal normal 12px/12px Montserrat;
          letter-spacing: 0px;
          color: #4480C5;
          opacity: 0.7;
        }

    }

`;

export const DescriptionContent = styled.div`
  max-width: 490px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;


