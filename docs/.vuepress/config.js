module.exports = {
  title: 'Knowledge-Bases',
  description: 'Just playing around',
  themeConfig: {
    // 顶部导航兰
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ],
    // 左侧导航兰
    sidebar: [
      // '/',
      {
        title: 'Favorite APP',
        path: '/favoriteApp/current',
      },
      {
        title: 'VSCode 相关',
        path: '/VSCode/',
        children: [
          {
            title: 'plugins',
            path: '/vscode/vscode-plugins',
          },
          // {
          //   title: 'two',
          //   path: '/foo/two',
          // },
        ]
      },
      {
        title: 'Ubuntu 相关',
        path: '/ubuntu',
        children: [
          {
            title: 'ctrl-alt-arrow',
            path: '/ubuntu/ctrl-alt-arrow',
          },
          {
            title: 'space',
            path: '/ubuntu/space',
          },
          {
            title: 'theme',
            path: '/ubuntu/theme',
          },
        ]
      },
    ],
  }
};