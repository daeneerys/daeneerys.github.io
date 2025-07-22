'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6bfe7f78f52b1dd314dd00960e30251a",
"assets/AssetManifest.bin.json": "db8c0d23f02360169e0db01f7c82dc9d",
"assets/AssetManifest.json": "7e09b7049cf292b555b193fea7e977d6",
"assets/assets/images/cacti/cacti_group.png": "9f25b62bfa16295c0404836c03cea132",
"assets/assets/images/cacti/cacti_large_1.png": "7f7ab49cb01f305c3c172b6d545834e9",
"assets/assets/images/cacti/cacti_large_2.png": "2ba073b2d4e9867e42d6b405255e5217",
"assets/assets/images/cacti/cacti_small_1.png": "897831ff6817113c6100553c4c88c5b9",
"assets/assets/images/cacti/cacti_small_2.png": "17e03de1680df08597b239f7eef84b6d",
"assets/assets/images/cacti/cacti_small_3.png": "49d60652da7a8a1387162e8cfad8a9df",
"assets/assets/images/cloud.png": "1194dac984fe89ce7dddf45bc938f6b2",
"assets/assets/images/dino/dino_1.png": "87e432cd26c7f815fe662e5ae5c9eab6",
"assets/assets/images/dino/dino_2.png": "f315b7994dffb09b737c47a95306a99d",
"assets/assets/images/dino/dino_3.png": "fe560e29f430c74b71cf1932835c5f9e",
"assets/assets/images/dino/dino_4.png": "87e432cd26c7f815fe662e5ae5c9eab6",
"assets/assets/images/dino/dino_5.png": "c93c080ec3f102352cf20c54e6d6d918",
"assets/assets/images/dino/dino_6.png": "9892e54ab7f8bcf53572794a279698ef",
"assets/assets/images/dino_all.png": "509588200e431bed5d733c9addfa900c",
"assets/assets/images/etc/bag_home.png": "ac5f27cab10cd9f7e6459157527304ed",
"assets/assets/images/etc/games_icon.png": "000cda223eae420329159aa1dc276ac0",
"assets/assets/images/etc/shopping_cart.png": "c343ae9b9b4e0ad92e0b20b130e339ff",
"assets/assets/images/foods/bread_food.png": "f43f4e0eff35840ead4bf03612d75a9a",
"assets/assets/images/foods/candy_food.png": "a536fbe052f1ee68b500c115ed734e0d",
"assets/assets/images/foods/cheese_food.png": "1b0de1e2a21f478c1b6bb49ec34f8e26",
"assets/assets/images/foods/chocolate_food.png": "920664a609201ce723eaa114daf464ec",
"assets/assets/images/foods/eggs_food.png": "a6c40d6f70508b3eb1c3471d0e913e9f",
"assets/assets/images/foods/hotdogsandwich_food.png": "086bef88444d3468007491bb2eba7666",
"assets/assets/images/foods/icecream_food.png": "a9b4960cc87015f2df7991ad20bc74d7",
"assets/assets/images/foods/meat_food.png": "26ef2369c41d6f275f59e3ad3d39c6bb",
"assets/assets/images/foods/nuggetsfries_food.png": "6e0eec9f64c58d05be54ede7bac21fc5",
"assets/assets/images/foods/pizza_food.png": "07354427a18032b95398bcfd0b6ce0b9",
"assets/assets/images/foods/salad_food.png": "a3d488e2acb665a8ae8bdc7468f817a4",
"assets/assets/images/foods/salmon_food.png": "bc7698f1cbbb272d9ef3b5d2f6310391",
"assets/assets/images/games/background.png": "1050b154738257629f1eb87b230d6843",
"assets/assets/images/games/DinoRun.png": "a2b3d2d43a6a10823ba9283864568355",
"assets/assets/images/games/memorymatch.png": "f41a60435eff9bfd9e27c78ef5f3d765",
"assets/assets/images/games/memorynobg.png": "018b45e5287f434a96fe8ae7780e4282",
"assets/assets/images/ground.png": "db55805383a6be5b4dc79cfc072c81d8",
"assets/assets/images/ptera/ptera_1.png": "5562784ae28b5806ebc677762ec151f2",
"assets/assets/images/ptera/ptera_2.png": "3c26cf2df2f9251ca980258b50c3bcdc",
"assets/assets/images/tiger/tiger_blink.png": "494f17ed991f51da745d028d3c0946cd",
"assets/assets/images/tiger/tiger_happy.png": "115f52902d871defeb10ffd82ea9d0b4",
"assets/assets/images/tiger/tiger_normal.png": "728737b95db47ac0cfb99147ce3f9e53",
"assets/assets/images/tiger/tiger_normal_blink.png": "df69faa07f9779b3b3bab1f675902cfe",
"assets/assets/images/tiger/tiger_open_mouth.png": "a048aca3063aa48c7e081d640de35d54",
"assets/assets/images/tiger/tiger_sad.png": "17926caf8743801982946caf0531bc2b",
"assets/assets/images/tiger/tiger_sad_blink.png": "d2df391de5b0bfebc48e3f9ba8774233",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "acd5555cdcb10f1124ad3393b988739c",
"assets/NOTICES": "7ef4f3ec91c0ceb1270a1212f6f1d003",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "35df02eee3d226f7574e29c023c0c0bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fb0e8d00802c4826b045d242525f539a",
"/": "fb0e8d00802c4826b045d242525f539a",
"main.dart.js": "b602eff2ffef51d46e0ca470929675c6",
"manifest.json": "900fc85c0296ed34b6248893699ae8aa",
"version.json": "aab51d2c9c972cacf68d2fc539bfd6b6"};
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
