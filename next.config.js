module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/find',
        permanent: false,
      },
    ]
  },
}