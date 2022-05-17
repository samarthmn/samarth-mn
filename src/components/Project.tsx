import React from 'react';
import SocialLink from '../components/SocialLink';
import ImageLabel from './ImageLabel';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Project as ProjectType } from '../types';
import TechStack from './TechStack';
import ReactMarkdown from 'react-markdown';
import MarkdownRenderer from './MarkdownRenderer';
import { Fade } from 'react-awesome-reveal';

type Props = ProjectType;

const Project = (props: Props) => {
  const {
    name,
    description,
    repository,
    type,
    startDate,
    endDate,
    logo,
    techStack,
  } = props;
  const [showStack, setshowStack] = React.useState(false);
  const [isMob, setisMob] = React.useState(false);

  const onResize = () => {
    setisMob(window.innerWidth < 500);
  };

  React.useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (isMob) {
    return (
      <ProjectCard bool={true}>
        <FlexRow>
          {startDate && !endDate ? (
            <ImageLabel bg="primary" position="top-right" color="white" round>
              {`${startDate} - Present`}
            </ImageLabel>
          ) : startDate && endDate ? (
            <ImageLabel bg="primary" position="top-right" color="white" round>
              {`${startDate} - ${endDate}`}
            </ImageLabel>
          ) : null}
          <ImageLabel
            bg="primary"
            position="bottom-right"
            color="white"
            round
            style={{ cursor: 'pointer' }}
            onClick={() => setshowStack(!showStack)}
          >
            {!showStack ? 'Show' : 'Hide'} Tech Stack
          </ImageLabel>

          <Grid>
            <div
              style={{
                marginTop: 20,
                marginBottom: 10,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ProjectImageMobile {...logo} />
              <ProjectTitle>{name}</ProjectTitle>
              {repository && (
                <SocialLink name="Repository" icon="github" url={repository} />
              )}
            </div>
            <Box>
              <Fade direction="down" triggerOnce>
                <ReactMarkdown
                  source={description.childMarkdownRemark.rawMarkdownBody}
                  renderers={MarkdownRenderer}
                />
              </Fade>
            </Box>
          </Grid>
        </FlexRow>
        {showStack ? (
          <Fade cascade damping={0.5}>
            <TechStack list={techStack} isMobile={true} />
          </Fade>
        ) : null}
      </ProjectCard>
    );
  }
  return (
    <ProjectCard bool={false}>
      <FlexRow>
        {type ? (
          <ImageLabel bg="muted" position="top-left" round>
            {type}
          </ImageLabel>
        ) : null}
        {startDate && !endDate ? (
          <ImageLabel bg="primary" position="top-right" color="white" round>
            {`${startDate} - Present`}
          </ImageLabel>
        ) : startDate && endDate ? (
          <ImageLabel bg="primary" position="top-right" color="white" round>
            {`${startDate} - ${endDate}`}
          </ImageLabel>
        ) : null}
        {techStack?.length && (
          <ImageLabel
            bg="primary"
            position="bottom-right"
            color="white"
            round
            style={{ cursor: 'pointer' }}
            onClick={() => setshowStack(!showStack)}
          >
            {!showStack ? 'Show' : 'Hide'} Tech Stack
          </ImageLabel>
        )}
        <ProjectImage {...logo} />
        <Grid>
          <div
            style={{
              marginBottom: 10,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ProjectTitle>{name}</ProjectTitle>
            {repository && (
              <SocialLink name="Repository" icon="github" url={repository} />
            )}
          </div>
          <Box>
            <Fade direction="down" triggerOnce>
              <ReactMarkdown
                source={description.childMarkdownRemark.rawMarkdownBody}
                renderers={MarkdownRenderer}
              />
            </Fade>
          </Box>
        </Grid>
      </FlexRow>
      {showStack && techStack?.length ? (
        <Fade cascade damping={0.5}>
          <TechStack list={techStack} />
        </Fade>
      ) : null}
    </ProjectCard>
  );
};

const ProjectCard = styled(Flex)`
  padding: ${({ bool }: { bool: boolean }) =>
    bool ? '20px 20px 10px 20px' : '20px 20px 10px 0px'};
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.25s;
  border-radius: 8px;
  margin-bottom: 15px;
  flex-direction: column;
  &:hover {
    box-shadow: 0 12px 24px rgba(0, 119, 182, 0.5);
  }
`;

const FlexRow = styled(Flex)`
  flex-direction: row;
  align-items: center;
`;

const ProjectTitle = styled(Text)`
  font-size: 19px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${({ theme }) => theme.colors.primary} 3px solid;
  margin-left: 5px;
  margin-right: 20px;
`;

const Grid = styled.div`
  display: grid;
  flex: 1;
`;

const ProjectImage = styled(Image)`
  display: flex;
  width: 150px;
  height: 150px;
  padding: 30px;
  margin: 5px;
`;

const ProjectImageMobile = styled(Image)`
  display: flex;
  width: 55px;
  height: 55px;
  padding: 10px;
  margin: 5px;
`;

export default Project;
