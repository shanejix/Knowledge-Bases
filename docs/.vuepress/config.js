module.exports = {
  title: "Knowledge-Bases",
  description: "Just playing around",
  base: "/Knowledge-Bases/",
  // base: "./",
  head: [
    ["link", { rel: "icon", href: "/yoyo.jpg" }],
    // [
    //   "script",
    //   { src: "https://hm.baidu.com/hm.js?4484bd6412288feacc311fd7f2054116" },
    // ],
  ],
  themeConfig: {
    // 顶部导航兰
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
    // 左侧导航兰
    sidebar: {
      "/main/": [
        {
          title: "Favorite APP",
          collapsable: false,
          path: "favoriteApp/current",
          // children: [["/favoriteApp/current", "front end"]],
        },
        {
          title: "VSCode 相关",
          collapsable: false,
          children: [
            {
              title: "vscode_plugins",
              path: "vscode/vscode_plugins",
            },
            {
              title: "enable_preview",
              path: "vscode/enable_preview",
            },
          ],
        },
        {
          title: "Ubuntu 相关",
          collapsable: false,
          children: [
            ["ubuntu/ctrl_alt_arrow_conflict", "ctrl_alt_arrow_conflict"],
            ["ubuntu/space_small", "space_small"],
            ["ubuntu/theme", "theme"],
          ],
        },
        {
          title: "Other 其他",
          collapsable: false,
          children: [
            [
              "other/&#x(unicode编码后的汉字)JS转换方法",
              "&#x(unicode编码后的汉字)JS转换方法",
            ],
          ],
        },
      ],
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [],
};
