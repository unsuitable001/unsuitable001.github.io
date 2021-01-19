const { description } = require('../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Soumyadip Mondal - Home',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#1a202c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    // repo: '',
    // editLinks: false,
    // docsDir: '',
    // editLinkText: '',
    // lastUpdated: false,
    nav: [
      {
        text: 'home',
        link: '/',
      },
      {
        text: 'blogs',
        link: 'https://unsuitable001.medium.com'
      },
      {
        text: 'podcasts',
        link: 'https://anchor.fm/unsuitable001/'
      },
      {
        text: 'resume',
        link: 'https://docs.google.com/document/d/1A4wzLlYHKrB_dgTqVzdFH2rquqC1DwvRGKy_ZsiaBsQ/edit?usp=sharing'
      },
    ],
    socials: {
      twitter: 'https://twitter.com/unsuitable001',
      linkedin: 'https://linkedin.com/in/unsuitable001',
      github: 'https://github.com/unsuitable001',
      youtube: 'https://www.youtube.com/channel/UCuNZt3eGVpmbuS6UB4xggoA/',
      medium: 'https://unsuitable001.medium.com'
    }
    // sidebar: {
    //   '/guide/': [
    //     {
    //       title: 'Guide',
    //       collapsable: false,
    //       children: [
    //         '',
    //         'using-vue',
    //       ]
    //     }
    //   ],
    // }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
  ],
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  }
}
