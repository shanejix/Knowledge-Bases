module.exports = {
  title: "Knowledge-Bases",
  description: "Just playing around",
  themeConfig: {
    // 顶部导航兰
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
    // 左侧导航兰
    sidebar: {
      "/": [
        {
          title: "Favorite APP",
          collapsable: false,
          path: "/favoriteApp/current",
          // children: [["/favoriteApp/current", "front end"]],
        },
        {
          title: "VSCode 相关",
          collapsable: false,
          children: [
            {
              title: "plugins",
              path: "/vscode/vscode-plugins",
            },
          ],
        },
        {
          title: "Ubuntu 相关",
          collapsable: false,
          children: [
            ["/ubuntu/ctrl-alt-arrow", "ctrl-alt-arrow"],
            ["/ubuntu/space", "space"],
            ["/ubuntu/theme", "theme"],
          ],
        },
      ],
    },
  },
};
