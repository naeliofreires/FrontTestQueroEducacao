import React from 'react';

import { Wrapper, AddIcon } from './styles';

export default function() {
  return (
    <Wrapper>
      <div className="icon">
        <AddIcon />
      </div>
      <div className="text">
        <span>Adicionar bolsa</span>
        <p>Clique para adicionar bolsas de cursos do seu interesse</p>
      </div>
    </Wrapper>
  );
}
