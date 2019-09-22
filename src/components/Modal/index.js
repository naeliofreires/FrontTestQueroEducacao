import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Modal({ show, close, children }) {
  return (
    <S.ModalWrapper name="modal" show={show}>
      <S.ModalBody>
        <div className="close">
          <S.CloseIcon onClick={close} />
        </div>
        <div className="content">{children}</div>
      </S.ModalBody>
    </S.ModalWrapper>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
