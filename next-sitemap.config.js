// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://meog.it', // Your website's URL
  generateRobotsTxt: true, // (Optional) Generates a robots.txt file
  sitemapSize: 7000, // Number of URLs per sitemap file
}
