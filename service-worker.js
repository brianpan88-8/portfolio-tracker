// Service Worker - 投資組合日誌
const CACHE_NAME = 'portfolio-v1';

self.addEventListener('install', e => {
  console.log('SW installed');
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  console.log('SW activated');
});

// 基本 fetch 處理（網路優先）
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
