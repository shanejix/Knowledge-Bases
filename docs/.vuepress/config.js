module.exports = {
  title: "Knowledge-Bases",
  description: "Just playing around",
  // base: "/Knowledge-Bases/",
  base: "/",
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
          collapsable: true,
          path: "favorite-app/current",
          // children: [["/favoriteApp/current", "front end"]],
        },
        {
          title: "VSCode 相关",
          collapsable: true,
          children: [
            {
              title: "vscode-plugins",
              path: "vscode/vscode-plugins",
            },
            {
              title: "enable-preview",
              path: "vscode/enable-preview",
            },
          ],
        },
        {
          title: "Ubuntu 相关",
          collapsable: true,
          children: [
            ["ubuntu/ctrl-alt-arrow-conflict", "ctrl-alt-arrow-conflict"],
            ["ubuntu/space-small", "space-small"],
            ["ubuntu/theme", "theme"],
          ],
        },
        {
          title: "Front End",
          collapsable: true,
          children: [
            [
              "front-end/useful-websites",
              "useful-websites-every-front-end-developer-hould-know-about",
            ],
          ],
        },
        {
          title: "Other 其他",
          collapsable: true,
          children: [
            [
              "other/unicode编码后的汉字JS转换方法.md",
              "&#x(unicode编码后的汉字)JS转换方法",
            ],
            ["other/stash.md", "stash"],
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
