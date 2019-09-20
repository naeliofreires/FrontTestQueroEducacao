import React from 'react';

import logoQuero from '../../assets/logo-querobolsa.svg';

import * as S from './styles';

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderNav>
        <S.HeaderInfo>
          <S.HeaderHowWork>
            <S.ExclamationIcon />
            <span className="desktop">Como Funciona</span>
            <span className="mobile">Ajuda</span>
          </S.HeaderHowWork>

          <S.HeaderContact>
            <S.WhatsappIcon />
            <S.HeaderContactBox>
              <span className="number">O800 123 1222</span>
              Envie mensagem ou ligue
            </S.HeaderContactBox>
          </S.HeaderContact>

          <img
            className="logo"
            src={logoQuero}
            alt="Quero Bolsa"
            title="Quero Bolsa"
          />
        </S.HeaderInfo>

        <S.HeaderUser>
          <S.HeaderUserName>
            <span className="desktop">Naélio Freires</span>
            <span className="mobile">Conta</span>
            <S.UserCircleIcon />
          </S.HeaderUserName>
        </S.HeaderUser>
      </S.HeaderNav>
    </S.HeaderWrapper>
  );
}
