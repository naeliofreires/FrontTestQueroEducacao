import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import SelectScholarships from '../SelectScholarships';

import { blockScroll, unlockScroll } from '../../utils/functions/scroll';
import * as S from './styles';

export default function AddScholarships({ loadScholarships }) {
  const [showModal, setShowModal] = useState(false);

  const show = () => {
    blockScroll();
    setShowModal(true);
  };

  const close = () => {
    unlockScroll();
    setShowModal(false);
    loadScholarships();
  };

  function renderModal() {
    return (
      <Modal show={showModal} close={close}>
        <SelectScholarships close={close} />
      </Modal>
    );
  }

  return (
    <>
      <S.Wrapper onClick={show}>
        <div className="icon">
          <S.AddIcon />
        </div>
        <div className="text">
          <span>Adicionar bolsa</span>
          <p>Clique para adicionar bolsas de cursos do seu interesse</p>
        </div>
      </S.Wrapper>
      {showModal && renderModal()}
    </>
  );
}

AddScholarships.propTypes = {
  loadScholarships: PropTypes.func.isRequired,
};
