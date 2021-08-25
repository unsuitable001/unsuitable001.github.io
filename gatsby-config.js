module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://unsuitable001.github.io/`,
    // Your Name
    name: 'Soumyadip Mondal',
    // Main Site Title
    title: `Soumyadip Mondal | App/Backend Developer`,
    // Description that goes under your name in main bio
    description: `Google Summer of Code 2021 @ Dart (Google) | GDSC Lead | Learning AppDev & Backend.`,
    // Optional: Twitter account handle
    author: `@unsuitable001`,
    // Optional: Github account URL
    github: `https://github.com/unsuitable001`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/unsuitable001/`,
    // Content of the About Me section
    about: `Hi 👋! I'm Soumyadip. I'm a Computer Science and Engineering undergrad. I love to develop solutions using my keyboard. Currently exploring the world of App Development and Backend Engineering. I do open-source and teach people in between. Slowly building up DS-Algo skills to help the humanity.
    
    p.s. I ♥️ Music.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'package:cronet',
        description:
          'A HTTP library for Dart Native platfroms (Flutter + CLI) with QUIC/HTTP3 support and at least twice faster than the standard library.',
        link: 'https://github.com/google/cronet.dart',
      },
      {
        name: 'BitViz',
        description:
          'A bit manipulation visualizer.',
        link: 'https://unsuitable001.github.io/BitViz',
      },
      {
        name: 'AttnSheet',
        description:
          'An attendence management app with cloud sync (Google Drive) and automated report generation.',
        link: 'https://github.com/unsuitable001/AttnSheet',
      },
      {
        name: 'PaperPlane',
        description:
          'A minimal peer to peer video/audio chatting application based on WebRTC.',
        link: 'https://drive.google.com/file/d/1XCZmBAulqA2TUt-mdTdozmu8WkVD34P7/view',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Dart Team (Google)',
        description: 'Student Developer (Google Summer of Code), May 2021 - August 2021',
        link: 'https://summerofcode.withgoogle.com/projects/#4757095741652992',
      },
      {
        name: 'Sister Nivedita University',
        description: 'Contest Platform Developer, May 2020',
        link: 'https://snuniv.ac.in',
      },
      {
        name: 'Your company, maybe?',
        description: 'Help me fill this space with my honest work ฅ^•ﻌ•^ฅ',
        link: 'https://unsuitable001.github.io/Soumyadip_Mondal_Resume_Public.pdf',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C/C++, Dart, Python, JavaScript, Flutter, Flask, VueJS, TailwindCSS, Foreign Function Interface',
      },
      {
        name: 'Databases',
        description: 'OracleSQL, Firestore, Real-time Database (Firebase)',
      },
      {
        name: 'Other',
        description:
          'Docker, Firebase, CI / CD, Microservices, API design',
      },
      {
        name: 'Currently Learning',
        description:
          'Django, MongoDB, PostgreSQL, refining DSA and many more.',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
