const publishCmd = `
cd common
npm install
npm version ${process.env.NEXT_VERSION}
npm publish --access public
`;

import config from 'semantic-release-preconfigured-conventional-commits' with { type: "json" };

config.plugins.push(
    [
      "@semantic-release/exec",
      {
        "publishCmd": publishCmd
      }
    ],
    "@semantic-release/github",
    "@semantic-release/git"
);

export default config;