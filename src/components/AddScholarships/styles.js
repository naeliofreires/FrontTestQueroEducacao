import styled from 'styled-components';

import { DiffAdded as Add } from 'styled-icons/octicons/DiffAdded';

import Colors from '../../utils/constants/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  box-shadow: 0px 5px 14px 0px ${Colors.Gray};
  -moz-box-shadow: 0px 5px 14px 0px ${Colors.Gray};
  -webkit-box-shadow: 0px 5px 14px 0px ${Colors.Gray};

  div.text {
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > span {
      font-weight: bold;
      color: ${Colors.Black};
    }

    > p {
      font-size: 14px;
      line-height: 1.7;
      text-align: center;
      color: ${Colors.Gray};
    }
  }

  @media screen and (min-width: 450px) {
    max-width: 320px;
  }

  @media screen and (min-width: 600px) {
    height: 458px;
  }
`;

/**
 * Icons
 */

export const AddIcon = styled(Add)`
  width: 40px;
  margin: 5px;
  color: ${Colors.SecondaryBlue};
`;
