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
          path: "FavoriteApp/current",
          // children: [["/favoriteApp/current", "front end"]],
        },
        {
          title: "VSCode 相关",
          collapsable: true,
          children: [
            {
              title: "vscode_plugins",
              path: "VSCode/vscode_plugins",
            },
            {
              title: "enable_preview",
              path: "VSCode/enable_preview",
            },
          ],
        },
        {
          title: "Ubuntu 相关",
          collapsable: true,
          children: [
            ["Ubuntu/ctrl_alt_arrow_conflict", "ctrl_alt_arrow_conflict"],
            ["Ubuntu/space_small", "space_small"],
            ["Ubuntu/theme", "theme"],
          ],
        },
        {
          title: "Front End",
          collapsable: true,
          children: [
            [
              "FrontEnd/useful_ebsites",
              "useful_websites_every_front-end_developer_hould_know_about",
            ],
          ],
        },
        {
          title: "Other 其他",
          collapsable: true,
          children: [
            [
              "Other/unicode编码后的汉字JS转换方法.md",
              "&#x(unicode编码后的汉字)JS转换方法",
            ],
            ["Other/stash.md", "stash"],
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
