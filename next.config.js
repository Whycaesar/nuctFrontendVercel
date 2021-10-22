module.exports = {
env: {
    SITETITLE: "Nuct Creative Production",
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

