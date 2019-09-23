/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import Slider from 'rc-slider';

import Card from '../Card';

import * as S from './styles';

export default function SelectScholarships() {
  const [price, setPrice] = useState(1000);

  return (
    <S.Wrapper>
      <S.BoxTitle>
        <h1>Adicionar bolsa</h1>
        <p>Filtre e adicione as bolsas de seu interesse</p>
      </S.BoxTitle>

      <S.BoxSelect>
        <form action="">
          <S.Label>SELECIONE SUA CIDADE</S.Label>
          <select id="city">
            <option value="a">São Jose dos Campos</option>
            <option value="b">Fortaleza</option>
            <option value="c">Quixada</option>
          </select>
        </form>

        <form action="">
          <S.Label>SELECIONE O CURSO DE SUA PREFERENCIA</S.Label>
          <select id="course">
            <option value="" />
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </form>
      </S.BoxSelect>

      <S.BoxFilter>
        <div className="box-check">
          <S.Label>COMO VOCÊ QUER ESTUDAR?</S.Label>
          <form>
            <label htmlFor="presencial">
              <input type="checkbox" name="presencial" id="presencial" />
              Presencial
            </label>

            <label htmlFor="distancia">
              <input type="checkbox" name="distancia" id="distancia" />A
              distância
            </label>
          </form>
        </div>

        <div className="box-slide">
          <S.Label> ATÉ QUANTO PODE PAGAR?</S.Label>
          <div className="slide">
            {`R$${price}`}
            <Slider
              min={1000}
              max={10000}
              style={{ padding: '20px 0' }}
              onChange={value => setPrice(value)}
            />
          </div>
        </div>
      </S.BoxFilter>

      <S.ContainerScholarships>
        <div className="scolharships-header">
          <span>Resultado:</span>

          <div className="oder-by-name">
            Ordernar por
            <label htmlFor="filter-name">
              <input type="checkbox" id="filter-name" />
              Nome da Faculdade <S.ArrowDownIcon />
            </label>
          </div>
        </div>

        <div className="scolharships-body">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </S.ContainerScholarships>
    </S.Wrapper>
  );
}
