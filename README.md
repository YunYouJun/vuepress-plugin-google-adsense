# vuepress-plugin-google-adsense

> Google adsense plugin for vuepress

## Install

```sh
yarn add -D vuepress-plugin-google-adsense
# OR npm install -D vuepress-plugin-google-adsense
```

## Usage

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-google-adsense',
      {
        'google_ad_client': '', // ca-pub-0000000000000000
        'enable_page_level_ads': true
      }
    ]
  ]
}
```

More Info: [Using a Plugin](https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html)

If you don't have a google adsense account, you need register one [here](https://www.google.com/adsense/).

If you pass, google adsense will give you a script like this.

```html
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-0000000000000000",
      enable_page_level_ads: true
  });
</script>
```

## Options

### google_ad_client

- Type: `string`
- Default: `undefined`

Provide the Google Adsense ID to enable integration.

### enable_page_level_ads

- Type: `boolean`
- Default: `true`