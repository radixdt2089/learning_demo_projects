module.exports = {
  async rewrites() {
    return [
      {
        source: '/docs/:id',
        destination: '/posts/:id',
      },
    ]
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/dofo',
  //       destination: '/don2',
  //       permanent : true,
  //     },
  //     {
  //       source:'/docs/:id',
  //       destination : '/posts/:id',
  //       permanent : true,
  //     }
  //   ]   
  // },
  // reactStrictMode: true,
  // basePath : '/home', // start with localhost:3000:/Home is render index page.
  env : {
    SERVER : process.env.SERVER,
    JWT_KEY : process.env.JWT_KEY ,
  },
}

  