import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import Endorsement from '../components/Endorsement';
import Triangle from '../components/Triangle';
import { useEndorsementsQuery } from '../queries/useEndorsementQuery';

const Endorsements = () => {
  const endorsements = useEndorsementsQuery();

  return (
    <Section.Container id="testimonials" Background={Background}>
      <Section.Header name="Testimonials" icon="✍️" label="Testimonials" />
      <Fade direction="down" triggerOnce cascade damping={0.5}>
        <Endorsement list={endorsements} />
      </Fade>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="primary"
      height={['15vh', '20vh']}
      width={['100vw', '100vw']}
      position="top-right"
    />

    <Triangle
      color="secondary"
      height={['15vh', '20vh']}
      width={['100vw', '100vw']}
      position="top-left"
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default Endorsements;
