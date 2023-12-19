export const SITE = {
  // Site base info
  title: 'PastroX',
  subtitle: 'The Astro Theme',
  author: 'Pastro-Xer',
  description: 'PastroX is an Astro theme, and inherit from ParticleX which is a Hexo theme.',
  keywords: 'astro,astro theme,pastrox,particlex,blog theme,ssg',
  language: 'zh',

  // Profile picture
  avatar: '/images/avatar.jpg',
  // true: use favicon.svg | false: use avatar
  SiteIcon: false,

  // Home page background image
  background: ['/images/background.png'],

  // Optional colors for category and tag
  colors: ['#ffa2c4', '#00bcd4', '#03a9f4', '#00a596', '#ff7d73'],

  // PastroX theme icon is adopts the Font Awesome 6
  // https://fontawesome.com

  // Side info card
  card: {
    enable: true,
    description: `
      PastroX is an Astro theme
      <br/>
      Inherit from ParticleX`,
    iconLinks: [
      {
        name: 'github',
        iconName: 'github',
        iconTheme: 'brands',
        link: 'https://github.com/qoqiyu/astro-theme-pastrox',
      },
      {
        name: 'bilibili',
        iconName: 'bilibili',
        iconTheme: 'brands',
        link: 'https://www.bilibili.com',
      },
      {
        name: 'twitter',
        iconName: 'twitter',
        iconTheme: 'brands',
        link: 'https://twitter.com',
      },
      {
        name: 'reddit',
        iconName: 'reddit',
        iconTheme: 'brands',
        link: 'https://www.reddit.com',
      },
    ],
    friendLinks: [
      {
        name: 'Argvchs',
        link: 'https://argvchs.github.io',
      },
    ],
  },

  // Main menu navigation
  menu: [
    {
      name: 'Home',
      iconName: 'house',
      iconTheme: 'solid',
      link: '/',
    },
    {
      name: 'About',
      iconName: 'id-card',
      iconTheme: 'solid',
      link: '/about',
    },
    {
      name: 'Archives',
      iconName: 'box-archive',
      iconTheme: 'solid',
      link: '/archives',
    },
    {
      name: 'Categories',
      iconName: 'bookmark',
      iconTheme: 'solid',
      link: '/categories',
    },
    {
      name: 'Tags',
      iconName: 'tags',
      iconTheme: 'solid',
      link: '/tags',
    },
  ],

  // Pagination
  pageSize: 10,

  // Footer info
  footer: {
    since: 2022,
    // Customize the server domain name ICP
    ICP: {
      enable: false,
      code: '',
      link: '',
    },
  },

  // Polyfill
  // https://polyfill.io
  polyfill: {
    enable: false,
    features: 'default',
  },

  // Search
  search: {
    enable: true,
  },
}

export const BaseUrl = {
  BASE: import.meta.env.BASE_URL,
  POST: import.meta.env.BASE_URL + 'posts/',
  CATEGORIES: import.meta.env.BASE_URL + 'categories/',
  TAGS: import.meta.env.BASE_URL + 'tags/',
}
