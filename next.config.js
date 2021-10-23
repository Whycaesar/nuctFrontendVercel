module.exports = {
  env: {
    SITETITLE: "Nuct Creative Production",
    APIURL: "http://192.168.0.10:1337",
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

