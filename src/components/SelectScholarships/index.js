/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect, useMemo } from 'react';
import Slider from 'rc-slider';
import uuid from 'uuid';

import Card from '../Card';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as S from './styles';

export default function SelectScholarships() {
  const [eadCheckd, setEadCheckd] = useState(false);
  const [presential, setPresential] = useState(false);

  const [price, setPrice] = useState(1000);
  const [scholarships, setScholarships] = useState([]);
  const [scholarshipsFiltered, setScholarshipsFiltered] = useState([]);

  useEffect(() => {
    async function loadScholarships() {
      const response = await api.get('/scholarships');

      const data = response.data.map(s => {
        return {
          ...s,
          id: uuid(),
          fullPriceFormat: formatPrice(s.full_price),
          priceWithDiscountFormat: formatPrice(s.price_with_discount),
        };
      });

      setScholarships(data);
    }

    loadScholarships();
  }, []);

  function filter() {
    let filtered = scholarships.filter(s => s.full_price <= price);

    if (eadCheckd) {
      filtered = filtered.filter(s => s.course.kind === 'EaD');
    }

    if (presential) {
      filtered = filtered.filter(s => s.course.kind === 'Presencial');
    }

    setScholarshipsFiltered(filtered);
  }

  useEffect(() => {
    filter();
  }, [price, eadCheckd, presential]);

  const priceFormated = useMemo(() => formatPrice(price), [price]);

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
              <input
                id="presencial"
                type="checkbox"
                name="presencial"
                checked={presential}
                onChange={e => setPresential(e.target.checked)}
              />
              Presencial
            </label>

            <label htmlFor="distancia">
              <input
                id="distancia"
                type="checkbox"
                name="distancia"
                checked={eadCheckd}
                onChange={e => setEadCheckd(e.target.checked)}
              />
              A distância
            </label>
          </form>
        </div>

        <div className="box-slide">
          <S.Label> ATÉ QUANTO PODE PAGAR?</S.Label>
          <div className="slide">
            {priceFormated}
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
          {scholarshipsFiltered.length > 0
            ? scholarshipsFiltered.map(s => (
                <Card
                  key={s.id}
                  courseName={s.course.name}
                  logo={s.university.logo_url}
                  courseLevel={s.course.level}
                  percentage={s.discount_percentage}
                  priceWithDiscount={s.priceWithDiscountFormat}
                />
              ))
            : scholarships.map(s => (
                <Card
                  key={s.id}
                  courseName={s.course.name}
                  logo={s.university.logo_url}
                  courseLevel={s.course.level}
                  percentage={s.discount_percentage}
                  priceWithDiscount={s.priceWithDiscountFormat}
                />
              ))}
        </div>
      </S.ContainerScholarships>
    </S.Wrapper>
  );
}
