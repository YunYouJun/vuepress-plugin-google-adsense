const isAdsense = headItem => {
  return (
    headItem[0] === "script" &&
    headItem[1] &&
    headItem[1].src === "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  )
}

module.exports = (options = {}, ctx) => ({
  define() {
    if (ctx.isProd) {
      ctx.siteConfig.head = ctx.siteConfig.head || [];
      if (ctx.siteConfig.head.findIndex(isAdsense) < 0) {
        ctx.siteConfig.head.push([
          "script",
          {
            "data-ad-client": options.ad_client || "ca-pub-2245427233262012",
            async: true,
            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          }
        ]);
      }
    }
    return {};
  }
});
