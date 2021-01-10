import React from 'react';
import SocialLink from '../components/SocialLink';
import { Flex, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Endorsements } from '../types';
import { Fade } from 'react-awesome-reveal';

const Endorsement = ({ list }: { list: Endorsements[] }) => {
  const [isMob, setisMob] = React.useState(false);

  const onResize = () => {
    setisMob(window.innerWidth < 500);
  };

  React.useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <Container>
      {list.length
        ? list.map(({ author, authorLinkedin, endorsement }) => (
            <CardContainer bool={isMob}>
              <Fade direction="down" triggerOnce>
                <EndorsementText my={3} color="text">
                  {endorsement.endorsement}
                </EndorsementText>
              </Fade>
              <Fade direction="down" triggerOnce>
                <AuthorContainer>
                  <Author color="text"> - {author}</Author>
                  <SocialLink
                    name={`${author}'s Linkedin`}
                    icon="linkedin"
                    url={authorLinkedin}
                    color="black"
                  />
                </AuthorContainer>
              </Fade>
            </CardContainer>
          ))
        : null}
    </Container>
  );
};

const Container = styled(Flex)`
  margin-bottom: 2em;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  background-color: white;
  width: ${({ bool }: { bool: boolean }) => (bool ? '100%' : '45%')};
  margin: 10px;
  transition: all 0.25s;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding: 5px 10px 5px 10px;
  &:hover {
    box-shadow: 0 8px 18px rgba(0, 119, 182, 0.5);
  }
`;

const EndorsementText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  display: table;
  padding-left: 1em;
`;

const AuthorContainer = styled(Flex)`
  align-items: center;
  opacity: 0.8;
`;

const Author = styled(Text)`
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
  display: table;
  padding: 0.5em 0.25em 0.5em 0.5em;
  align-items: center;
`;

export default Endorsement;
