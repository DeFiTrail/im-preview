/* Walletalk 官网 · 脚本
 * 设备识别和平台排序在页头内联脚本里（首帧前完成，避免跳动）。这里负责：
 * 1. 消息逐条出现（聊天里旧消息平滑上移；循环时先淡出；离开视口或切到后台就暂停）
 * 2. 屏幕外的装饰动画暂停
 * 3. 钱包皮面上的光跟随指针
 * 4. 复制、帮助中心搜索、读屏播报
 * 5. 手机菜单
 */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;

  /* 读屏播报 */
  window.wtSay = function (msg) {
    var live = document.querySelector('[data-live]'); if (!live) return;
    live.textContent = ''; setTimeout(function () { live.textContent = msg; }, 60);
  };

  /* 1a. 聊天：消息逐条出现，循环。所有消息始终占位，未出现的透明；
   * 整叠消息用 transform 往上推，版面不变，不产生布局位移 */
  document.querySelectorAll('.seq--chat').forEach(function (box) {
    var all = Array.prototype.slice.call(box.children);
    var items = all.filter(function (el) { return !el.hasAttribute('data-keep'); });
    all.forEach(function (el) { if (el.hasAttribute('data-keep')) el.classList.add('in'); });
    if (reduce) { items.forEach(function (el) { el.classList.add('in'); }); return; }
    var hold = +(box.dataset.hold || 4200), gap = +(box.dataset.gap || 950);
    var timers = [], seen = false, playing = false;
    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    // 还没出现的消息都在底部：把整叠往下推它们的总高度
    function place(instant) {
      var g = parseFloat(getComputedStyle(box).rowGap) || 0, h = 0;
      items.forEach(function (el) { if (!el.classList.contains('in')) h += el.offsetHeight + g; });
      if (instant) box.style.transition = 'none';
      box.style.transform = 'translateY(' + h + 'px)';
      if (instant) { box.offsetHeight; box.style.transition = ''; }
    }
    function show(el) { el.classList.add('in'); place(); }
    function play() {
      playing = true;
      var t = 600;
      items.forEach(function (el, i) {
        if (i) t += +(el.dataset.wait || gap);
        later(function () { show(el); }, t);
      });
      if (box.dataset.loop !== 'off') later(restart, t + hold);
    }
    function restart() {
      var shown = items.filter(function (el) { return el.classList.contains('in'); });
      shown.forEach(function (el) { if (el.animate) el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 320, easing: 'ease', fill: 'forwards' }); });
      later(function () {
        shown.forEach(function (el) { el.classList.remove('in'); if (el.getAnimations) el.getAnimations().forEach(function (a) { a.cancel(); }); });
        place();
        later(play, 500);
      }, 340);
    }
    function reset() {
      timers.forEach(clearTimeout); timers = []; playing = false;
      items.forEach(function (el) { el.classList.remove('in'); });
      place(true);
    }
    function sync() {
      var go = seen && !document.hidden;
      if (go && !playing) { reset(); play(); } else if (!go && playing) reset();
    }
    reset();
    window.addEventListener('resize', function () { place(true); });
    if (hasIO) {
      new IntersectionObserver(function (es) { seen = es[0].isIntersecting; sync(); }, { threshold: .2 }).observe(box.parentNode);
      document.addEventListener('visibilitychange', sync);
    } else { seen = true; play(); }
  });

  /* 1b. 其他 .seq（首页常见问题）：每一项进入视口时出现，短间隔错开 */
  document.querySelectorAll('.seq:not(.seq--chat)').forEach(function (box) {
    var items = Array.prototype.slice.call(box.children);
    if (reduce || !hasIO) { items.forEach(function (el) { el.classList.add('in'); }); return; }
    var queue = 0;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var el = e.target, delay = queue++ * 70;
        setTimeout(function () { el.classList.add('in'); queue = Math.max(0, queue - 1); }, delay);
      });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  });

  /* 2. 屏幕外的区块暂停装饰动画（钱包光泽、箔卡、声波、呼吸灯） */
  if (hasIO) {
    var secIO = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target.classList.toggle('is-off', !e.isIntersecting); });
    }, { rootMargin: '120px 0px' });
    document.querySelectorAll('main > section').forEach(function (s) { secIO.observe(s); });
  }

  /* 3. 钱包皮面上的光跟随指针：按各自位置计算，逐帧节流，进出有过渡 */
  if (!reduce) {
    document.querySelectorAll('[data-track]').forEach(function (zone) {
      var wallets = Array.prototype.slice.call(zone.querySelectorAll('.wt-wallet'));
      var raf = 0, ev = null;
      function apply() {
        raf = 0; if (!ev) return;
        wallets.forEach(function (w) {
          var r = w.getBoundingClientRect();
          var x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
          var inside = x >= 0 && x <= 1 && y >= 0 && y <= 1;
          w.classList.toggle('is-hover', inside);
          w.classList.add('is-tracking');
          w.style.setProperty('--wt-gx', (Math.min(1.1, Math.max(-.1, x)) * 100).toFixed(1) + '%');
          w.style.setProperty('--wt-gy', (Math.min(1.1, Math.max(-.1, y)) * 100).toFixed(1) + '%');
        });
      }
      zone.addEventListener('pointermove', function (e) { ev = e; if (!raf) raf = requestAnimationFrame(apply); });
      zone.addEventListener('pointerleave', function () {
        ev = null;
        wallets.forEach(function (w) { w.classList.remove('is-tracking', 'is-hover'); w.style.removeProperty('--wt-gx'); w.style.removeProperty('--wt-gy'); });
      });
    });
  }

  /* 4a. 复制：成功提示并播报；不能写剪贴板时把内容选中，方便手动复制 */
  document.querySelectorAll('[data-copy], [data-copy-from]').forEach(function (b) {
    var label = b.textContent;
    b.addEventListener('click', function () {
      var src = b.getAttribute('data-copy-from'), el = src && document.querySelector(src);
      var v = el ? el.textContent : b.getAttribute('data-copy');
      var target = el || (b.parentNode && b.parentNode.querySelector('code'));
      function done() {
        b.textContent = b.getAttribute('data-done'); b.classList.add('is-done'); window.wtSay(b.getAttribute('data-done'));
        setTimeout(function () { b.textContent = label; b.classList.remove('is-done'); }, 1600);
      }
      function fallback() {
        if (!target) return;
        var r = document.createRange(); r.selectNodeContents(target);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      }
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(v).then(done, fallback); else fallback();
    });
  });

  /* 4b. 帮助中心搜索 */
  var q = document.querySelector('[data-help-search]');
  if (q) {
    var empty = document.querySelector('[data-help-empty]'), live = document.querySelector('[data-live]');
    q.addEventListener('input', function () {
      var s = q.value.trim().toLowerCase(), any = false;
      document.querySelectorAll('.qa-group').forEach(function (g) {
        var hit = 0;
        g.querySelectorAll('details').forEach(function (d) {
          var ok = !s || d.textContent.toLowerCase().indexOf(s) > -1;
          d.hidden = !ok; if (ok) hit++;
          d.open = !!(s && ok);
        });
        g.hidden = hit === 0; if (hit) any = true;
      });
      if (empty) empty.hidden = any;
      var n = document.querySelectorAll('.qa details:not([hidden])').length;
      clearTimeout(q._t);
      q._t = setTimeout(function () { window.wtSay(s ? (n ? live.getAttribute('data-msg-n').replace('{n}', n) : empty.textContent) : ''); }, 400);
    });
  }

  /* 5. 手机菜单：浮在页面上方，打开时锁住页面滚动 */
  var nav = document.querySelector('.nav'), mb = nav && nav.querySelector('.nav__menu'), panel = document.getElementById('mnav');
  if (mb && panel) {
    var set = function (open) {
      nav.classList.toggle('is-open', open); mb.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.hidden = !open; document.documentElement.classList.toggle('menu-open', open);
    };
    mb.addEventListener('click', function () { set(panel.hidden); });
    panel.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { set(false); mb.focus(); } });
    nav.addEventListener('focusout', function (e) { if (!panel.hidden && !nav.contains(e.relatedTarget)) set(false); });
    window.matchMedia('(min-width: 901px)').addEventListener('change', function (m) { if (m.matches) set(false); });
  }
})();
