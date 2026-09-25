/* Walletalk 视觉方向 · 定稿评审：签名细节、拍板选项、对比滑块 */
(() => {
const { R, render, fitFrames, h } = window.WTDS;
const { ic, av, dot, bub, msg, conv, CONVS, walletCard, transferCard, envelope, LW } = h;
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

/* ───────── 拍板：6 件事 ───────── */
const chatPair = (cls = '') => `<div class="r-scope v-mini ${cls}">${msg(bub('今晚 22:00 开直播聊新合约', { meta: '21:30' }), { a: LW, nick: '老王' }).replace('class="r-m"', 'class="r-m has-nick"')}${msg(bub('收到，我先小仓位', { self: 1, meta: '21:45' }), { self: 1, state: 'read' })}</div>`;
const threeMsgs = (cls = '') => `<div class="r-scope v-mini ${cls}">${msg(bub('新合约已经发群里了', {}), { a: LW, nick: '老王' }).replace('class="r-m"', 'class="r-m has-nick"')}${msg(bub('自己核对一下地址'), { a: LW })}${msg(bub('收到', { self: 1 }), { self: 1 })}</div>`;
const setRow = (on, note) => `<div class="r-scope v-mini panel"><div class="r-setrow">外观${on === null ? `<span class="v">跟随系统</span>` : `<span class="r-seg" style="margin-left:auto">${['跟随系统', '白天', '黑夜'].map((t, i) => `<span class="${i === on ? 'is-on' : ''}">${t}</span>`).join('')}</span>`}</div></div>${note ? `<div class="v-opt__d" style="margin-top:0">${note}</div>` : ''}`;
const badgeRows = (cls = '') => `<div class="r-scope v-mini panel ${cls}">${conv(CONVS[1])}${conv(CONVS[5])}</div>`;
const scopeCard = (items) => `<div class="r-scope v-mini panel" style="padding:8px 12px;gap:8px">${items.map(([i, t, s]) => `<div style="display:flex;align-items:center;gap:10px;font-size:13px"><span style="font-size:18px;color:var(--wt-text-3)">${ic(i)}</span><span style="flex:1">${t}</span><span style="font-size:12px;color:var(--wt-text-3)">${s}</span></div>`).join('')}</div>`;

const DECISIONS = [
  { id: 'direction', q: '视觉方向', hint: '整体用这一版吗', opts: [
    { k: 'A', t: '通过，按这版推进', d: '前端按设计系统 v1.0 开始换皮。', rec: 1 },
    { k: 'B', t: '需要调整', d: '请在下方"补充意见"里写明要调哪里。' },
  ] },
  { id: 'bubble', q: '自己发的消息气泡', hint: '决定聊天里最大面积的一块颜色', opts: [
    { k: 'A', t: '琥珀浅底 · 黑夜暖白', d: '温和，和对方的气泡区分清楚；橙色占比最低。', rec: 1, pv: () => chatPair() },
    { k: 'B', t: '琥珀实色', d: '最醒目、品牌感最强；但一屏橙色会超过规范建议的 15%。', pv: () => chatPair('opt-amber') },
    { k: 'C', t: '中性灰', d: '最安静；自己和对方的区分主要靠左右位置。', pv: () => chatPair('opt-neutral') },
  ] },
  { id: 'avatar', q: '头像与气泡', hint: '纯样式，不改功能', opts: [
    { k: 'A', t: '头像贴底，气泡带尾巴', d: '尾巴取自标志左下角那一笔，指向说话的人。', rec: 1, pv: () => threeMsgs() },
    { k: 'B', t: '保持现状：头像在上', d: '沿用现在的写法，气泡左上角小圆角，没有尾巴。', pv: () => threeMsgs('opt-top') },
  ] },
  { id: 'theme', q: '白天 / 黑夜怎么切换', hint: '两套主题都已做好', opts: [
    { k: 'A', t: '跟随系统 + 设置里可切', d: '在"个人设置"新增一项"外观"，纯前端，选择存在本机。', rec: 1, pv: () => setRow(0) },
    { k: 'B', t: '只跟随系统', d: '不新增任何设置项，零功能改动。', pv: () => setRow(null) },
    { k: 'C', t: '默认黑夜，设置里可切', d: '首次打开是黑夜，更有"深夜会所"的品牌感。', pv: () => setRow(2) },
  ] },
  { id: 'badge', q: '未读数颜色', hint: '会话列表、左栏导航', opts: [
    { k: 'A', t: '琥珀色', d: '和品牌统一；红色只留给错误和风险提示。', rec: 1, pv: () => badgeRows() },
    { k: 'B', t: '红色', d: '沿用 IM 的常见习惯，更有紧迫感。', pv: () => badgeRows('opt-red') },
  ] },
  { id: 'scope', q: '本轮范围', hint: '直播间和客服工作台', opts: [
    { k: 'A', t: '跟随令牌，不单独出稿', d: '直播间只换品牌紫，客服工作台随 antd 主题自动变。', rec: 1, pv: () => scopeCard([['live', '直播间', '只换品牌色'], ['nav-cs', '客服工作台', '自动跟随']]) },
    { k: 'B', t: '一起出设计稿', d: '直播间、客服工作台按同一套系统单独出页面稿，再交付。', pv: () => scopeCard([['live', '直播间', '单独出稿'], ['nav-cs', '客服工作台', '单独出稿']]) },
  ] },
];

const KEY = 'wt-direction-picks';
let picks = {};
try { picks = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { picks = {}; }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(picks)); } catch (e) {} };

