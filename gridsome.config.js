// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost', //garpgQl query的对象名
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post'],
        // singleTypes: ['impressum'], //单个节点
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        //受保护的数据
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
