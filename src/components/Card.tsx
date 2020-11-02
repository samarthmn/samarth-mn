import styled from 'styled-components';
import { Card as CardRebass } from 'rebass/styled-components';

type CardContainerProps = {
  minWidth?: string;
};

export const CardContainer = styled.div<CardContainerProps>`
  display: grid;
  grid-gap: 30px;
  justify-items: center;
`;

export const Card = styled(CardRebass).attrs({
  bg: 'white',
  boxShadow: 0,
})`
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 119, 182, 0.5);
  }
`;
export const ProjectCard = styled(CardRebass).attrs({
  bg: 'white',
  boxShadow: 0,
})`
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 119, 182, 0.5);
  }
`;
