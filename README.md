# vuepress-plugin-google-adsense

> [Google adsense](https://www.google.cn/adsense/) plugin for vuepress

Use google [automatic advertisement](https://support.google.com/adsense/answer/9261306) for your vuepress site.
(Follow Google Ad [Code Implementation Guide](https://support.google.com/adsense/answer/9274634))

[![npm](https://img.shields.io/npm/v/vuepress-plugin-google-adsense.svg)](https://www.npmjs.com/package/vuepress-plugin-google-adsense)
[![download](https://img.shields.io/npm/dt/vuepress-plugin-google-adsense.svg)](https://npmcharts.com/compare/vuepress-plugin-google-adsense?minimal=true)
[![GitHub license](https://img.shields.io/github/license/YunYouJun/vuepress-plugin-google-adsense.svg)](https://github.com/YunYouJun/vuepress-plugin-google-adsense/blob/master/LICENSE)

## Install

```sh
yarn add -D vuepress-plugin-google-adsense
# OR
# npm install -D vuepress-plugin-google-adsense
```

## Usage

```js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-google-adsense",
      {
        ad_client: "ca-pub-2245427233262012" // replace it with your ad_client
      }
    ]
  ]
};
```

More Info: [Using a Plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html)

If you don't have a google adsense account, you need register one [here](https://www.google.com/adsense/).

If you pass, google adsense will give you a script like this.

```html
<script
  data-ad-client="ca-pub-2245427233262012"
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
></script>
```

### Other method

In fact, when this plugin was developed, Google's automatic adsense code was not as simple as it is now.

And now, you can just insert the following code in `config.js` instead of this plugin.

```js
module.exports = {
  head: [
    [
      "script",
      {
        "data-ad-client": "ca-pub-2245427233262012",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ]
  ]
};
```

> [Config Reference | Vupress](https://vuepress.vuejs.org/config/#head)

One advantage of plugin is that it can decide whether to show by [ctx.isProd](https://vuepress.vuejs.org/plugin/context-api.html#ctx-isprod).

## Options

### ad_client

- Type: `string`
- Default: `undefined`

Provide the Google Adsense ID to enable integration.
