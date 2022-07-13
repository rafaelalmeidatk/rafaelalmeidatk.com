const withMDX = require('@next/mdx')();

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
});
