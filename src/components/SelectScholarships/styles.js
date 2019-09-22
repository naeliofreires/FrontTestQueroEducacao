import styled from 'styled-components';

import { KeyboardArrowDown as ArrowDown } from 'styled-icons/material/KeyboardArrowDown';
import { KeyboardArrowUp as ArrowUp } from 'styled-icons/material/KeyboardArrowUp';

import Colors from '../../utils/constants/colors';

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: ${Colors.Background};
`;

export const BoxTitle = styled.div`
  h1,
  p {
    padding-bottom: 20px;
  }
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (min-width: 700px) {
    font-size: 16px;
  }
`;

export const BoxSelect = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  form select {
    padding: 20px;
    margin: 5px 0 30px 0;
    font-size: 16px;
    border: 1px solid ${Colors.Gray};
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;

    form {
      &:first-child {
        margin-right: 30px;
      }
    }
    form select {
      margin-bottom: 0;
    }
  }
`;

export const BoxFilter = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    flex: 1;
  }

  div.box-check form {
    padding: 20px 0;

    input {
      margin-right: 5px;
    }

    label {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    div.box-check {
      margin-right: 30px;
    }
  }
`;

export const ContainerScholarships = styled.div`
  display: flex;
  flex-direction: column;

  div.scolharships-header {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    > span,
    > div {
      font-size: 12px;
      font-weight: bold;
    }

    div.oder-by-name {
      display: flex;
      align-items: flex-end;
      flex-direction: column;

      label {
        margin-left: 0;
        color: ${Colors.SecondaryBlue};
      }
    }
  }

  @media screen and (min-width: 700px) {
    div.scolharships-header {
      > span,
      > div {
        font-size: 16px;
      }

      div.oder-by-name {
        flex-direction: row;
        align-items: center;

        label {
          margin-left: 10px;
        }
      }
    }
  }
`;

/**
 * Icons
 */

export const ArrowUpIcon = styled(ArrowUp)``;

export const ArrowDownIcon = styled(ArrowDown)`
  width: 22px;
`;
