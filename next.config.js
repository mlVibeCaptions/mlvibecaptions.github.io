const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    unstable_staticImage: false
})

module.exports = withNextra(
    {
        basePath: process.env.BASE_PATH,
        assetPrefix: process.env.BASE_PATH,
        images: {
            unoptimized: true
        }
    }
)

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
