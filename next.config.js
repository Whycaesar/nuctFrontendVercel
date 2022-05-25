module.exports = {
  env: {
    SITETITLE: "Nuct Creative Production",
    APIURL: "http://localhost:1337/api",
  },
  devIndicators: {
    buildActivity: false
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'https://www.youtube-nocookie.com/embed/', // Matched parameters can be used in the destination
      },
    ]
  },
}

