import styled from 'styled-components';

import { Close } from 'styled-icons/evil/Close';

import Colors from '../../utils/constants/colors';
import zIndex from '../../utils/z-index';

export const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 8.8;
  z-index: ${zIndex.modal};
  background: ${Colors.OverlayModal};

  display: ${props => (props.show ? 'flex' : 'none')};
  @media screen and (min-width: 700px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ModalBody = styled.div`
  width: 100%;
  div.close {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  @media screen and (min-width: 700px) {
    width: 80%;
  }
`;

/**
 * Icons
 */

export const CloseIcon = styled(Close)`
  width: 47px;
  margin: 5px;
  color: #fff;
`;
