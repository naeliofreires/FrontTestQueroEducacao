import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from '../../utils/constants/colors';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0 20px;
  max-width: 1140px;
`;

export const HomeBreadcrumbs = styled.div`
  margin: 20px 0;

  span.actual {
    color: ${Colors.Gray};
    font-weight: bold;
    padding: 10px;
  }
`;

export const BreadcrumbsLink = styled(Link)`
  cursor: pointer;
  padding: 10px;
  font-weight: bold;
  text-decoration: none;
  color: ${Colors.SecondaryBlue};

  &:after {
    content: '/';
    color: ${Colors.Gray};
    position: relative;
    left: 15px;
    margin-right: 10px;
  }

  &:first-child {
    padding-left: 0;
  }
`;

export const HomeBoxTitle = styled.div`
  margin-bottom: 20px;
`;

export const HomeTitle = styled.h1`
  color: ${Colors.Black};
  padding: 20px 0;
`;

export const HomeDescription = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.Gray};
`;

export const HomeSubMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .container-submenu {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .container-submenu .submenu-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px 20px;
    font-weight: bold;
    border: 1px solid ${Colors.SecondaryBlue};
    color: ${Colors.SecondaryBlue};
    &:first-child {
      color: white;
      background: ${Colors.SecondaryBlue};
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    &:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  @media screen and (min-width: 600px) {
    .container-submenu {
      width: initial;
      flex-direction: row;
    }

    .container-submenu .submenu-item {
      &:first-child {
        color: white;
        background: ${Colors.SecondaryBlue};
        border-top-right-radius: 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }

      &:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
`;

export const HomeContainerScholarships = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;
