import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { KeyboardArrowDown as ArrowDown } from 'styled-icons/material/KeyboardArrowDown';
import { KeyboardArrowUp as ArrowUp } from 'styled-icons/material/KeyboardArrowUp';

import Colors from '../../utils/constants/colors';

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: ${Colors.MainBlue};

  .icon {
    cursor: pointer;
    display: none;
    padding: 15px;
    color: white;
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    align-items: initial;
    .icon {
      z-index: 1;
      right: 0;
      display: block;
      position: absolute;
    }
  }
`;

export const MenuBoxLinks = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  background: ${Colors.MainBlue};

  .active {
    background: ${Colors.SecondaryBlue};
  }

  > div.link {
    cursor: pointer;
    height: 50px;
    width: 170px;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    position: absolute;
    flex-direction: column;
    align-items: flex-start;

    .active {
      background: transparent;
    }

    > div.link:hover {
      background: ${Colors.SecondaryBlue};
    }
    > div.link {
      width: 100%;
      display: flex;
      align-items: center;
    }

    &:not(.show) {
      div:not(:first-child) {
        display: none;
      }
    }
  }
`;

export const MenuLink = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  color: white;
  padding: 0 20px;
`;

/**
 * Icons
 */

export const ArrowIconDown = styled(ArrowDown)`
  width: 22px;
`;

export const ArrowIconUp = styled(ArrowUp)`
  width: 22px;
`;
