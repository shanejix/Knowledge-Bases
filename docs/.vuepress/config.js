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
      '/',
      {
        title: '常用软件',
        path: '/soft/current',

      },
      {
        title: 'VSCode 相关',
        path: '/vscode/',
        children: [
          {
            title: 'vscode常用插件',
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
            title: 'ubuntu中vscode字体空格缩小问题',
            path: '/ubuntu/ubuntu-space-Issues',
          },
          {
            title: 'ubuntu 18.04下 vscode中ctrl+alt+up/down热键冲突解决',
            path: '/ubuntu/ctrl-alt-arrow',
          }
        ]
      },
    ],
  }
};