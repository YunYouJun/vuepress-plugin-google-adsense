export default ({ router }) => {
  // Google adsense integration
  if (process.env.NODE_ENV === 'production' && GA_ID && typeof window !== 'undefined') {
    (function (i, s, o, g, r, a, m) {
      (i[r] = i[r] || []).push({
        google_ad_client: GOOGLE_AD_CLIENT,
        enable_page_level_ads: ENABLE_PAGE_LEVEL_ADS
      })
      a = s.createElement(o)
      m = s.getElementsByTagName(o)[0]
      a.async = 1
      a.src = g
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', 'adsbygoogle')
  }
}