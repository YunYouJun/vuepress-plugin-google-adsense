const adsSrc = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

const isAdsense = (headItem) => {
  return headItem[0] === "script" && headItem[1] && headItem[1].src === adsSrc;
};

const addAdsTxt = require("./addAdsTxt");

module.exports = (options = {}, ctx) => {
  const adClient =
    options.adClient || options.ad_client || "ca-pub-2245427233262012";
  return {
    define() {
      if (ctx.isProd) {
        ctx.siteConfig.head = ctx.siteConfig.head || [];
        if (ctx.siteConfig.head.findIndex(isAdsense) < 0) {
          ctx.siteConfig.head.push([
            "script",
            {
              "data-ad-client": adClient,
              async: true,
              src: adsSrc,
            },
          ]);
        }
      }

      return {
        GOOGLE_ADSENSE_ID: adClient,
      };
    },

    async generated() {
      if (adClient && options.adsTxt) {
        addAdsTxt(ctx, adClient);
      }
    },
  };
};
