import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

import Colors from '../../utils/constants/colors.js';

import * as S from './styles';

export default function Scholarships({
  id,
  logo,
  kind,
  start,
  score,
  shift,
  enabled,
  nameCourse,
  nameUniversity,
  fullPriceFormat,
  loadScholarships,
  priceWithDiscountFormat,
}) {
  function deleteScholarships() {
    const KEY = 'favoritesScholarships';
    const favorites = JSON.parse(localStorage.getItem(KEY));

    localStorage.setItem(
      KEY,
      JSON.stringify(favorites.filter(s => s.id !== id))
    );

    loadScholarships();
  }

  return (
    <S.ScholarshipWrapper>
      <S.ScholarshipHeader>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="info">
          <span className="name">{nameUniversity}</span>
          <span className="course">{nameCourse}</span>
          <div className="note">
            <span>{score}</span>
            <StarRatings
              name="rating"
              rating={score}
              starSpacing="0"
              numberOfStars={5}
              starDimension="20"
              starRatedColor={Colors.SecondaryYellow}
            />
          </div>
        </div>
      </S.ScholarshipHeader>

      <S.ScholarshipInfoCourse>
        <span className="type">
          {kind === 'EaD' ? 'ENSINO A DISTÂNCIA' : kind} • {shift}
        </span>
        <span className="start-class">Início das aulas em: {start}</span>
      </S.ScholarshipInfoCourse>

      <S.ScholarshipPrice>
        <span className="title">Mensalidde com o Quero Bolsa:</span>
        <span className="discount">{fullPriceFormat}</span>
        <span className="price-promotion">
          {priceWithDiscountFormat} <small>/mês</small>
        </span>
      </S.ScholarshipPrice>

      <S.ScholarshipButton enabled={enabled}>
        <button type="button" onClick={deleteScholarships} className="delete">
          Excluir
        </button>
        <button disabled={enabled} type="button" className="see-offer">
          {enabled ? 'Ver Oferta' : 'Indisponível'}
        </button>
      </S.ScholarshipButton>
    </S.ScholarshipWrapper>
  );
}

Scholarships.propTypes = {
  id: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  enabled: PropTypes.bool.isRequired,
  shift: PropTypes.string.isRequired,
  nameCourse: PropTypes.string.isRequired,
  nameUniversity: PropTypes.string.isRequired,
  loadScholarships: PropTypes.func.isRequired,
  fullPriceFormat: PropTypes.string.isRequired,
  priceWithDiscountFormat: PropTypes.string.isRequired,
};
