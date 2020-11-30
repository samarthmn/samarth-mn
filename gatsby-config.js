const about = require('./about.json');

require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID, DETERMINISTIC } = process.env;

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-styled-components',
  'gatsby-transformer-remark',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://www.samarthmn.com',
      sitemap: 'https://www.samarthmn.com/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `${about.name}'s Portfolio`,
      short_name: about.name,
      start_url: '/',
      background_color: about.colors.background,
      theme_color: about.colors.primary,
      display: 'minimal-ui',
    },
  },
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    },
  },
  {
    resolve: 'gatsby-source-medium',
    options: {
      username: about.mediumUser || '@medium',
    },
  },
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  plugins,
  siteMetadata: {
    isMediumUserDefined: !!about.mediumUser,
    deterministic: !!DETERMINISTIC,
    siteUrl: `https://www.samarthmn.com`,
  },
};
