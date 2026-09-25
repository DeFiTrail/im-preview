/* Walletalk 视觉方向 · 已定稿：签名细节、拍板结果、对比滑块 */
(() => {
const { R, render, fitFrames, h } = window.WTDS;
const { ic, dot, bub, msg, conv, CONVS, walletCard, transferCard, envelope, LW } = h;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ───────── 三个细节 ───────── */
R['sig-wallet'] = () => `<div class="r-scope" style="padding-top:6px">${walletCard({ size: 'md', gap: 'var(--wt-bg-panel)' })}</div>`;
R['sig-dot'] = () => `<div class="r-scope v-dots">${[
  ['is-live', '呼吸', '直播中 · 通话中 · 红包进行中 · 链上确认中'],
  ['', '常亮', '在线 · 钱包安全 · 已到账'],
  ['is-off', '熄灭', '离线 · 已结束 · 已过期'],
].map(([c, t, d]) => `<div><span class="box">${dot('wt-dot--lg ' + c)}</span><b>${t}</b><span>${d}</span></div>`).join('')}</div>`;
R['sig-msg'] = () => `<div class="r-scope v-chat">${msg(transferCard({ self: 1 }), { self: 1, state: 'read' })}${msg(envelope(), { a: ['鱼', 6], nick: '小鱼' })}</div>`;

/* ───────── 拍板结果（2026-09-25） ───────── */
const chatPair = () => `<div class="r-scope v-mini">${msg(bub('今晚 22:00 开直播聊新合约', { meta: '21:30' }), { a: LW, nick: '老王' })}${msg(bub('收到，我先小仓位', { self: 1, meta: '21:45' }), { self: 1, state: 'read' })}</div>`;
const threeMsgs = () => `<div class="r-scope v-mini">${msg(bub('新合约已经发群里了'), { a: LW, nick: '老王' })}${msg(bub('自己核对一下地址'), { a: LW, cont: 1 })}${msg(bub('收到', { self: 1 }), { self: 1 })}</div>`;
const chk = (t, on) => `<span class="r-chkopt"><span class="r-check${on ? ' is-on' : ''}">${on ? ic('check') : ''}</span>${t}</span>`;
const setMini = () => `<div class="r-scope v-setmini"><b>个人设置 · 外观</b><div>${chk('跟随系统', 1)}${chk('白天')}${chk('黑夜')}</div></div>`;
const badgeRows = () => `<div class="r-scope v-mini panel">${conv(CONVS[1])}${conv(CONVS[5])}</div>`;
const links = () => `<div class="v-links"><a href="#live">${ic('live')}直播间设计稿</a><a href="#cs">${ic('nav-cs')}客服工作台设计稿</a><a href="../design-system/#live">${ic('file')}设计系统里的规格</a></div>`;

const RESULTS = [
  ['视觉方向', 'A', '通过，按这版推进', '前端按设计系统 v1.1 开始换皮。', ''],
  ['自己发的消息气泡', 'B', '琥珀实色', '墨黑字，时间与引用用深棕，对比度均 ≥ 4.5:1。', chatPair()],
  ['头像与气泡', 'A', '头像贴底，气泡带尾巴', '尾巴取自标志左下角那一笔，指向说话的人。', threeMsgs()],
  ['白天 / 黑夜怎么切换', 'A', '跟随系统 + 设置里可切', '"个人设置"新增一项"外观"，默认跟随系统，选择存在本机。', setMini()],
  ['未读数颜色', 'A', '琥珀色', '红色只留给错误和风险提示。', badgeRows()],
  ['本轮范围', 'B', '一起出设计稿', '直播间、客服工作台已按同一套系统出稿，见下方。', links()],
];
$('#results').innerHTML = RESULTS.map(([q, k, t, d, pv], i) => `<div class="v-r"><div class="v-r__h"><span class="n">${i + 1}</span><small>${q}</small></div>
  <b class="ans"><span class="k">${k}</span>${t}</b><p>${d}</p>${pv ? `<div class="pv">${pv}</div>` : ''}</div>`).join('');

/* ───────── 对比滑块 ───────── */
$$('[data-cmp]').forEach(c => {
  const handle = $('.v-handle', c);
  const set = pct => { pct = Math.max(0, Math.min(100, pct)); c.style.setProperty('--split', pct + '%'); handle.setAttribute('aria-valuenow', Math.round(pct)); };
  let drag = false;
  const at = e => { const b = c.getBoundingClientRect(); set((e.clientX - b.left) / b.width * 100); };
  handle.addEventListener('pointerdown', e => { drag = true; handle.setPointerCapture(e.pointerId); at(e); });
  handle.addEventListener('pointermove', e => { if (drag) at(e); });
  handle.addEventListener('pointerup', () => { drag = false; });
  c.addEventListener('click', e => { if (e.target.closest('.v-handle')) return; if (e.altKey || e.shiftKey) at(e); });
  handle.addEventListener('keydown', e => { const v = +handle.getAttribute('aria-valuenow'); if (e.key === 'ArrowLeft') { set(v - 5); e.preventDefault(); } if (e.key === 'ArrowRight') { set(v + 5); e.preventDefault(); } if (e.key === 'Home') set(0); if (e.key === 'End') set(100); });
});

render(); fitFrames();
})();
