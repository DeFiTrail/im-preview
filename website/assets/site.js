/* Walletalk 官网 · 脚本：消息逐条出现、钱包光随指针、识别设备 */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. 消息逐条出现，循环播放。子元素可写 data-wait（毫秒）覆盖默认间隔
  document.querySelectorAll('.seq').forEach(function (box) {
    var items = Array.prototype.slice.call(box.children);
    if (reduce) { items.forEach(function (el) { el.classList.add('in'); }); return; }
    var hold = +(box.dataset.hold || 4200), gap = +(box.dataset.gap || 950);
    function run() {
      items.forEach(function (el) { el.classList.remove('in'); });
      var t = 400;
      items.forEach(function (el) {
        t += +(el.dataset.wait || gap);
        setTimeout(function () { el.classList.add('in'); }, t);
      });
      if (box.dataset.loop !== 'off') setTimeout(run, t + hold);
    }
    // 进入视口再开始
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { io.disconnect(); run(); } });
      }, { threshold: .25 });
      io.observe(box);
    } else run();
  });

  // 2. 钱包皮面上的光跟随指针；data-tilt 的元素随指针轻微倾斜
  if (!reduce) {
    document.querySelectorAll('[data-track]').forEach(function (zone) {
      var wallets = zone.querySelectorAll('.wt-wallet');
      var tilt = zone.querySelector('[data-tilt]');
      zone.addEventListener('pointermove', function (e) {
        var r = zone.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        wallets.forEach(function (w) {
          w.classList.add('is-tracking', 'is-hover');
          w.style.setProperty('--wt-gx', (x * 100).toFixed(1) + '%');
          w.style.setProperty('--wt-gy', (y * 100).toFixed(1) + '%');
        });
        if (tilt) tilt.style.transform = 'perspective(1400px) rotateY(' + ((x - .5) * 10).toFixed(2) + 'deg) rotateX(' + ((.5 - y) * 8).toFixed(2) + 'deg)';
      });
      zone.addEventListener('pointerleave', function () {
        wallets.forEach(function (w) { w.classList.remove('is-tracking', 'is-hover'); w.style.removeProperty('--wt-gx'); w.style.removeProperty('--wt-gy'); });
        if (tilt) tilt.style.transform = '';
      });
    });
  }

  // 3. 识别设备：把对应平台排到第一位并标"本机"
  var ua = navigator.userAgent || '';
  var os = /iPhone|iPad|iPod/.test(ua) ? 'ios' : /Android/.test(ua) ? 'android' : 'desktop';
  document.documentElement.dataset.os = os;
  document.querySelectorAll('[data-plats]').forEach(function (list) {
    var hit = list.querySelector('[data-os~="' + os + '"]');
    if (hit) { list.insertBefore(hit, list.firstChild); hit.classList.add('is-mine'); }
  });
})();
