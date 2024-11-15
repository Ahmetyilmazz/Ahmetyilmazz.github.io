'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "1e50c1b5ef1fb9668ba3905b82e08a90",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5aa2009f6b5cff2a86b0d100f60e38c3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e0787c6455dccbd5cd39f7f2d0500f7",
".git/logs/refs/heads/main": "d8af8351b1e4ed2966bffbacd5fa12f7",
".git/logs/refs/remotes/origin/main": "33628f7271e44f413f008214473bc2bf",
".git/objects/01/925f84de0246e80f258bcdd115633b00637125": "0dcbe5c94cf5e7c168672d72c05046d0",
".git/objects/04/3aa69b846882076fe0f6ac3922ef15a436c613": "88ce9fc5124a707c7bb0c90cda135880",
".git/objects/05/f71a425ead52962216639d088e7075de4beede": "bdcac09ba7d5911595dabd13a374a706",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/e7a00b7fef4f14671a28cd457f431fcf07240d": "07cfaccdf26c257ebe957ab31618f592",
".git/objects/0f/2cdd6fe266c854adf8b91add6879388732d2bd": "7c5c394c9ebd71aceab104aac45969fd",
".git/objects/11/72886004653e575d34c034f4ecfd6ffd30d1bc": "68dfc87dfb65dfae4202efdae0829c3f",
".git/objects/15/c03e57aaaec7c1738095f8129c148f24aaf58a": "67a4de0f520a0fb9b9cc40db4f193531",
".git/objects/17/05a71ffb57156181f0653e46e0d710b34add45": "d38ffadc9e966139fc8a065c14d24627",
".git/objects/17/bf923106ae0eb2724717a38d5f76b379914a2a": "7f280fd90c907b77b65447667085b185",
".git/objects/1c/419273fbfb84930423858dcac90368e05a4a4a": "5713e70becc35350965fff0c6f354578",
".git/objects/1e/595c09dc3f50879a6f5493cc4d62c6d4ded2a4": "c3e80024b23bf094161d744ff6e7b77d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/c8ea88421f0d7f8fbbf3a651e25b5c8ca32d4d": "729cadb1ef6dce5462ff44d4295c676b",
".git/objects/2b/b8ba8a1045949ef576defe8722b008f357c463": "719657aac677d5cace3aff3011d88406",
".git/objects/2c/6c013ba4c94ce70162c04c0bb91095119d6b8c": "b202c51b82ad7e50071f9491b1248f48",
".git/objects/30/d58a2e5dcc6a3ad47c3eeb004001fc1275d710": "257d1e495a17a3a79b065dd034e8c3b5",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/0ce4e462d0a3dc8a5cba48b81fcf22ea98bfc3": "ab61638e1a21ccb6fb25d1653996eede",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/bf20db9b82e667df64ce3d3ea1ad0d4eadbfdd": "e2867dd92b6fa302675be161e98a68e9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4d/8ce4dffcef0a773f6663a71c5ba98c8a603308": "74ab5c010991fefa14ac1f8d42df0407",
".git/objects/4f/971847ec14ae220a49645dc17527ba2d2c2277": "25bc78870f9193b3bcfbb5706ae929f6",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/5f/ba3d5a0f7de01bd3968770192b6cd130e2c63d": "b5ccbbd923a4409c1f44d209cfc755d0",
".git/objects/60/1e321d2ea8393e2c2a525186d933935555c544": "23c3d1a69a737e5da8e3f95a8d2c1c88",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/70/0be6603870acf66e91437865d1867963cc11c6": "337bbe3c85b40e0f7c8753032902f810",
".git/objects/75/32136dd0242a01d979e412acff6459e8d33cfa": "672d549eb0dd098c60d77b12ac5547cd",
".git/objects/77/e91e641119508a5ab87634459cf73321fca8d9": "c9a5aee7c146247eb62dc5a81b60c8f3",
".git/objects/79/99047d90beaac59995b0e3c3a70abccb54b56f": "08a9b64cb86b0a691c6f1ff254a27b4b",
".git/objects/7c/da98e5d0c757b61d268f7c9255d6d287394f08": "9ff0b8e76722ac82921b8ce22da49f80",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/33480aa01c470786a8973d4c07359a6985b879": "90baa482a8c958b6d27853c03f804350",
".git/objects/9e/c9cde8e0ca6de196cb6c4820ea4892c46f86bc": "49a7cd09f16d3df343b7ef0b7123bca4",
".git/objects/ae/874fb96627ad9f4c1f2bff23fa75142131942d": "a150fcb2e1f08401f5f6930c3caefa69",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/95e70e462999c0daf1d4eb2f1730e85580d1e8": "e3314aee5bf2923fa6edcb66b9452e35",
".git/objects/b8/e1b1c155597884b8dde0e7fcc4045d485e529c": "95c077706978970694762f1fb19cd6d4",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/cb/358992f42e6184c67523a6808a061f24b1362a": "089d3efb49d38ded0e54acd69e372bdf",
".git/objects/cb/90f21a83735c9b5887fc40d90264d95a85ad7b": "03cbdf472c5269336f1528fbaf4a5137",
".git/objects/ce/e890a00c44be0e590197f3fff81025fb9b26bb": "76f98822cb19dfcd7703ad9209bbfa69",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d7/4f7de2956247145aa5a68774acb54ab62ad7ea": "ff27aa5266a298bd32e21ab6fb5b4040",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e4/9a46e5f592abc7f09038e5681d3bdf32062a96": "87e6d156ca3fa14c08610b396f3170eb",
".git/objects/f1/e58bf3476a4c74b49cfb79159090521e68baf2": "a92a6270fc6604e32dde71678bd2351b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/1e98f8d24458c85ccb96ea59e3c4a7b623d269": "0e6529c61f18fde1f82e05845a78bb86",
".git/objects/f7/d625a3341ad0c68d9333d8d31c70798e541034": "048fcc6f7961138f98b74e123f7f19da",
".git/objects/ff/f5a3cd338d1907f3d33d73a60d81cee7966d68": "cfc0de34e72c6213eb22a963e9e4659b",
".git/refs/heads/main": "b8b69e989026d65752bcef390a075043",
".git/refs/remotes/origin/main": "b8b69e989026d65752bcef390a075043",
"assets/AssetManifest.bin": "01ae7ee8aa64b81fd2005ca78ac6e3fc",
"assets/AssetManifest.bin.json": "48ac1d0b16cf29bf1ecf65f439e3ca15",
"assets/AssetManifest.json": "09dea573958596f7c6d3d19cb456596d",
"assets/assets/chatapp.png": "2e6098e474b50dfdfaae3a4e196f3cd4",
"assets/assets/hakkimda.jpg": "ee0e1b7c76608acb3df6fca8c1c93693",
"assets/assets/market.png": "c32e62f476bfc7efa43edcc722ac3015",
"assets/assets/numeric.png": "e8e3541398ab532849b16cf733efbc18",
"assets/assets/numeric_web.png": "46db3b1362e5337f0c718e3c2703b0ad",
"assets/assets/Profil.jpeg": "6f23cc40b18d05d3306f4d88cf189ae8",
"assets/assets/todo.png": "f8e9073ba98bc8bd38d43a70ea6ed680",
"assets/assets/webApp.png": "e51ac82d1c7ed639f996666ae9712489",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "58e2e79f30fe1629f300ec1012beeec7",
"assets/NOTICES": "70a560a5dbb9ff651f2e5a25b4042e98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b397154b238f9fbff7f9b55410399f4f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "a531aeeff750443be67479ef770032b0",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "aabb801c73e362a555765d1655b0dd3f",
"icons/Icon-192.png": "b49071d4e3c8561be508c8ec2edd71b8",
"icons/Icon-32.png": "fa2036a615f65c214b48a80b524014ba",
"icons/Icon-512.png": "ce4a204add8277170a17740e5bdd1c5e",
"icons/Icon-maskable-192.png": "b49071d4e3c8561be508c8ec2edd71b8",
"icons/Icon-maskable-512.png": "ce4a204add8277170a17740e5bdd1c5e",
"index.html": "d5824312309500a42d874e9c0f025f50",
"/": "d5824312309500a42d874e9c0f025f50",
"main.dart.js": "56f44f9d6452222fb90ea46bfd990130",
"manifest.json": "1046394ca1d2d7fc9beb00b62118f232",
"version.json": "980547175e325fe622a3362b84d55b6a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
