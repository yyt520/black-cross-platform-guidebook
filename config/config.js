const config = {
  mode: 'site',
  title: 'Cross Platform Guidebook',
  description: '跨平台开发完全知识体系',
  base: '/black-cross-platform-guidebook/',
  publicPath: '/black-cross-platform-guidebook/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/cross-platform-guidebook-favicon.svg',
  hash: true,
  exportStatic: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/yyt520/black-cross-platform-guidebook',
    },
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