const check = ic('check');
$('#decisions').innerHTML = DECISIONS.map((d, i) => `<div class="v-q" data-q="${d.id}"><div class="v-q__h"><span class="n">${i + 1}</span><h3>${d.q}</h3><small>${d.hint}</small></div>
  <div class="v-opts" role="radiogroup" aria-label="${d.q}">${d.opts.map(o => `<button class="v-opt" role="radio" aria-checked="false" data-k="${o.k}"><span class="v-opt__ck">${check}</span>
    <span class="v-opt__t">${o.k} · ${o.t}${o.rec ? '<span class="rec">推荐</span>' : ''}</span>${o.pv ? `<div class="v-opt__pv">${o.pv()}</div>` : ''}<span class="v-opt__d">${o.d}</span></button>`).join('')}</div></div>`).join('');

function paint() {
  DECISIONS.forEach(d => {
    const q = $(`[data-q="${d.id}"]`);
    $$('.v-opt', q).forEach(b => b.setAttribute('aria-checked', String(picks[d.id] === b.dataset.k)));
    q.classList.toggle('is-done', !!picks[d.id]);
  });
  const n = DECISIONS.filter(d => picks[d.id]).length;
  $('#prog-t').textContent = n === DECISIONS.length ? '6 件事都已选好' : `已选 ${n} / ${DECISIONS.length}`;
  $('#prog-b').style.width = (n / DECISIONS.length * 100) + '%';
}
$$('.v-q').forEach(q => $$('.v-opt', q).forEach(b => b.addEventListener('click', () => { picks[q.dataset.q] = b.dataset.k; save(); paint(); })));
$('#all-rec').addEventListener('click', () => { DECISIONS.forEach(d => { if (!picks[d.id]) picks[d.id] = d.opts.find(o => o.rec).k; }); save(); paint(); });

const note = $('#note');
try { note.value = localStorage.getItem(KEY + '-note') || ''; } catch (e) {}
note.addEventListener('input', () => { try { localStorage.setItem(KEY + '-note', note.value); } catch (e) {} });

function resultText() {
  const day = new Date(); const ds = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`;
  const lines = [`Walletalk 视觉方向 · 拍板结果（${ds}）`];
  DECISIONS.forEach((d, i) => { const o = d.opts.find(x => x.k === picks[d.id]); lines.push(`${i + 1}. ${d.q}：${o ? `${o.k} ${o.t}` : '（未选）'}`); });
  if (note.value.trim()) lines.push(`补充意见：${note.value.trim()}`);
  lines.push(location.href.split('?')[0]);
  return lines.join('\n');
}
const copyBtn = $('#copy');
copyBtn.addEventListener('click', async () => {
  const missing = DECISIONS.filter(d => !picks[d.id]);
  if (missing.length) { const q = $(`[data-q="${missing[0].id}"]`); q.scrollIntoView({ behavior: 'smooth', block: 'center' }); copyBtn.textContent = `还差 ${missing.length} 件`; setTimeout(() => copyBtn.textContent = '复制拍板结果', 1600); return; }
  const txt = resultText();
  try { await navigator.clipboard.writeText(txt); copyBtn.textContent = '已复制，粘贴发回即可'; }
  catch (e) { const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); copyBtn.textContent = '已复制，粘贴发回即可'; } catch (_) { copyBtn.textContent = '复制失败，请手动选择'; } ta.remove(); }
  setTimeout(() => copyBtn.textContent = '复制拍板结果', 2400);
});
paint();

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
