/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bd40e50d6d12bfd0a0b1de77e4b5973c"
  },
  {
    "url": "assets/css/9.styles.b56c6f66.css",
    "revision": "aee6b8e46f3c8ae353c35b7cdc103c67"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d8379d8e.js",
    "revision": "f8580d6f8812b3055ce131a8de2acfb2"
  },
  {
    "url": "assets/js/2.f574a6eb.js",
    "revision": "a4985ab90bd98bafb85c776bcbf44582"
  },
  {
    "url": "assets/js/3.20782115.js",
    "revision": "975de4d301a14349a75534f1bff67a46"
  },
  {
    "url": "assets/js/4.317e16ef.js",
    "revision": "0dd550eccf3885a5cf275da04cd458eb"
  },
  {
    "url": "assets/js/5.2a84b6b6.js",
    "revision": "b70a83fa7ead5ab0e6e5e6f2904d9a1a"
  },
  {
    "url": "assets/js/6.548cb1a3.js",
    "revision": "d1c2d8306969e2c709dfe7f6c27b3ad2"
  },
  {
    "url": "assets/js/7.b0c79aab.js",
    "revision": "220e1497925673c5b268560f91cdab23"
  },
  {
    "url": "assets/js/8.dcb9fc20.js",
    "revision": "709f43bd4c1387ce3510682fbae8f877"
  },
  {
    "url": "assets/js/app.4df5e26a.js",
    "revision": "b69bb87493069588d87eedb56349ec37"
  },
  {
    "url": "config/index.html",
    "revision": "e055f0fc372db6594c87446bafaac0a1"
  },
  {
    "url": "guide/configuration.html",
    "revision": "022b6c6343e4c4726ac9cfbf8d569ce7"
  },
  {
    "url": "guide/index.html",
    "revision": "32646f2a32faa75e368c23606264c500"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "bb9c3abeb3a608bdebc9f9bf644a7768"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "10ddc2963640fb5e5c7ce8a449f0ea8b"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "3697fe5134722708a180ac07dcbe849a"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "9c1e2445bb24052dddf43444c9523a38"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "53251897f8a32cfb74f3a287689ad11c"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "30e442b67ba7ef9bbd32a577fdde9fde"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "414f54a92bf6f40b96cff0df0e989201"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "53251897f8a32cfb74f3a287689ad11c"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "5012f30d63de90c305332285d91456a0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "c15816c786e9f67a060d8599eeaed54d"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "361280534de1f80c43abd3b4e4897407"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "b9a32930ec6270abc498cade9ebfb6a1"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "0dd8c43e1367baacb39480ba76d32f33"
  },
  {
    "url": "index.html",
    "revision": "d1a54bf86f04f550e26f6ca5ae2c5e00"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "69db59dd0a1590ad266513b557403d46"
  },
  {
    "url": "zh/config/index.html",
    "revision": "508e8355d62be55404d13e8027658363"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "531d800e39ed700032d52d1a3935773f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1068ca6742361132390cd673c573a4fc"
  },
  {
    "url": "zh/index.html",
    "revision": "551253045b0a4337efa3bc4570eefbbf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
