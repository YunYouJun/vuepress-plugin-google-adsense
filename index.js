module.exports = (options = {}, ctx) => ({
  define() {
    if (ctx.isProd) {
      ctx.siteConfig.head = ctx.siteConfig.head || [];
      ctx.siteConfig.head.push([
        "script",
        {
          "data-ad-client": options.ad_client || "ca-pub-2245427233262012",
          async: true,
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        }
      ]);
    }
    return {};
  }
});
