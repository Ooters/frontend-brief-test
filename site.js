/* ──────────────────────────────────────────────────────────────────
   kindling.net — a teaspoon of javascript
   ────────────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  var t0 = (performance && performance.now) ? performance.now() : Date.now();

  // ── auto-fill the year wherever ──────────────────────────────────
  var year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = year;
  });

  // ── visitor counter via localStorage ─────────────────────────────
  // not a real counter. it's your counter, on your machine.
  // that's more honest than most.
  var KEY = 'kindling.visits';
  var visits;
  try {
    visits = parseInt(localStorage.getItem(KEY) || '0', 10);
    if (!isFinite(visits) || visits < 0) visits = 0;
    visits += 1;
    localStorage.setItem(KEY, String(visits));
  } catch (e) {
    visits = 1; // privacy mode etc.
  }
  var pad = String(visits).padStart(7, '0');
  document.querySelectorAll('[data-hit-counter]').forEach(function (el) {
    el.textContent = pad;
  });

  // ── fake-but-honest render time ──────────────────────────────────
  // fires after the document settles. shows real ms-to-ready, formatted
  // like the page took itself very seriously in 2001.
  function paintRenderTime() {
    var t1 = (performance && performance.now) ? performance.now() : Date.now();
    var seconds = ((t1 - t0) / 1000).toFixed(6);
    document.querySelectorAll('[data-render-time]').forEach(function (el) {
      el.textContent = seconds;
    });
  }
  if (document.readyState === 'complete') {
    paintRenderTime();
  } else {
    window.addEventListener('load', paintRenderTime, { once: true });
  }
})();
