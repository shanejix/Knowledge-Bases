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
            title: 'VSCode常用插件',
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
            title: 'ubuntu 18.04 下 VSCode 中 ctrl+alt+up/down 热键冲突解决',
            path: '/ubuntu/ctrl-alt-arrow',
          },
          {
            title: 'ubuntu 中 VSCode 字体空格缩小问题',
            path: '/ubuntu/space',
          },
        ]
      },
    ],
  }
};