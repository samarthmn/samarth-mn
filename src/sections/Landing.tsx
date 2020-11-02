import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import { useScrollSection } from 'react-scroll-section';
import MouseIcon from '../components/ScrollIcon';
import Triangle from '../components/Triangle';
import { useSiteQuery } from '../queries/useSiteQuery';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => {
  const { name, roles, socialLinks, deterministic } = useSiteQuery();
  const aboutSection = useScrollSection('about');

  return (
    <Section.Container id="home" Background={Background}>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[5, 6]}
        mb={[3, 4, 5]}
      >
        {`Hello, I'm ${name}!`}
      </Heading>

      <Heading
        as="h2"
        color="primary"
        fontSize={[4, 5]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
        <TextLoop interval={2500}>
          {roles
            .sort(() => (deterministic ? 1 : Math.random() - 0.5))
            .map((text) => (
              <Text width={[300, 500]} key={text}>
                {text}
              </Text>
            ))}
        </TextLoop>
      </Heading>

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        {socialLinks.map((sl) => (
          <Box mx={3} fontSize={[4, 5, 5]} key={sl.name}>
            <SocialLink {...sl} />
          </Box>
        ))}
      </Flex>

      <MouseIcon onClick={aboutSection.onClick} />
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['35vh', '25vh']}
      width={['95vw', '90vw']}
      position="top-right"
    />

    <Triangle
      color="secondary"
      height={['38vh', '30vh']}
      width={['50vw', '65vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '50vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default LandingPage;
