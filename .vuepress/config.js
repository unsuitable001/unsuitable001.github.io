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
        link: '/blogs/'
      },
      {
        text: 'resume',
        link: '/resume/'
      },
      {
        text: 'about me',
        link: '/about'
      }
    ],
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
