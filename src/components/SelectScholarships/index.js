/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import uuid from 'uuid';

import Card from '../Card';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import { orderASC, orderDESC } from '../../utils/functions/order';

import * as S from './styles';

const EAD = 'EaD';
const PRESENTIAL = 'Presencial';

export default function SelectScholarships({ close }) {
  const [citys, setCitys] = useState([]);
  const [courses, setCoures] = useState([]);

  const [cityName, setCityName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [eadCheckd, setEadCheckd] = useState(false);
  const [presential, setPresential] = useState(false);
  const [orderByName, setOrderByName] = useState(false);

  const [price, setPrice] = useState(1000);
  const [scholarships, setScholarships] = useState([]);
  const [scholarshipsFiltered, setScholarshipsFiltered] = useState([]);
  const [selectedScholarships, setselectedScholarships] = useState([]);

  // Const
  const priceFormated = useMemo(() => formatPrice(price), [price]);
  const buttonDisabled = useMemo(() => selectedScholarships.length === 0, [
    selectedScholarships,
  ]);

  function extractCities(array) {
    const result = [];

    array.forEach(
      ({ campus: { city } }) => !result.includes(city) && result.push(city)
    );

    setCitys(result.sort());
  }

  function extractCourses(array) {
    const result = [];

    array.forEach(
      ({ course: { name } }) => !result.includes(name) && result.push(name)
    );

    setCoures(result.sort());
  }

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

      extractCities(data);
      extractCourses(data);
      setScholarships(data);
    }

    loadScholarships();
  }, []);

  useEffect(() => {
    function filter() {
      let filtered = scholarships.filter(s => s.full_price <= price);

      if (eadCheckd) {
        filtered = filtered.filter(s => s.course.kind === EAD);
      }

      if (presential) {
        filtered = filtered.filter(s => s.course.kind === PRESENTIAL);
      }

      if (cityName) {
        filtered = filtered.filter(s => s.campus.city === cityName);
      }

      if (courseName) {
        filtered = filtered.filter(s => s.course.name === courseName);
      }

      setScholarshipsFiltered(filtered);
    }

    filter();
  }, [price, eadCheckd, presential, cityName, courseName]);

  function orderScholarshipsByNameScholl() {
    const func = orderByName ? orderDESC : orderASC;

    const result =
      scholarshipsFiltered.length > 0
        ? scholarshipsFiltered.sort(func)
        : scholarships.sort(func);

    setScholarshipsFiltered(result);
  }

  function addScholarships(check, scholarship) {
    let newSelectedScholarships;
    if (check) {
      newSelectedScholarships = [...selectedScholarships, scholarship];
    } else {
      newSelectedScholarships = selectedScholarships.filter(
        s => s.id !== scholarship.id
      );
    }

    setselectedScholarships(newSelectedScholarships);
  }

  function save() {
    const KEY = 'favoritesScholarships';
    const favorites = JSON.parse(localStorage.getItem(KEY));

    if (favorites) {
      localStorage.setItem(
        KEY,
        JSON.stringify([...favorites, ...selectedScholarships])
      );
    } else {
      localStorage.setItem(KEY, JSON.stringify(selectedScholarships));
    }

    close();
  }

  return (
    <S.Wrapper>
      <S.BoxTitle>
        <h1>Adicionar bolsa</h1>
        <p>Filtre e adicione as bolsas de seu interesse</p>
      </S.BoxTitle>

      <S.BoxSelect>
        <form action="">
          <S.Label>SELECIONE SUA CIDADE</S.Label>
          <select id="city" onChange={e => setCityName(e.target.value)}>
            <option value="" />
            {citys.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </form>

        <form action="">
          <S.Label>SELECIONE O CURSO DE SUA PREFERENCIA</S.Label>
          <select id="course" onChange={e => setCourseName(e.target.value)}>
            <option value="" />
            {courses.map(course => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
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
              <input
                type="checkbox"
                id="filter-name"
                onClick={orderScholarshipsByNameScholl}
                onChange={e => setOrderByName(e.target.checked)}
              />
              Nome da Faculdade
              {orderByName ? <S.ArrowDownIcon /> : <S.ArrowUpIcon />}
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
                  addScholarships={check => addScholarships(check, s)}
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
                  addScholarships={check => addScholarships(check, s)}
                />
              ))}
        </div>
      </S.ContainerScholarships>

      <S.ContainerButtons disabled={buttonDisabled}>
        <button
          type="button"
          onClick={close}
          title="Cancelar"
          className="cancel"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={save}
          className="add"
          disabled={buttonDisabled}
          title="Adicionar novas bolsas"
        >
          Adicionar bolsa(s)
        </button>
      </S.ContainerButtons>
    </S.Wrapper>
  );
}

SelectScholarships.propTypes = {
  close: PropTypes.func.isRequired,
};
