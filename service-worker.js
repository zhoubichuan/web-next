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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "215cceacbc78bbc94dea42046903df7e"
  },
  {
    "url": "assets/css/0.styles.0feff5d1.css",
    "revision": "830d3d46c93f6fbf96085411abbdf0e7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.25a67af1.js",
    "revision": "3d2d5e3daf4186cadacc4bba382a4e1e"
  },
  {
    "url": "assets/js/10.fb919f93.js",
    "revision": "51597a7f287109a4c829abff17278bbf"
  },
  {
    "url": "assets/js/11.52cf10e0.js",
    "revision": "f4538393d1d614ce205976df666b6f27"
  },
  {
    "url": "assets/js/12.ae115e72.js",
    "revision": "286d14664b37b6c045b001e4a9c38a88"
  },
  {
    "url": "assets/js/13.a9f17132.js",
    "revision": "4eb3ff7fe3b03d750a7f24ec371d0f4d"
  },
  {
    "url": "assets/js/14.0467a0cb.js",
    "revision": "4f7992e3ce4556af3442b358f4a3b43d"
  },
  {
    "url": "assets/js/15.1ffe0529.js",
    "revision": "bad78b69dfad519e08e4d475741fe7b6"
  },
  {
    "url": "assets/js/16.fb40166e.js",
    "revision": "55a30ba4f461675c372034b6f00a79a9"
  },
  {
    "url": "assets/js/17.24c17daa.js",
    "revision": "87cb663af29f796b79b01413c25136c4"
  },
  {
    "url": "assets/js/18.e778f005.js",
    "revision": "a5dabee723dcffba517f37fad466eebb"
  },
  {
    "url": "assets/js/19.caf246d2.js",
    "revision": "99874c36ae0ac4a0b25b64fca385fa40"
  },
  {
    "url": "assets/js/2.d6f3f833.js",
    "revision": "8876a614819320c0f4900a29a521b8c3"
  },
  {
    "url": "assets/js/20.0156e043.js",
    "revision": "acfc0da18fe6cde498ea7cb7a44031cd"
  },
  {
    "url": "assets/js/21.99ce1862.js",
    "revision": "5a7d4136602b21ec268f78f578881e94"
  },
  {
    "url": "assets/js/22.0b868ac0.js",
    "revision": "af28750ba184966ab9c2ff6164f196f8"
  },
  {
    "url": "assets/js/23.0e5ea883.js",
    "revision": "5af45b23733fd2779df98a93ddb9026f"
  },
  {
    "url": "assets/js/24.466cb42f.js",
    "revision": "86298f8b08917ca7abe392f7da633e05"
  },
  {
    "url": "assets/js/25.63077962.js",
    "revision": "3fbb1d88b3474c47d4f1a7bc521e589a"
  },
  {
    "url": "assets/js/26.c3c2d762.js",
    "revision": "0213803c42ee035577343a499939858d"
  },
  {
    "url": "assets/js/27.7f0afd81.js",
    "revision": "19c0360de7531b10835a4d1924994164"
  },
  {
    "url": "assets/js/28.b515ff38.js",
    "revision": "9d0e0a18e22a7da13f896991f9c853b1"
  },
  {
    "url": "assets/js/29.4bd78fbe.js",
    "revision": "a915140a59a5db0bbcb2eda0122422c2"
  },
  {
    "url": "assets/js/3.e590bb49.js",
    "revision": "45524cf88c3df7507edac7e0e9cc51f5"
  },
  {
    "url": "assets/js/30.baf8fa5b.js",
    "revision": "7e0193ae21a3f62c96b49e4c2553df22"
  },
  {
    "url": "assets/js/31.a00252dc.js",
    "revision": "b37cd4778f57542324af4c761fd421c8"
  },
  {
    "url": "assets/js/32.3c5395a2.js",
    "revision": "731ee7d2a2e1f15f5d7315ff3122c49d"
  },
  {
    "url": "assets/js/33.e16f764f.js",
    "revision": "fabc9e203392c9af8d541b63f559a7ef"
  },
  {
    "url": "assets/js/34.30a0a3b1.js",
    "revision": "7d7e9097c4c02236e4e3463faa745c42"
  },
  {
    "url": "assets/js/35.3be83656.js",
    "revision": "ae665880edf9992dab7673956c10579f"
  },
  {
    "url": "assets/js/36.009a247b.js",
    "revision": "fb44bafa08a4f3c0d2a9e3ee4f4f7d5d"
  },
  {
    "url": "assets/js/37.d1785c85.js",
    "revision": "f39518d226eb4099f9e3029acb9e5151"
  },
  {
    "url": "assets/js/38.9978098d.js",
    "revision": "8aacc6109be8a560cfae3f9de6f1b696"
  },
  {
    "url": "assets/js/39.e51b23e3.js",
    "revision": "60767e5cb3c43337b278649ff4ebf0ff"
  },
  {
    "url": "assets/js/4.3f9d2a85.js",
    "revision": "0e8ebdb4235c69b1926fbe379c615217"
  },
  {
    "url": "assets/js/40.cf5f5731.js",
    "revision": "59fd87e2c28de9374b815c4416285863"
  },
  {
    "url": "assets/js/41.c876baff.js",
    "revision": "99e7d76e5e70d730bb852e39416cf62c"
  },
  {
    "url": "assets/js/42.03413c6b.js",
    "revision": "7fbff33cc90906cdc2ced33b78c6faa0"
  },
  {
    "url": "assets/js/43.a72694b2.js",
    "revision": "a8b7bfa6f1846c0b2f40b5a2dfd813b4"
  },
  {
    "url": "assets/js/44.59454faa.js",
    "revision": "7844ee615e7c705cee4c1ede25e07dca"
  },
  {
    "url": "assets/js/45.91bf4574.js",
    "revision": "c824771690dc684f745c5a08fc2bdc40"
  },
  {
    "url": "assets/js/46.12af7684.js",
    "revision": "04be3d12b5b08ff4f5f3f9a7cd5d185a"
  },
  {
    "url": "assets/js/47.56ced8ce.js",
    "revision": "b287a6e2328fea7b58f841d0a3c06b8a"
  },
  {
    "url": "assets/js/48.da626771.js",
    "revision": "df2700c1c6b4314f3a25196756fd2701"
  },
  {
    "url": "assets/js/49.fc2684cb.js",
    "revision": "93d2fc8de7ec40bcf2325bdc91b87716"
  },
  {
    "url": "assets/js/5.c7cb9d27.js",
    "revision": "6946fde7b533853614c9ec664b168044"
  },
  {
    "url": "assets/js/50.13ac3a08.js",
    "revision": "70dfe0ffd802156b90fb0dad65180091"
  },
  {
    "url": "assets/js/51.675cc117.js",
    "revision": "079ea0625f529b36bdbd9b60d3896c6c"
  },
  {
    "url": "assets/js/52.fd04e7e6.js",
    "revision": "7ae2f5b05794c2dbd479bef99f9a169c"
  },
  {
    "url": "assets/js/53.abc4fe68.js",
    "revision": "d222c3f4c290b98a3a4f2c9a43f4da23"
  },
  {
    "url": "assets/js/54.37f7b8ed.js",
    "revision": "3167a2c73f535a87d4b9de8ce35117f0"
  },
  {
    "url": "assets/js/55.c48b66f1.js",
    "revision": "3e8bd89be92d6451d779ad8d6f9b5aad"
  },
  {
    "url": "assets/js/56.c7b509d5.js",
    "revision": "9bbd719e48089048e94a0a6b0f6d19d0"
  },
  {
    "url": "assets/js/57.c484feb6.js",
    "revision": "4f156f1da5e7c559972c89d66faaeee1"
  },
  {
    "url": "assets/js/58.980687dd.js",
    "revision": "14c780f4425920bf8f5afac98b09155b"
  },
  {
    "url": "assets/js/59.df5d027b.js",
    "revision": "b5b7a0ac43c0fff4de69559a7a5918c0"
  },
  {
    "url": "assets/js/6.0be4e157.js",
    "revision": "40e71cdc62c687fddbd23b61a8b52437"
  },
  {
    "url": "assets/js/60.1cb9e302.js",
    "revision": "628cf2723a611f4360a4bf79d38b622a"
  },
  {
    "url": "assets/js/61.bcf61a4e.js",
    "revision": "4b24fc472daee7e5519d14aa5b833404"
  },
  {
    "url": "assets/js/62.21d2fa2c.js",
    "revision": "3a7ec8f8cb361fe3a68c1641e796443d"
  },
  {
    "url": "assets/js/63.aac0f1fa.js",
    "revision": "6e5395621481adac18b982102fcb9917"
  },
  {
    "url": "assets/js/64.f9f1fe8f.js",
    "revision": "bc03c59b465d48a642c9a5d3c9864201"
  },
  {
    "url": "assets/js/65.8aa0fd8f.js",
    "revision": "645f69ed33f8378dfb718c46a40edb4b"
  },
  {
    "url": "assets/js/66.b43d7671.js",
    "revision": "1372f9c6aa958d0ad5df495daaadc308"
  },
  {
    "url": "assets/js/67.43a24117.js",
    "revision": "c72d757574418ad0f58e786ec6ae4253"
  },
  {
    "url": "assets/js/68.0b60d082.js",
    "revision": "9a207e694ae5aed9897a8f62adaa4ce2"
  },
  {
    "url": "assets/js/7.94bf6868.js",
    "revision": "9050b93df1abc13e95170de10d31a3f3"
  },
  {
    "url": "assets/js/app.d8bc7585.js",
    "revision": "2aa1480339b03bb48829a5d13466e1b7"
  },
  {
    "url": "assets/js/vendors~docsearch.d3844009.js",
    "revision": "35736f6febdf8d4b98599806c297b51c"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "3edf0cb93c241133952266ca6cd5c8b4"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "3fa6b3d3b78ef10b58eccb824af4d4dd"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "f9c651586b7e9bd85510f606c7ad3426"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "e8cf4d54b39f8efad632d310f55ea284"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "32c6aa258da7803bb33d145f4bf4bf79"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "ce3d6fcac0e569b599d8b82d9513fd29"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "cb3e0aa56312e06eb02c28afa6e09fa1"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "42fe0f04d89bc9de8832aebea55d2afb"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "97c93535a19f7d73236f4d1a7ab1daac"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "92f5490a488c43249078240f5a3db261"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "5eb50f3a94fda4d9df7a82721101c3b7"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "41ed2feca6c45bd205adc7c04b54a3b3"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "561a54f3529bb3cb2fcbcdec23998700"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "27b099dd2011e076f142a65e30bf504a"
  },
  {
    "url": "base/practice/1.index.html",
    "revision": "114e87b7ab2aca804fde69d042a5eb9e"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "6f9105e26bc7c43ab9ed25ef31ef1065"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "758108ec61a991bcf01835d5dba65afe"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "c414ec5e3f7e3022ebdc4825ff1931c7"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "dfb7148a0fde0ac5f8a79d76b3ddeed4"
  },
  {
    "url": "base/practice/test.html",
    "revision": "617f9cca8e9b584d0f1e98e733568782"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "d701dec5803e3b516984912b68667142"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "8e3e5380b6d858f751c0c5978d3daa51"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "38813e003dbc5458df57023171e546bb"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "29e16d81a128f3ebcf36d87435d78eab"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "f8cd4100ee78a1595d3fac55fc654455"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "8c509b4789014d503d81eaca747605ab"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "a3b4be10fd13aa28e55c0377b76f1f9d"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "06f8a0bea62195acc7a8585dd79cd8ae"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "3b2aed6398d87259f0894fbdc77bec91"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "93a9a665ea73751aeafd4b6890b415cd"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "e085026ff2cc63611ec6a28a2e7a253b"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "699f064456f8ad7cc295204b8ae0148a"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "81899f751fce70fb0613afdfb663cabc"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "d48468cb65f6b73520ac7a9f07922ac0"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "99e19d102c46baf5e8c3183607da72c2"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "273c951a717fa0a60090b48a4c8ac216"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "9c9486918bbc8d3c4c40403fe0d69a50"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "8dfd510986e23c45c6b0d9036898e073"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "fa35c3be2687b68f2904226cb4a41eb5"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "71edeba93887849db8ac704ede99271f"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "05364b94cf021bb79a1c207e0e0ecc4b"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "6ad83c4793c91c0fcdbaaf09596561ad"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "30a4a2307ad4ed615ba18a3d0f9983a7"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "2798dce016baa13b9d84c02d7642086b"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "c374320aefb83420ba9f213b2f0258c0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
