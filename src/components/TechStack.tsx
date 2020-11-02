import React from 'react';
import Headroom from 'react-headroom';
import { Box, Button, Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import { useScrollSection, useScrollSections } from 'react-scroll-section';
import Link from './Link';
import { capitalize } from '../utils/string';
import { useHelmetQuery } from '../queries/useHelmetQuery';
import theme from './../theme';

interface PROPS {
  list?: string[];
  isMobile?: boolean;
}

const TechStack = (props: PROPS) => {
  const { list = [], isMobile = false } = props;

  if (isMobile) {
    return (
      <ContainerMobile>
        {list.length ? list.map((stack) => <Stack>{stack}</Stack>) : null}
      </ContainerMobile>
    );
  }
  return (
    <Container>
      {list.length ? list.map((stack) => <Stack>{stack}</Stack>) : null}
    </Container>
  );
};

const Container = styled(Flex)`
  margin-left: 2em;
  margin-right: 7em;
  flex-wrap: wrap;
`;
const ContainerMobile = styled(Flex)`
  margin-bottom: 2em;
  flex-wrap: wrap;
`;
const Stack = styled.div`
  margin-right: 0.5em;
  margin: 0.3em;
  padding: 0.14em 0.45em;
  border: 1px solid ${theme.colors.primary};
  border-radius: 0.35em;
  color: ${theme.colors.secondary};
  cursor: default;
`;

export default TechStack;
