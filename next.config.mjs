import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  }
})

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/dashboard-documentation',
  assetPrefix: '/dashboard-documentation',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard-documentation',
        permanent: false,
        basePath: false,
      },
    ]
  },
})