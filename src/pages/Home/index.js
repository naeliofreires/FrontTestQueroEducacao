import React from 'react';

import AddScholarships from '../../components/AddScholarships';

import * as S from './styles';

export default function Home() {
  return (
    <S.HomeWrapper>
      <S.HomeBreadcrumbs>
        <S.BreadcrumbsLink>Home</S.BreadcrumbsLink>
        <S.BreadcrumbsLink>Minha conta</S.BreadcrumbsLink>
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
          <div className="submenu-item">Todos os semestres</div>
          <div className="submenu-item">2˚ semestre de 2019</div>
          <div className="submenu-item">1˚ semestre de 2020</div>
        </div>
      </S.HomeSubMenu>

      <S.HomeContainerScholarships>
        <AddScholarships />
      </S.HomeContainerScholarships>
    </S.HomeWrapper>
  );
}
