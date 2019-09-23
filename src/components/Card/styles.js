import styled from 'styled-components';

import Colors from '../../utils/constants/colors';

export const CardWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;

  border-top: 1px solid ${Colors.Gray};

  &:last-child {
    border-bottom: 1px solid ${Colors.Gray};
  }
`;

export const CardCheckImg = styled.div`
  flex: 2;
  display: flex;
  align-items: center;

  input {
    flex: 1;
  }

  img {
    flex: 2;
    padding: 10px;
    display: block;
    max-width: 100%;
  }

  @media screen and (min-width: 600px) {
    flex: 1;

    img {
      padding: 20px;
    }
  }
`;

export const CardInformation = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;

  > div.name {
    display: flex;
    flex-direction: column;
  }

  > div.name span {
    padding: 10px 0;
    font-weight: bold;
    color: ${Colors.SecondaryBlue};
  }

  > div.price {
    padding: 20px 0 0;
    display: flex;
    flex-direction: column;
  }

  span.mark {
    font-weight: bold;
    color: ${Colors.Green};
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
