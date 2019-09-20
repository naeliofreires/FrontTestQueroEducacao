import styled from 'styled-components';

import { UserCircle } from 'styled-icons/boxicons-regular/UserCircle';
import { Exclamation } from 'styled-icons/evil/Exclamation';
import { Whatsapp } from 'styled-icons/fa-brands/Whatsapp';

export const HeaderWrapper = styled.header``;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  height: 70px;
  max-width: 1040px;

  @media (min-width: 700px) {
    justify-content: space-between;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;

  img.logo {
    display: block;
    width: 150px;
    padding: 20px;
  }
`;

export const HeaderHowWork = styled.div`
  padding: 0 20px;
  color: #18acc4;
  font-weight: bold;
  border-right: 1px solid #adadad;
  display: flex;
  flex-direction: column;
  align-items: center;

  > span.desktop {
    display: none;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    > span.mobile {
      display: none;
    }

    > span.desktop {
      display: flex;
    }
  }
`;

export const HeaderContact = styled.div`
  display: none;
  padding: 0 20px;

  @media (min-width: 780px) {
    display: flex;
    align-items: center;
  }
`;

export const HeaderContactBox = styled.div`
  color: #18acc4;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;

  border-left: 1px solid #adadad;
  @media (min-width: 700px) {
    border: none;
  }
`;

export const HeaderUserName = styled.div`
  color: #18acc4;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;

  > span.desktop {
    display: none;
  }

  > span.mobile {
    order: 2;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    > span.mobile {
      display: none;
    }

    > span.desktop {
      display: flex;
    }
  }
`;

/**
 * Icones
 */

export const ExclamationIcon = styled(Exclamation)`
  width: 22px;
`;

export const WhatsappIcon = styled(Whatsapp)`
  width: 22px;
  margin-right: 10px;
  color: green;
`;

export const UserCircleIcon = styled(UserCircle)`
  width: 22px;
`;
