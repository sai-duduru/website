/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require('react');

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` });

  const beaconToken =
    process.env.GATSBY_CF_BEACON_TOKEN || '64e5894168c24868aa00e0df18660ee1';

  setHeadComponents([
    <script
      key="cloudflare-analytics"
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={`{"token": "${beaconToken}"}`}
    />,
  ]);
};
