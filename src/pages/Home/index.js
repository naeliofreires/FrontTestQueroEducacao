import React, { useState, useEffect } from 'react';

import AddScholarships from '../../components/AddScholarships';
import Scholarship from '../../components/Scholarship';

import * as S from './styles';

export default function Home() {
  const [favoritesScholarships, setFavoritesScholarships] = useState([]);
  const [favoritesFiltered, setFavoritesFiltered] = useState(null);

  function loadScholarships() {
    const favorites = JSON.parse(localStorage.getItem('favoritesScholarships'));
    if (favorites) setFavoritesScholarships(favorites);
  }

  useEffect(() => {
    loadScholarships();
  }, []);

  function filterBySemester(semester) {
    if (!semester) {
      setFavoritesFiltered(null);
      return;
    }

    const result = favoritesScholarships.filter(
      s => s.enrollment_semester === semester
    );

    setFavoritesFiltered(result);
  }

  return (
    <S.HomeWrapper>
      <S.HomeBreadcrumbs>
        <S.BreadcrumbsLink to="/">Home</S.BreadcrumbsLink>
        <S.BreadcrumbsLink to="/">Minha conta</S.BreadcrumbsLink>
        <span className="actual"> Bolsas favoritas</span>
      </S.HomeBreadcrumbs>

      <S.HomeBoxTitle>
        <S.HomeTitle>Bolsas favoritas</S.HomeTitle>

        <S.HomeDescription>
          Adicione bolsas de cursos e faculdades do seu interesse e receba
          atualizações com as melhores ofertas disponíveis.
        </S.HomeDescription>
      </S.HomeBoxTitle>

      <S.HomeSubMenu>
        <div className="container-submenu">
          <div
            role="button"
            tabIndex={0}
            className="submenu-item"
            onClick={() => filterBySemester()}
            onKeyDown={() => filterBySemester()}
          >
            Todos os semestres
          </div>
          <div
            role="button"
            tabIndex={0}
            className="submenu-item"
            onClick={() => filterBySemester('2019.2')}
            onKeyDown={() => filterBySemester('2019.2')}
          >
            2˚ semestre de 2019
          </div>
          <div
            role="button"
            tabIndex={0}
            className="submenu-item"
            onClick={() => filterBySemester('2020.1')}
            onKeyDown={() => filterBySemester('2020.1')}
          >
            1˚ semestre de 2020
          </div>
        </div>
      </S.HomeSubMenu>

      <S.HomeContainerScholarships>
        <AddScholarships loadScholarships={loadScholarships} />
        {favoritesFiltered
          ? favoritesFiltered.map(fs => (
              <Scholarship
                id={fs.id}
                key={fs.id}
                enabled={fs.enabled}
                kind={fs.course.kind}
                start={fs.start_date}
                shift={fs.course.shift}
                nameCourse={fs.course.name}
                score={fs.university.score}
                logo={fs.university.logo_url}
                nameUniversity={fs.university.name}
                loadScholarships={loadScholarships}
                fullPriceFormat={fs.fullPriceFormat}
                priceWithDiscountFormat={fs.priceWithDiscountFormat}
              />
            ))
          : favoritesScholarships.map(fs => (
              <Scholarship
                id={fs.id}
                key={fs.id}
                enabled={fs.enabled}
                kind={fs.course.kind}
                start={fs.start_date}
                shift={fs.course.shift}
                nameCourse={fs.course.name}
                score={fs.university.score}
                logo={fs.university.logo_url}
                nameUniversity={fs.university.name}
                loadScholarships={loadScholarships}
                fullPriceFormat={fs.fullPriceFormat}
                priceWithDiscountFormat={fs.priceWithDiscountFormat}
              />
            ))}
      </S.HomeContainerScholarships>
    </S.HomeWrapper>
  );
}
