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
              title: "vscode_plugins",
              path: "/vscode/vscode_plugins",
            },
            {
              title: "enable_preview",
              path: "/vscode/enable_preview",
            },
          ],
        },
        {
          title: "Ubuntu 相关",
          collapsable: false,
          children: [
            ["/ubuntu/ctrl_alt_arrow_conflict", "ctrl_alt_arrow_conflict"],
            ["/ubuntu/space_small", "space_small"],
            ["/ubuntu/theme", "theme"],
          ],
        },
      ],
    },
  },
};
