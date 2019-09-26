import React from 'react';
import PropTypes from 'prop-types';

import InputCheck from '../InputCheck';

import * as S from './styles';

const Card = ({
  logo,
  percentage,
  courseName,
  courseLevel,
  addScholarships,
  priceWithDiscount,
}) => (
  <S.CardWrapper>
    <S.CardCheckImg>
      <InputCheck onChange={e => addScholarships(e.target.checked)} />
      <div className="box-logo">
        <img
          src={logo}
          alt="Logo da Universidade"
          title="Logo da Universidade"
        />
      </div>
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

export default Card;

Card.propTypes = {
  logo: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  courseName: PropTypes.string.isRequired,
  courseLevel: PropTypes.string.isRequired,
  addScholarships: PropTypes.func.isRequired,
  priceWithDiscount: PropTypes.string.isRequired,
};
