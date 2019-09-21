import React, { useState } from 'react';

import * as S from './styles';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    const element = document.getElementById('menuHeader');
    if (element.classList.contains('show')) {
      element.classList.remove('show');
    } else {
      element.classList.add('show');
    }
    setMenuOpen(!menuOpen);
  }
  return (
    <S.MenuWrapper>
      <S.MenuBoxLinks id="menuHeader">
        <div className="link">
          <S.MenuLink to="/">Minha conta</S.MenuLink>
        </div>
        <div className="link">
          <S.MenuLink to="/">Pré-matriculas</S.MenuLink>
        </div>
        <div className="link active">
          <S.MenuLink to="/">Bolsas favoritas </S.MenuLink>
        </div>
      </S.MenuBoxLinks>
      <div className="icon" onClick={() => openMenu()}>
        Menu {menuOpen ? <S.ArrowIconUp /> : <S.ArrowIconDown />}
      </div>
    </S.MenuWrapper>
  );
}
