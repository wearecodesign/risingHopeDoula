/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages: set GITHUB_REPOSITORY env (e.g. owner/repo) or leave empty for root
  basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
  assetPrefix: process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
