import React from 'react';
import StarRatings from 'react-star-ratings';

import * as S from './styles';

export default function Scholarships({ logo }) {
  return (
    <S.ScholarshipWrapper>
      <S.ScholarshipHeader>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="info">
          <span className="name">Anhaguera</span>
          <span className="course">Sistemas de Informação</span>
          <div className="note">
            <span>3.8</span>
            <StarRatings
              rating={3.8}
              name="rating"
              starSpacing={0}
              numberOfStars={5}
              starDimension={20}
              starRatedColor="yellow"
            />
          </div>
        </div>
      </S.ScholarshipHeader>

      <S.ScholarshipInfoCourse>
        <span className="type">Presencial • Noite</span>
        <span className="start-class">Início das aulas em: 05/03/2020</span>
      </S.ScholarshipInfoCourse>

      <S.ScholarshipPrice>
        <span className="title">Mensalidde com o Quero Bolsa:</span>
        <span className="discount">1.487,31</span>
        <span className="price-promotion">
          R$ 453,64 <small>/mês</small>
        </span>
      </S.ScholarshipPrice>

      <S.ScholarshipButton>
        <button type="button" className="delete">
          Excluir
        </button>
        <button type="button" className="see-offer">
          Ver Oferta
        </button>
      </S.ScholarshipButton>
    </S.ScholarshipWrapper>
  );
}
