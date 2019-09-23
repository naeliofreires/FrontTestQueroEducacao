import React, { useState } from 'react';

import Modal from '../Modal';
import SelectScholarships from '../SelectScholarships';

import { Wrapper, AddIcon } from './styles';

export default function() {
  const [showModal, setShowModal] = useState(false);

  function renderModal() {
    return (
      <Modal show={showModal} close={() => setShowModal(false)}>
        <SelectScholarships />
      </Modal>
    );
  }

  return (
    <>
      <Wrapper onClick={() => setShowModal(true)}>
        <div className="icon">
          <AddIcon />
        </div>
        <div className="text">
          <span>Adicionar bolsa</span>
          <p>Clique para adicionar bolsas de cursos do seu interesse</p>
        </div>
      </Wrapper>
      {showModal && renderModal()}
    </>
  );
}
