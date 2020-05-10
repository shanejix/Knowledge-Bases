module.exports = {
  title: 'Knowledge-Bases',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: [
      '/',
      {
        title: 'foo',
        path: '/foo/',
        children: [
          {
            title: 'one',
            path: '/foo/one',
          },
          {
            title: 'two',
            path: '/foo/two',
          },
        ]
      },
      {
        title: 'bar',
        path: '/bar',
        children: [
          {
            title: 'three',
            path: '/bar/three',
          },
          {
            title: 'four',
            path: '/bar/four',
          }
        ]
      },
    ],



  }
};