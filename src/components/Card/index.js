import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Card({
  logo,
  percentage,
  courseName,
  courseLevel,
  priceWithDiscount,
}) {
  return (
    <S.CardWrapper>
      <S.CardCheckImg>
        <input type="radio" />
        <img src={logo} alt="Imagem" />
      </S.CardCheckImg>
      <S.CardInformation>
        <div className="name">
          <span>{courseName}</span>
          <small>{courseLevel}</small>
        </div>
        <div className="price">
          <div>
            Bolsa de <span className="mark">{`${percentage}%`}</span>
          </div>
          <span className="mark">{`${priceWithDiscount}/mês`}</span>
        </div>
      </S.CardInformation>
    </S.CardWrapper>
  );
}

Card.propTypes = {
  logo: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  courseName: PropTypes.string.isRequired,
  courseLevel: PropTypes.string.isRequired,
  priceWithDiscount: PropTypes.string.isRequired,
};
