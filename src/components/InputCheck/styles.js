import styled from 'styled-components';

import Colors from '../../utils/constants/colors';

import check from '../../assets/check.svg';

export const InputCheckWrapper = styled.label`
  display: flex;

  small {
    cursor: pointer;
    text-decoration: underline;
  }

  [type='checkbox']:checked,
  [type='checkbox']:not(:checked) {
    position: relative;
  }

  > input[type='checkbox'] {
    cursor: pointer;
    z-index: 1;
    opacity: 0;
    background: transparent;

    left: 15px;
    top: 10px;
    position: relative;
  }

  [type='checkbox']:checked + span,
  [type='checkbox']:not(:checked) + span {
    cursor: pointer;
    position: relative;
    padding-left: 28px;
    line-height: 20px;
    display: inline-block;
  }

  [type='checkbox']:checked + span:before,
  [type='checkbox']:not(:checked) + span:before {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 5px;
    border: 2px solid ${Colors.Black};
    background: transparent;
  }

  [type='checkbox']:checked + span:before {
    background: ${Colors.MainBlue};
  }

  [type='checkbox']:checked + span:after,
  [type='checkbox']:not(:checked) + span:after {
    content: '';
    width: 12px;
    height: 15px;
    background: url(${check}) no-repeat center;

    top: 2px;
    left: 4px;
    position: absolute;

    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  [type='checkbox']:not(:checked) + span:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  [type='checkbox']:checked + span:after {
    opacity: 1;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
