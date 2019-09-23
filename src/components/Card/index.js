import React from 'react';

import * as S from './styles';

const Img =
  'https://raw.githubusercontent.com/redealumni/front-end-test-quero/master/images/anhanguera.png';
export default function Card() {
  return (
    <S.CardWrapper>
      <S.CardCheckImg>
        <input type="radio" />
        <img src={Img} alt="Imagem" />
      </S.CardCheckImg>
      <S.CardInformation>
        <div className="name">
          <span>Administracao</span>
          <small>Bacharelado</small>
        </div>
        <div className="price">
          <div>
            Bolsa de <span className="mark">50%</span>
          </div>
          <span className="mark">R$ 374/mês</span>
        </div>
      </S.CardInformation>
    </S.CardWrapper>
  );
}
