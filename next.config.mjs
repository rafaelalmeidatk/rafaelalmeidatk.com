import nextMDX from '@next/mdx';
import nextBundleAnalyzer from '@next/bundle-analyzer';
import rehypePrettyCode from 'rehype-pretty-code';

const withMDX = nextMDX({
  options: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word'];
          },
        },
      ],
    ],
  },
});

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
