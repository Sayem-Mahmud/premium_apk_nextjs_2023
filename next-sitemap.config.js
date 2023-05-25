// @type { import('next-sitemap').IConfig }
const siteUrl = 'https://premium-apk-nextjs-2023.vercel.app'

module.exports = {
    siteUrl,
    exclude: ["/404"],
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/404"],
            },
            { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
            `${siteUrl}/sitemap.xml`,
            `${siteUrl}/server-sitemap.xml`,
        ],
    },
};

// module.exports = {
//     siteUrl,
//     generateRobotsTxt: true, // (optional)
//     // ...other options
//     exclude: ['/server-sitemap.xml'], // <= exclude here
//     robotsTxtOptions: {
//         additionalSitemaps: [
//             'http://localhost:3000/server-sitemap.xml', // <==== Add here
//         ],
//     },
// }