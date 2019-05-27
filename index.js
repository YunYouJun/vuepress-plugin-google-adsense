const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {}} = context
    const google_ad_client = options.google_ad_client || siteConfig.google_ad_client
    const enable_page_level_ads = options.enable_page_level_ads || siteConfig.enable_page_level_ads
    const GOOGLE_AD_CLIENT = google_ad_client || false
    const ENABLE_PAGE_LEVEL_ADS = enable_page_level_ads || true
    return { GOOGLE_AD_CLIENT, ENABLE_PAGE_LEVEL_ADS }
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})