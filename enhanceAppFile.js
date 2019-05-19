export default () => {
  // Google adsense integration
  if (process.env.NODE_ENV === 'production' && GOOGLE_AD_CLIENT && typeof window !== 'undefined') {
    (function(tag, src, el, p){
      el = document.createElement(tag)
      el.async = true
      el.src = src
      p = document.getElementsByTagName(tag)[0]
      p.parentNode.insertBefore(el, p)
    })('script', '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')

    var adsbygoogle = window.adsbygoogle || []
    adsbygoogle.push({
      google_ad_client: GOOGLE_AD_CLIENT,
      enable_page_level_ads: ENABLE_PAGE_LEVEL_ADS
    })
  }
}