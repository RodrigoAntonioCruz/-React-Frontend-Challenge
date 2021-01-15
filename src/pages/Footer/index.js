import React, { useState } from 'react';
import './styles.css';
import { Modal } from 'react-responsive-modal';


import {
  Container,
  FooterContainer,
  Content,
  DescriptionFooter
} from './styles'

  const Footer = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
      <>
      <Container>
        <FooterContainer>
          <Content>
           <DescriptionFooter>
            <p>
              <button onClick={onOpenModal}> 
               *Confira as condições da promoção
              </button>
            </p>
           </DescriptionFooter>
          </Content>
        </FooterContainer>
      </Container>

      <Modal open={open} onClose={onCloseModal} center>
       <div className="head"></div>
        <div className="modal-header"> 
          <h2 className="modal-title">Preços promocionais na primeira fatura</h2>
        </div>
          <div className="modal-body">
              <p>
                Os preços promocionais oferecidos pela HostGator se aplicam ao <strong>primeiro período de pagamento</strong>, 
                e estão disponíveis nos ciclos indicados na página de cada produto.<br/>&emsp;
              </p>
              <ul className="ul-body">
                <li>
                   <strong>
                   Renovações:</strong> na renovação do plano, o 
                   <a href="/"> preço regular</a> será cobrado. A renovação será realizada de forma automática, no mesmo ciclo indicado durante a compra. 
                   Para visualizar e/ou alterar essas configurações você pode acessar o seu Portal do Cliente.
                </li>
                <li>
                   <strong>
                   Para quem o desconto é válido: 
                   </strong> 
                   &ensp;descontos válidos para novos clientes e também para quem já é cliente (neste caso apenas para aquisição de um segundo plano de hospedagem). 
                   Não se aplica para renovações, migrações entre contas, upgrades, downgrades, nem para alterações de período de contratação.
                </li>
             </ul><br/>
                <p>
                <strong>Nota:</strong> os planos são pré-pagos, ou seja, você paga o valor integral do serviço no momento da compra. Para fins de comparação, 
                o valor equivalente mensal representa o preço cheio distribuído pela quantidade de meses contratados.
                </p>
          </div>
      </Modal>
    </>
  );
};

export default Footer;
