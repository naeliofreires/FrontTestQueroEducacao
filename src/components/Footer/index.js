import React from 'react';

import * as S from './styles';

export default function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterWrapperInfo>
        <S.FooterInfo>
          <S.FooterBoxInfo nameGrid="wpp">
            <div>
              <S.WhatsappIcon />

              <S.InfoText>
                <span>0800 123 2222</span>
                <span className="desktop">Seg a Sex 8h-22h</span>
                <span className="mobile-wpp">Segunda a sexta de 8h às 22h</span>
              </S.InfoText>
            </div>
          </S.FooterBoxInfo>

          <S.FooterBoxInfo nameGrid="chat">
            <div>
              <S.ChatIcon />

              <S.InfoText>
                <span className="desktop">Chat ao vivo</span>
                <span className="desktop">Seg - Sex 8h-22h</span>
                <span className="mobile">Chat</span>
              </S.InfoText>
            </div>
          </S.FooterBoxInfo>

          <S.FooterBoxInfo nameGrid="email">
            <div>
              <S.MailIcon />
              <S.InfoText>
                <span className="desktop">Mande um e-mail</span>
                <span className="desktop">Respondemos rapidinho</span>
                <span className="mobile">E-Mail</span>
              </S.InfoText>
            </div>
          </S.FooterBoxInfo>

          <S.FooterBoxInfo nameGrid="info">
            <div>
              <S.InfoIcon />

              <S.InfoText>
                <span className="desktop">Central de Ajuda</span>
                <span className="desktop">Encontre todas as respostas</span>
                <span className="mobile">Ajuda</span>
              </S.InfoText>
            </div>
          </S.FooterBoxInfo>
        </S.FooterInfo>
      </S.FooterWrapperInfo>

      <S.FooterMessage>
        Feito com <S.HeartIcon /> pela Quero Educação
      </S.FooterMessage>
    </S.FooterWrapper>
  );
}
