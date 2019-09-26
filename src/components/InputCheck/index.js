import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const InputCheck = ({ id, onChange: change, text }) => (
  <S.InputCheckWrapper htmlFor={id}>
    <input
      id={id}
      type="checkbox"
      onChange={change}
      name="check-scholarships"
    />
    <span>{text}</span>
  </S.InputCheckWrapper>
);

export default InputCheck;

InputCheck.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputCheck.defaultProps = {
  text: '',
};
