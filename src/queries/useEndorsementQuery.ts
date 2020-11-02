import { graphql, useStaticQuery } from 'gatsby';
import { Endorsements } from '../types';

export type QueryResponse = {
  allContentfulEndorsements: {
    edges: {
      node: Endorsements;
    }[];
  };
};

export const useEndorsementsQuery = (): Endorsements[] => {
  const data = useStaticQuery<QueryResponse>(graphql`
    query EndorsementsQuery {
      allContentfulEndorsements {
        edges {
          node {
            authorLinkedin
            author
            endorsement
          }
        }
      }
    }
  `);

  const {
    allContentfulEndorsements: { edges },
  } = data;

  return edges.map((i) => i.node);
};
