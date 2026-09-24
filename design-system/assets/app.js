/* Walletalk 设计系统文档站 · 渲染参考组件与页面模板（演示数据） */
(() => {
const W = window.WT;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ───────── 基础件 ───────── */
const ic = (n, cls = '') => `<svg class="r-ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${(W.icons[n] || W.icons.info).svg}</svg>`;
const dot = (cls = '') => `<i class="wt-dot ${cls}"></i>`;
function av(t, c, o = {}) {
  const size = o.size ? ` r-av--${o.size}` : '';
  const live = o.live ? ' wt-presence' : '';
  const pin = o.live ? `<span class="wt-presence__pin">${dot('is-live')}</span>` : o.online ? `<span class="r-online">${dot(o.online === 'off' ? 'is-off' : '')}</span>` : '';
  const badge = o.badge ? `<span class="r-av-badge"><span class="r-badge${o.muted ? ' is-muted' : ''}">${o.badge}</span></span>` : '';
  return `<span class="r-av${o.group ? ' is-group' : ''}${size}${live}" data-c="${c}"><span class="face">${esc(t)}</span>${pin}${badge}</span>`;
}
const badge = (n, muted) => `<span class="r-badge${muted ? ' is-muted' : ''}">${n}</span>`;
const btn = (t, kind = 'default', o = {}) => `<button class="r-btn r-btn--${kind}${o.size ? ' r-btn--' + o.size : ''}${o.cls ? ' ' + o.cls : ''}"${o.disabled ? ' disabled' : ''}>${o.icon ? ic(o.icon) : ''}${t}</button>`;
const ibtn = (n, label, cls = '') => `<button class="r-iconbtn ${cls}" aria-label="${label}" title="${label}">${ic(n)}</button>`;
const tkn = (sym, bg, fg = '#fff', chain) => `<span class="r-tkn" style="background:${bg};color:${fg}">${sym}${chain ? `<i style="background:${chain[1]};color:${chain[2] || '#fff'}">${chain[0]}</i>` : ''}</span>`;
const TK = {
  USDT: () => tkn('₮', '#26A17B', '#fff', ['B', '#F3BA2F', '#17120C']),
  BNB: () => tkn('BNB', '#F3BA2F', '#17120C'),
  PEPE: () => tkn('PE', '#4C9A3F', '#fff', ['B', '#F3BA2F', '#17120C']),
  ETH: () => tkn('Ξ', '#627EEA'),
  USDC: () => tkn('$', '#2775CA', '#fff', ['Ξ', '#627EEA']),
};

/* ───────── 外壳：TopSearchBar + LeftNavBar ───────── */
const topBar = (o = {}) => `<header class="r-top app-drag"><div class="r-top__brand"><img src="assets/brand/walletalk-icon-small.svg" alt="Walletalk"></div>
  <div class="r-top__mid"><div class="r-top__search app-no-drag">${ic('search')}<span>搜索</span><kbd>Ctrl K</kbd></div>${ibtn('plus', '添加', 'app-no-drag')}</div>
  ${o.win === false ? '' : `<div class="r-top__win"><span>${ic('win-min')}</span><span>${ic('win-max')}</span><span>${ic('win-close')}</span></div>`}</header>`;
const NAV = [['nav-chat', '消息', '52'], ['nav-contacts', '通讯录', '3'], ['nav-apps', '应用'], ['nav-wallet', '钱包'], ['nav-cs', '客服'], ['nav-tickets', '工单']];
const navItem = (n, t, b, on, cls = '') => `<button class="r-nav__item${on ? ' is-on' : ''} ${cls}">${ic(n)}<span>${t}</span>${b ? badge(b) : ''}</button>`;
const navBar = active => `<nav class="r-nav">${av('K', 1, { size: 'md', online: true })}${NAV.map(([n, t, b]) => navItem(n, t, b, t === active)).join('')}</nav>`;

/* ───────── 会话列表 ───────── */
const CONVS = [
  { n: 'PEPE 早鸟群', g: 1, c: 1, t: '21:46', pv: `<span class="pre-live">${dot('wt-dot--sm is-live')}直播中</span><span>老王的 AMA · 312 人在看</span>`, u: 39, pin: 1, live: 1 },
  { n: 'BNB 链 Alpha 研究所', g: 1, c: 4, t: '21:40', pv: `<span class="pre-at">[有人@你]</span><span><span class="who">研究员：</span>@Kevin 链上又一个大户在吸筹</span>`, u: 17 },
  { n: '阿杰', c: 2, t: '21:12', pv: `<span>[转账] 120 USDT</span>`, online: 1 },
  { n: 'WIF 狗狗营', g: 1, c: 6, t: '20:36', pv: `<span><span class="who">小鱼：</span>[红包] 恭喜发财，Alpha 常在</span>`, u: 12, mute: 1 },
  { n: '林总', c: 5, t: '昨天', pv: `<span class="pre-draft">[草稿]</span><span>明天那个 AMA 我去</span>` },
  { n: 'Moon Hunters', g: 1, c: 3, t: '昨天', pv: `<span><span class="who">Kris：</span>白名单名额还剩 40</span>`, u: 2 },
  { n: 'Walletalk 团队', c: 1, t: '周一', pv: `<span>你的钱包已完成备份，私钥分成三片保存</span>` },
  { n: '客服小助手', c: 4, t: '09/20', pv: `<span>[工单] 已处理：提现到账延迟</span>`, online: 'off' },
  { n: 'Sophia', c: 5, t: '09/19', pv: `<span>好的，明天见</span>` },
  { n: 'DeFi 早报', g: 1, c: 6, t: '09/18', pv: `<span>[图片]</span>`, mute: 1 },
  { n: 'Base 生态交流', g: 1, c: 3, t: '09/18', pv: `<span><span class="who">Leo：</span>[文件] 空投名单.xlsx</span>` },
];
function conv(c, o = {}) {
  const flags = `${c.pin ? ic('pin') : ''}${c.mute ? ic('mute') : ''}`;
  const a = av(c.n.replace(/[^A-Za-z一-龥]/g, '').slice(0, c.g ? 1 : 1) || c.n[0], c.c, { group: c.g, live: c.live, online: c.online, badge: c.u, muted: c.mute, size: o.size });
  return `<div class="r-conv${c.pin ? ' is-pinned' : ''}${o.active ? ' is-active' : ''}${o.cls ? ' ' + o.cls : ''}">${a}<div style="min-width:0"><div class="r-conv__l1"><span class="r-conv__name">${esc(c.n)}</span><span class="r-conv__flags">${flags}</span><span class="r-conv__time">${c.t}</span></div><div class="r-conv__pv">${c.pv}</div></div></div>`;
}
const convList = (activeIdx = 0, n = 11) => `<aside class="r-list"><div class="r-list__rows">${CONVS.slice(0, n).map((c, i) => conv(c, { active: i === activeIdx })).join('')}</div></aside>`;

/* ───────── 聊天窗 ───────── */
const chatHead = (o = {}) => `<header class="r-chat__head">${o.back ? ibtn('chevron-left', '返回') : ''}${av('P', 1, { group: 1, size: 'md', live: 1 })}<div class="r-chat__who"><b>PEPE 早鸟群</b><span>1,284 位成员 · 36 人在线</span></div>
  ${ibtn('history', '聊天记录')}<span class="r-livepill is-live">${dot('wt-dot--sm is-live')}直播中</span>${ibtn('invite', '邀请')}${ibtn('settings', '设置', o.drawer ? 'is-on' : '')}</header>`;
const liveBar = () => `<div class="r-chat__bar">${dot('wt-dot--sm is-live')}<span><b>老王的 AMA</b> 直播中 · 312 人在看</span><span class="wt-eq"><i></i><i></i><i></i><i></i></span><button class="r-btn r-btn--link">进入直播</button><span class="sp">${ic('folder')}群文件 · 12</span></div>`;

const bub = (html, o = {}) => `<div class="wt-bubble${o.self ? ' wt-bubble--self' : ''}${o.tail !== false ? ' has-tail' : ''}">${html}${o.meta ? `<span class="wt-bubble__meta">${o.meta}</span>` : ''}</div>`;
function msg(inner, o = {}) {
  const avatar = o.self ? '' : (o.cont ? '<span class="r-sp"></span>' : av(o.a[0], o.a[1], { size: 'sm' }));
  const nick = !o.self && o.nick ? `<div class="r-m__nick">${esc(o.nick)}${o.role ? `<span class="r-tag r-tag--brand">${o.role}</span>` : ''}</div>` : '';
  const state = o.state ? `<span class="r-m__state${o.state === 'fail' ? ' is-fail' : ''}">${ic(o.state === 'fail' ? 'alert' : o.state === 'sending' ? 'clock' : 'check-double')}</span>` : '';
  return `<div class="r-m${o.self ? ' is-self' : ''}${o.cont ? ' is-cont' : ''}">${avatar}${o.self ? state : ''}<div class="r-m__col">${nick}${inner}</div></div>`;
}
const LW = ['老', 2], KR = ['K', 3], XY = ['鱼', 6], AM = ['M', 5];
const transferCard = (o = {}) => `<div class="wt-wallet wt-wallet--msg wt-asset${o.self ? ' is-self' : ''} has-tail" style="--wt-wallet-gap:${o.gap || 'var(--wt-bg-chat)'}" data-ritual><div class="wt-wallet__card"></div><div class="wt-wallet__body">
  <div class="wt-asset__head"><span>${o.title || '转账给 老王'}</span>${o.status || '<span class="wt-status wt-status--done">已到账</span>'}</div>
  <div class="wt-asset__amount r-num">${o.amount || '120'}<small>${o.token || 'USDT'}</small></div><div class="wt-asset__sub">${o.sub || 'BSC · 手续费 0.12 USDT'}</div>
  <div class="wt-asset__foot">${o.foot || `${dot()}<span>对方已收款 · 21:46</span>`}</div></div></div>`;
const requestCard = (o = {}) => transferCard({ title: '收款请求 · 老王', amount: '50', status: o.paid ? '<span class="wt-status wt-status--done">已支付</span>' : '<span class="wt-status wt-status--pending">待支付</span>', sub: '备注：白名单保证金', foot: o.paid ? `${dot()}<span>你已支付 · 21:50</span>` : `${dot('is-live')}<span>等待你支付</span><button class="r-btn r-btn--primary r-btn--sm wt-btn-pay">去支付</button>`, ...o });
const envelope = (o = {}) => {
  const st = o.state || 'open';
  const s = st === 'open' ? `${dot('wt-dot--sm is-live')}剩 6/20 · 12 秒前有人领取` : st === 'claimed' ? '你领到 8.80 USDT · 已存入钱包' : st === 'done' ? '20 个红包已被领完' : '已过期，未领取的金额已退回';
  const seal = st === 'open' ? '开' : st === 'claimed' ? ic('check') : st === 'done' ? '完' : '过';
  return `<div class="wt-envelope has-tail${o.self ? ' is-self' : ''}${st === 'claimed' ? ' is-done' : ''}${st === 'done' ? ' is-done' : ''}${st === 'expired' ? ' is-expired' : ''}" role="button" tabindex="0" data-envelope><div class="wt-envelope__k">小鱼的红包 · 拼手气</div><div class="wt-envelope__note">恭喜发财，Alpha 常在</div><div class="wt-envelope__s">${s}</div><span class="wt-clasp"><b class="wt-seal">${seal}</b></span></div>`;
};
const art = (h1, h2) => `<svg class="art" viewBox="0 0 100 75" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="g${h1}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${h1}"/><stop offset="1" stop-color="${h2}"/></linearGradient></defs><rect width="100" height="75" fill="url(#g${h1})"/><circle cx="72" cy="22" r="7" fill="#FFE1B0" opacity=".9"/><path d="M0 52 Q20 38 38 48 T70 44 T100 50 V75 H0Z" fill="#6B4E6E" opacity=".8"/><path d="M0 60 Q26 50 48 58 T100 58 V75 H0Z" fill="#3E3450"/></svg>`;
const fileCard = (name, size, ext, color, o = {}) => `<div class="r-file">${''}<div style="min-width:0"><b>${name}</b><small>${size}</small></div><span class="ext" style="background:${color}">${ext}</span>${o.progress ? '<span class="bar"><i></i></span>' : ''}</div>`;
const voice = (sec, self) => { const hs = [6, 10, 14, 9, 16, 12, 7, 13, 18, 11, 8, 14, 10, 6, 9, 12]; return `<span class="r-voice"><span class="pb">${ic('play')}</span><span class="wave">${hs.map((h, i) => `<i class="${i < 6 ? 'p' : ''}" style="height:${h}px"></i>`).join('')}</span><small>${sec}″</small></span>`; };
const liveCard = () => `<div class="r-cardmsg has-tail"><div class="r-live-cover">${dot('is-live')}<span class="viewers">312 人在看</span><span class="lbl">群直播开始了 · 老王的 AMA</span></div><div class="r-cardmsg__foot">${ic('live')}群直播<button class="r-btn r-btn--link" style="margin-left:auto;font-size:12px">进入直播</button></div></div>`;
const nameCard = () => `<div class="r-cardmsg has-tail"><div class="r-cardmsg__main">${av('S', 5)}<div><b>Sophia</b><small>ID：sophia_eth</small></div></div><div class="r-cardmsg__foot">${ic('card')}个人名片</div></div>`;
const dappCard = () => `<div class="r-cardmsg has-tail"><div class="r-cardmsg__main"><span class="r-av is-group" data-c="4"><span class="face">${ic('dapp')}</span></span><div><b>PancakeSwap</b><small>BSC 上的去中心化交易所</small></div></div><div class="r-cardmsg__foot">${ic('dapp')}小程序</div></div>`;
const mergeCard = () => `<div class="r-cardmsg has-tail"><div class="r-merge"><b>BNB 链 Alpha 研究所 的聊天记录</b><span>研究员：链上又一个大户在吸筹</span><span>老王：地址发一下</span><span>研究员：0x9f3c…a17e</span></div><div class="r-cardmsg__foot">${ic('forward')}聊天记录 · 12 条</div></div>`;

function chatMessages(set = 'full') {
  const parts = [
    `<div class="r-day">今天 21:30</div>`,
    msg(bub('今晚 22:00 开直播聊新合约，大家来', { tail: false }), { a: LW, nick: '老王', role: '群主', cont: true }),
    msg(bub(`新合约 <span class="r-mono" style="font-size:12.5px;padding:1px 6px;border-radius:6px;background:var(--wt-bg-subtle)">0x6982…1933</span>，自己核对`, { meta: '21:31' }), { a: LW }),
    `<div class="r-sys"><b>老王</b> 发起了群直播</div>`,
    msg(liveCard(), { a: LW }),
    msg(envelope(), { a: XY, nick: '小鱼' }),
    `<div class="r-sys"><b>Kris</b> 领取了 <b>小鱼</b> 的红包</div>`,
    msg(bub(`<span class="r-quote">老王：新合约 0x6982…1933</span>已核对，和官网一致 <span class="at-el">@老王</span>`, { meta: '21:44' }), { a: KR, nick: 'Kris' }),
    msg(bub('收到，我先小仓位', { self: 1, tail: false }), { self: 1, cont: true }),
    msg(transferCard({ self: 1 }), { self: 1, state: 'read' }),
    msg(requestCard(), { a: LW, nick: '老王' }),
  ];
  if (set === 'mobile') return parts.filter((_, i) => [0, 2, 5, 6, 8, 9].includes(i)).join('');
  return parts.join('');
}
const footer = () => `<div class="r-foot"><div class="r-foot__tools">${ibtn('mic', '语音')}${ibtn('emoji', '表情')}${ibtn('image', '图片')}${ibtn('video', '视频')}${ibtn('file', '文件')}${ibtn('phone', '通话')}<span class="sep"></span>${ibtn('asset', '资产：转账 / 收款 / 红包', 'is-asset')}${ibtn('burn', '阅后即焚')}</div>
  <div class="r-foot__edit">说点什么…</div><div class="r-foot__send"><span>Enter 发送 · Shift + Enter 换行</span>${btn('发送', 'primary', { size: 'sm' })}</div></div>`;
const drawer = () => `<aside class="r-drawer"><div class="r-drawer__head">群设置${ibtn('close', '关闭')}</div><div class="r-drawer__body">
  <div class="r-ginfo">${av('P', 1, { group: 1, size: 'lg' })}<div><b>PEPE 早鸟群</b><small>群号 20931877 · 1,284 人</small></div>${ibtn('qr', '群二维码')}</div>
  <div class="r-members">${[['老王', 2], ['Kris', 3], ['小鱼', 6], ['阿May', 5], ['阿杰', 2], ['Leo', 4], ['Sophia', 5], ['林总', 5], ['Ben', 3]].map(([n, c]) => `<div>${av(n[0], c, { size: 'md' })}<span>${n}</span></div>`).join('')}<div><span class="add">${ic('plus')}</span><span>邀请</span></div></div>
  <div class="r-gap"></div>
  <div class="r-setrow">群公告<span class="v">今晚 22:00 AMA，请提前…${ic('chevron-right')}</span></div>
  <div class="r-setrow">群管理<span class="v">${ic('chevron-right')}</span></div>
  <div class="r-setrow">我在本群的昵称<span class="v">Kevin${ic('chevron-right')}</span></div>
  <div class="r-gap"></div>
  <div class="r-setrow">消息免打扰<span class="r-switch"></span></div>
  <div class="r-setrow">置顶聊天<span class="r-switch is-on"></span></div>
  <div class="r-setrow">阅后即焚<span class="r-switch"></span></div>
  <div class="r-gap"></div>
  <div class="r-setrow is-danger">退出群聊</div></div></aside>`;
const chatPane = (o = {}) => `<section class="r-chat" id="chat-container">${chatHead(o)}${liveBar()}<div class="r-msgs">${chatMessages()}</div>${footer()}${o.drawer ? drawer() : ''}</section>`;

function pcChat(o = {}) {
  return `<div class="r-app r-scope">${topBar()}${navBar('消息')}<div class="r-main" style="grid-template-columns:300px minmax(0,1fr)">${convList(0)}${chatPane(o)}</div></div>`;
}

/* ───────── 钱包 ───────── */
const walletCard = (o = {}) => `<div class="wt-wallet wt-wallet--${o.size || 'lg'}" data-track style="--wt-wallet-gap:${o.gap || 'var(--wt-bg-chat)'}"><div class="wt-wallet__card"></div><div class="wt-wallet__body">
  <div class="r-bal-k">总资产（USD）${ic('eye')}</div><div class="r-bal-v r-num">$12,480<small>.32</small></div>
  <div class="r-bal-sub"><span>更新于 21:46</span><span>·</span><span>4 条链 · 9 种资产</span></div>
  <div class="r-wcard-foot"><span class="r-addr">0x7a2f…c418${ic('copy')}</span></div>
  <span class="wt-clasp" style="bottom:16px">${dot()}MPC 2/3</span></div></div>`;
const WTABS = ['Web3 钱包', '资金账户', '兑换', '授权管理', '地址簿', '安全中心'];
const wtabs = (on = 0) => `<div class="r-tabs">${WTABS.map((t, i) => `<span class="${i === on ? 'is-on' : ''}">${t}</span>`).join('')}</div>`;
const ASSETS = [
  ['USDT', 'Tether · BSC', '$1.00', '6,210.00', '$6,210.00'],
  ['BNB', 'BNB Chain', '$601.02', '7.842', '$4,713.20'],
  ['PEPE', 'Pepe · BSC', '$0.00001830', '85.02M', '$1,555.87'],
  ['ETH', 'Ethereum', '$2,412.55', '0.0001', '$0.24'],
  ['USDC', 'USD Coin · Ethereum', '$1.00', '1.01', '$1.01'],
];
const assetTable = (n = 5) => `<table class="r-table"><thead><tr><th>资产</th><th class="r">单价（USD）</th><th class="r">持仓</th><th class="r">价值</th><th class="r" style="width:1%">操作</th></tr></thead><tbody>
  ${ASSETS.slice(0, n).map(([s, sub, p, q, v]) => `<tr><td><div class="r-token">${TK[s]()}<div><b>${s}</b><small>${sub}</small></div></div></td><td class="r muted">${p}</td><td class="r">${q}</td><td class="r"><b style="font-weight:500">${v}</b></td><td class="r"><div class="acts">${btn('转账', 'text', { size: 'sm' })}${btn('收款', 'text', { size: 'sm' })}</div></td></tr>`).join('')}</tbody></table>`;
const HIST = [
  ['in', 'receive', '收到 120 USDT', '来自 阿杰 · 私聊 · 21:12', '+120.00', 'USDT', 'done'],
  ['out', 'red-packet', '发出红包', 'WIF 狗狗营 · 20 个 · 20:36', '−88.00', 'USDT', 'done'],
  ['out', 'transfer', '转账到 0x3b…9e1', 'BSC · 20:05', '−50.00', 'USDT', 'pending'],
  ['out', 'swap', '兑换 USDT → BNB', '汇率 1 BNB = 601.52 USDT · 18:02', '+0.8312', 'BNB', 'done'],
  ['out', 'approvals', '授权 PEPE', 'PancakeSwap Router · 昨天', '无限额', '', 'done'],
  ['out', 'transfer', '转账到 林总', '私聊 · 昨天', '−200.00', 'USDT', 'failed'],
];
const stChip = s => s === 'done' ? '<span class="wt-status wt-status--done">已完成</span>' : s === 'pending' ? `<span class="wt-status wt-status--pending">${dot('wt-dot--sm is-live')}链上确认中</span>` : '<span class="wt-status wt-status--failed">失败</span>';
const histRows = (n = 6) => HIST.slice(0, n).map(([d, i, t, sub, a, tok, s]) => `<div class="r-hist"><span class="dir ${d}">${ic(i)}</span><div style="min-width:0"><b>${t}</b><small>${sub}</small></div><div>${stChip(s)}</div><div class="amt ${a.startsWith('+') ? 'in' : ''}">${a} <small>${tok}</small></div></div>`).join('');
const secSum = () => `<div class="r-secsum"><div>Passkey<b>${ic('check', 'ok')}已开启</b></div><div>恢复邮箱<b>${ic('check', 'ok')}k***@gmail.com</b></div><div>私钥备份<b>${ic('check', 'ok')}已备份</b></div></div>`;
const wActs = () => `<div class="r-wacts"><button class="r-wact">${ic('receive')}收款</button><button class="r-wact is-primary">${ic('transfer')}转账</button><button class="r-wact">${ic('swap')}兑换</button></div>`;
const walletHead = () => `<div class="r-whero">${walletCard()}<div class="r-wside">${wActs()}${secSum()}</div></div>`;
const wtool = () => `<div class="r-wtool"><div class="r-input">${ic('search')}<span class="ph">搜索资产</span></div><span class="chk"><span class="r-check"></span>显示小额资产</span><span class="chk"><span class="r-check is-on">${ic('check')}</span>隐藏零余额</span><span class="upd">更新于 21:46 ${ibtn('refresh', '刷新')}</span></div>`;
const swapPanel = () => `<div class="r-swap"><div class="r-swap__box"><small><span>支付</span><span>余额 6,210.00 · <b style="color:var(--wt-brand-text);font-weight:500">最大</b></span></small><span class="v r-num">500.00</span><span class="r-swap__tok">${TK.USDT()}USDT${ic('chevron-down')}</span></div>
  <span class="r-swap__flip">${ic('swap')}</span>
  <div class="r-swap__box"><small><span>收到（预估）</span><span>≈ $499.61</span></small><span class="v r-num">0.8312</span><span class="r-swap__tok">${TK.BNB()}BNB${ic('chevron-down')}</span></div>
  <div class="r-swap__rows"><div><span>汇率</span><b>1 BNB = 601.52 USDT</b></div><div><span>网络费用</span><b>≈ $0.12</b></div><div><span>滑点容忍度</span><b>0.5%</b></div><div><span>最少收到</span><b>0.8270 BNB</b></div></div>
  ${btn('预览交易', 'primary', { size: 'lg', cls: 'r-block' })}<div style="text-align:center;font-size:12px;color:var(--wt-text-3)">报价 18 秒后刷新</div></div>`;
const wpage = () => `<section class="r-wpage"><div class="r-wpage__in"><div class="r-wpage__head"><h2>钱包</h2><span class="r-select">${ic('chain')}全部网络${ic('chevron-down')}</span>${btn('交易记录', 'default', { size: 'sm', icon: 'history' })}</div>
  ${walletHead()}<div class="r-wbox">${wtabs(0)}${wtool()}${assetTable(4)}<div class="r-sechead">交易记录<button class="r-btn r-btn--link">全部记录</button></div>${histRows(3)}</div></div></section>`;
const pcWallet = () => `<div class="r-app r-scope">${topBar()}${navBar('钱包')}<div class="r-main">${wpage()}</div></div>`;

/* ───────── H5 ───────── */
const sbar = `<div class="r-phone__island"></div><div class="r-phone__sb"><span>9:41</span><svg viewBox="0 0 54 12" fill="currentColor" aria-hidden="true"><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="5" y="5" width="3" height="7" rx="1"/><rect x="10" y="2.5" width="3" height="9.5" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/><rect x="26" y="1" width="23" height="10" rx="3" fill="none" stroke="currentColor" stroke-opacity=".5"/><rect x="28" y="3" width="17" height="6" rx="1.5"/></svg></div>`;
const mTab = on => `<nav class="r-m-tab">${[['nav-chat', '消息', 52], ['nav-contacts', '通讯录'], ['nav-apps', '应用'], ['nav-wallet', '钱包'], ['nav-me', '我的']].map(([n, t, b]) => `<span class="${t === on ? 'is-on' : ''}">${ic(n)}${t}${b ? badge(b) : ''}</span>`).join('')}</nav>`;
const h5Chats = () => `<div class="r-phone r-scope"><div class="r-phone__scr">${sbar}<div class="r-m-top"><div class="r-top__search">${ic('search')}<span>搜索</span></div>${ibtn('plus', '添加')}</div><div class="r-m-body" style="background:var(--wt-bg-panel)">${CONVS.slice(0, 9).map((c, i) => conv(c)).join('')}</div>${mTab('消息')}</div></div>`;
const h5Chat = () => `<div class="r-phone r-scope"><div class="r-phone__scr" style="background:var(--wt-bg-chat)">${sbar.replace('r-phone__sb"', 'r-phone__sb" style="background:var(--wt-bg-panel)"')}<header class="r-m-head">${ibtn('chevron-left', '返回')}<div class="t"><b>PEPE 早鸟群（1,284）</b><span>${dot('wt-dot--sm is-live')}直播中 · 老王的 AMA</span></div>${ibtn('more', '设置')}</header>
  <div class="r-m-body"><div class="r-msgs">${chatMessages('mobile')}</div></div><div class="r-m-foot">${ibtn('mic', '语音')}<div class="in">说点什么…</div>${ibtn('emoji', '表情')}${ibtn('plus', '更多')}</div></div></div>`;
const h5Wallet = () => `<div class="r-phone r-scope"><div class="r-phone__scr" style="background:var(--wt-bg-chat)">${sbar.replace('r-phone__sb"', 'r-phone__sb" style="background:var(--wt-bg-chat)"')}<div class="r-m-body"><div style="display:flex;align-items:center;justify-content:space-between;padding:6px 16px 10px"><b style="font-size:20px">钱包</b><span class="r-select">${ic('chain')}全部网络${ic('chevron-down')}</span></div>
  <div style="padding:0 16px">${walletCard({ size: 'md' })}</div><div style="padding:14px 16px 10px">${wActs()}</div>
  <div class="r-wbox" style="margin:0 16px;border-radius:14px"><div class="r-tabs" style="padding:0 14px;gap:18px;overflow:hidden">${WTABS.slice(0, 4).map((t, i) => `<span class="${i ? '' : 'is-on'}">${t}</span>`).join('')}</div>
  ${ASSETS.slice(0, 4).map(([s, sub, p, q, v]) => `<div class="r-hist" style="grid-template-columns:32px minmax(0,1fr) auto;padding:8px 14px">${TK[s]()}<div style="min-width:0"><b>${s}</b><small>${q} · ${p}</small></div><div class="amt">${v}</div></div>`).join('')}</div></div>${mTab('钱包')}</div></div>`;

/* ───────── 渲染入口：data-r="名字" ───────── */
const R = {
  'pc-chat': () => pcChat(),
  'pc-chat-drawer': () => pcChat({ drawer: 1 }),
  'pc-wallet': () => pcWallet(),
  'h5-chats': h5Chats, 'h5-chat': h5Chat, 'h5-wallet': h5Wallet,
  'nav-states': () => `<div class="r-scope" style="display:flex;gap:8px;padding:10px;border-radius:14px;background:var(--wt-bg-frame);--wt-presence-bg:var(--wt-bg-frame)">${navItem('nav-chat', '消息', '52', true)}${navItem('nav-contacts', '通讯录', '3')}${navItem('nav-apps', '应用', 0, false, 'is-hover')}${navItem('nav-wallet', '钱包')}${navItem('nav-cs', '客服')}${navItem('nav-tickets', '工单')}${navItem('nav-workbench', '工作台')}${navItem('nav-admin', '管理')}</div>`,
  'topbar': () => `<div class="r-scope" style="border-radius:12px;overflow:hidden;box-shadow:var(--wt-shadow-1)">${topBar()}</div>`,
  'conv-states': () => {
    const rows = [
      [CONVS[0], '置顶 · 群直播中（光圈 + 呼吸圆点）', { }],
      [CONVS[1], '当前会话 · @我', { active: 1 }],
      [CONVS[2], '私聊 · 对方在线', {}],
      [CONVS[3], '免打扰 · 未读灰色', {}],
      [CONVS[4], '草稿', {}],
      [CONVS[7], '对方离线', { cls: 'is-hover' }],
    ];
    return `<div class="r-scope d-convgrid">${rows.map(([c, cap, o]) => `<div><div class="r-list" style="border:0;border-radius:12px;box-shadow:var(--wt-shadow-1)">${conv(c, o)}</div><div class="d-cap">${cap}</div></div>`).join('')}</div>`;
  },
  'chat-head': () => `<div class="r-scope" style="border-radius:12px;overflow:hidden;box-shadow:var(--wt-shadow-1)">${chatHead()}${liveBar()}</div>`,
  'msg-text': () => `<div class="r-scope d-chatbg">${msg(bub('今晚 22:00 开直播聊新合约，大家来', { meta: '21:30' }), { a: LW, nick: '老王', role: '群主' })}${msg(bub('收到，我先小仓位', { self: 1, meta: '21:45' }), { self: 1, state: 'read' })}${msg(bub('把地址发群里吧', { self: 1 }), { self: 1, state: 'sending' })}${msg(bub('网络不太好', { self: 1 }), { self: 1, state: 'fail' })}</div>`,
  'msg-rich': () => `<div class="r-scope d-chatbg">${msg(bub(`<span class="r-quote">老王：新合约 0x6982…1933</span>已核对，和官网一致 <span class="at-el">@老王</span>`, { meta: '21:44' }), { a: KR, nick: 'Kris' })}${msg(bub(`Is this contract audited?<div class="r-trans"><small>${'自动翻译'}</small>这个合约审计过吗？</div>`, { meta: '21:47' }), { a: AM, nick: 'May' })}<div class="r-recalled">"小鱼" 撤回了一条消息</div><div class="r-burn">${ic('burn')}阅后即焚已开启，消息查看后 30 秒销毁</div></div>`,
  'msg-media': () => `<div class="r-scope d-chatbg">${msg(`<div class="r-media has-tail">${art('#3A3148', '#D99A78')}</div>`, { a: AM, nick: 'May' })}${msg(`<div class="r-media has-tail">${art('#263330', '#CFD3C6')}<span class="play">${ic('play')}</span><span class="dur">00:42</span></div>`, { a: AM, cont: false })}${msg(fileCard('空投名单-第二批.xlsx', '2.4 MB', 'XLS', '#1E8A57', { progress: 1 }), { self: 1, state: 'sending' })}${msg(bub(voice(12), { self: 1 }), { self: 1, state: 'read' })}${msg(bub(voice(8)), { a: LW })}</div>`,
  'msg-cards': () => `<div class="r-scope d-chatbg d-cols">${msg(liveCard(), { a: LW })}${msg(nameCard(), { a: KR })}${msg(dappCard(), { a: LW })}${msg(mergeCard(), { a: KR })}${msg(bub(`<span class="r-call">${ic('phone')}通话时长 12:08</span>`), { a: LW })}${msg(bub(`<span class="r-call">${ic('video')}已取消</span>`, { self: 1 }), { self: 1 })}</div>`,
  'msg-asset': () => `<div class="r-scope d-chatbg d-cols">${msg(transferCard({ self: 1 }), { self: 1, state: 'read' })}${msg(transferCard({ title: '转账给 林总', status: `<span class="wt-status wt-status--pending">链上确认中</span>`, foot: `${dot('is-live')}<span>等待区块确认 · 2/12</span>` }), { self: 1 })}${msg(requestCard(), { a: LW, nick: '老王' })}${msg(requestCard({ paid: 1 }), { a: LW, nick: '老王' })}${msg(transferCard({ title: '转账给 你', amount: '200', status: '<span class="wt-status wt-status--failed">失败</span>', foot: `${ic('alert')}<span>余额不足，已退回</span><button class="r-btn r-btn--sm wt-btn-pay" style="background:rgba(255,247,236,.1);color:var(--wt-wallet-text)">重试</button>` }), { a: KR, nick: 'Kris' })}</div>`,
  'msg-envelope': () => `<div class="r-scope d-chatbg d-cols">${['open', 'claimed', 'done', 'expired'].map(s => msg(envelope({ state: s }), { a: XY, nick: { open: '进行中', claimed: '已领取', done: '已领完', expired: '已过期' }[s] })).join('')}</div>`,
  'footer': () => `<div class="r-scope" style="border-radius:12px;overflow:hidden;box-shadow:var(--wt-shadow-1)">${footer()}</div>`,
  'drawer': () => `<div class="r-scope" style="position:relative;height:620px;border-radius:14px;overflow:hidden;background:var(--wt-bg-chat)">${drawer()}</div>`,
  'contacts': () => `<div class="r-scope" style="display:grid;grid-template-columns:minmax(0,1fr) 22px;gap:4px;border-radius:14px;overflow:hidden;background:var(--wt-bg-panel);box-shadow:var(--wt-shadow-1)"><div>
    <div class="r-contact-entry"><span class="ico">${ic('user-add')}</span>新的好友${badge(3)}</div><div class="r-contact-entry"><span class="ico">${ic('bell')}</span>群通知</div><div class="r-contact-entry"><span class="ico">${ic('nav-contacts')}</span>我的好友</div><div class="r-contact-entry"><span class="ico">${ic('group-add')}</span>我的群组</div>
    <div class="r-alpha">A</div><div class="r-friend">${av('阿', 2, { size: 'md', online: 1 })}<div>阿杰<small>在线</small></div></div><div class="r-friend">${av('M', 5, { size: 'md', online: 'off' })}<div>阿May<small>2 小时前在线</small></div></div>
    <div class="r-alpha">K</div><div class="r-friend">${av('K', 3, { size: 'md' })}<div>Kris<small>0x51c…e02</small></div></div></div>
    <div class="r-alphabar" style="align-content:center">${'ABCDEFGHJKLMN'.split('').map(l => `<span class="${l === 'K' ? 'is-on' : ''}">${l}</span>`).join('')}</div></div>`,
  'ucard': () => `<div class="r-scope r-ucard"><div class="r-ucard__cover"></div><div class="r-ucard__main">${av('阿', 2, { size: 'lg', online: 1 })}<b>阿杰</b><small>ID：ajie_web3 · 在线</small></div><div class="r-ucard__rows"><div class="r-setrow"><span>钱包地址</span><span class="v r-mono">0x51c…e02 ${ic('copy')}</span></div><div class="r-setrow"><span>共同群组</span><span class="v">PEPE 早鸟群 等 3 个</span></div><div class="r-setrow"><span>备注</span><span class="v">OTC 老朋友</span></div></div><div class="r-ucard__foot">${btn('转账', 'default', { icon: 'transfer' })}${btn('发消息', 'primary', { icon: 'nav-chat' })}</div></div>`,
  'wallet-sizes': () => `<div class="r-scope d-walletsizes"><div><div class="d-cap-top">大 · 钱包页</div>${walletCard({ gap: 'var(--wt-bg-panel)' })}</div><div><div class="d-cap-top">中 · H5 钱包页 / 侧栏</div>${walletCard({ size: 'md', gap: 'var(--wt-bg-panel)' })}</div><div><div class="d-cap-top">消息 · 转账 / 收款请求</div>${transferCard({ gap: 'var(--wt-bg-panel)' })}</div></div>`,
  'wallet-head': () => `<div class="r-scope r-whero-host" style="padding:20px;border-radius:16px;background:var(--wt-bg-chat)">${walletHead()}</div>`,
  'wallet-tabs': () => `<div class="r-scope r-wbox">${wtabs(0)}${wtool()}${assetTable(5)}</div>`,
  'wallet-hist': () => `<div class="r-scope r-wbox"><div class="r-sechead">交易记录<button class="r-btn r-btn--link">全部记录</button></div>${histRows(6)}</div>`,
  'swap': () => `<div class="r-scope" style="padding:18px;border-radius:16px;background:var(--wt-bg-panel);box-shadow:var(--wt-shadow-1);display:grid;grid-template-columns:minmax(0,1fr);justify-items:center">${swapPanel()}</div>`,
  'wallet-rows': () => `<div class="r-scope r-wbox"><div class="r-sechead">授权管理</div><div class="r-hist" style="grid-template-columns:36px minmax(0,1fr) auto auto">${TK.PEPE()}<div style="min-width:0"><b>PEPE · 无限额</b><small>PancakeSwap Router · 0x10ed…024e · 昨天</small></div><span class="wt-status wt-status--pending">可撤销</span>${btn('撤销授权', 'danger', { size: 'sm' })}</div>
    <div class="r-sechead">地址簿</div><div class="r-hist" style="grid-template-columns:36px minmax(0,1fr) auto auto">${av('林', 5, { size: 'md' })}<div style="min-width:0"><b>林总 · 冷钱包</b><small class="r-mono">0x3b8e…09e1 · BSC</small></div>${ibtn('copy', '复制')}${btn('转账', 'default', { size: 'sm' })}</div>
    <div class="r-sechead">安全中心</div><div class="r-setrow">${ic('security')}Passkey 登录<span class="v">已开启 · 2 台设备${ic('chevron-right')}</span></div><div class="r-setrow">${ic('bell')}恢复邮箱<span class="v">k***@gmail.com${ic('chevron-right')}</span></div><div class="r-setrow">${ic('approvals')}设备保护<span class="r-switch is-on"></span></div></div>`,
  'buttons': () => `<div class="r-scope d-row">${btn('转账', 'primary')}${btn('取消', 'default')}${btn('查看全部', 'text')}${btn('退出群聊', 'danger')}${btn('确认删除', 'danger-solid')}${btn('发送中', 'primary', { disabled: 1 })}</div><div class="r-scope d-row">${btn('去支付', 'primary', { size: 'sm' })}${btn('复制', 'default', { size: 'sm', icon: 'copy' })}${btn('预览交易', 'primary', { size: 'lg' })}${btn('键盘焦点', 'default', { cls: 'is-focus' })}${ibtn('settings', '设置')}${ibtn('asset', '资产', 'is-on')}</div>`,
  'inputs': () => `<div class="r-scope d-grid2"><div><div class="r-label">收款地址</div><div class="r-input"><span class="ph">输入或粘贴地址</span></div><div class="r-help">请仅通过 BSC 网络向此地址转入资产</div></div>
    <div><div class="r-label">金额</div><div class="r-input is-focus"><span class="r-num">120.00</span><span style="margin-left:auto;color:var(--wt-text-3)">USDT</span></div><div class="r-help">可用 6,210.00 USDT</div></div>
    <div><div class="r-label">支付密码</div><div class="r-input is-error"><span>••••</span></div><div class="r-help is-error">密码错误，还可以尝试 4 次</div></div>
    <div><div class="r-label">网络</div><div class="r-input">${ic('chain')}<span>BSC</span><span style="margin-left:auto">${ic('chevron-down')}</span></div><div class="r-help">下拉：Select，选中项用 bg-active</div></div></div>`,
  'tabs': () => `<div class="r-scope" style="display:grid;gap:16px">${wtabs(0)}<div class="d-row"><span class="r-seg"><span class="is-on">全部</span><span>群组</span><span>私聊</span><span>@我</span></span><span class="r-seg"><span>日</span><span class="is-on">周</span><span>月</span></span></div></div>`,
  'toggles': () => `<div class="r-scope d-row"><span class="r-switch is-on"></span><span class="r-switch"></span><span class="r-check is-on">${ic('check')}</span><span class="r-check"></span><span class="r-radio is-on"></span><span class="r-radio"></span><span class="r-tag">BSC</span><span class="r-tag r-tag--brand">群主</span><span class="r-tag r-tag--success">已备份</span><span class="r-tag r-tag--danger">风险地址</span>${badge(8)}${badge(99 + '+')}${badge(12, 1)}<span class="r-badge is-dot"></span></div>`,
  'overlays': () => `<div class="r-scope d-overlays"><div class="r-pop">${[['pin', '置顶'], ['mute', '消息免打扰'], ['burn', '阅后即焚']].map(([i, t], k) => `<div class="r-pop__item${k === 0 ? ' is-hover' : ''}">${ic(i)}${t}</div>`).join('')}<div class="r-pop__sep"></div><div class="r-pop__item is-danger">${ic('trash')}删除会话</div></div>
    <div class="r-modal"><div class="r-modal__head">确认转账${ibtn('close', '关闭')}</div><div class="r-modal__body">向 <b style="color:var(--wt-text-1);font-weight:500">老王</b> 转账 <b class="r-num" style="color:var(--wt-text-1)">120.00 USDT</b>（BSC），网络费用约 0.12 USDT。转账后无法撤回。</div><div class="r-modal__foot">${btn('取消', 'default')}${btn('确认转账', 'primary')}</div></div>
    <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:12px;align-content:start"><div class="r-notify">${av('P', 1, { group: 1, size: 'md' })}<div style="min-width:0"><b>PEPE 早鸟群<small>刚刚</small></b><p>老王：今晚 22:00 开直播聊新合约</p></div></div><span class="r-toast is-ok">${ic('check')}地址已复制</span><span class="r-toast is-err">${ic('alert')}余额不足</span><span class="r-tip">聊天记录</span></div></div>`,
  'alerts': () => `<div class="r-scope" style="display:grid;gap:8px"><div class="r-alert r-alert--warn">${ic('alert')}钱包需要重新验证身份后才能转账<button class="r-btn r-btn--link">去验证</button></div><div class="r-alert r-alert--danger">${ic('alert')}对方不是你的好友，请注意资金安全<button class="r-btn r-btn--link" style="color:inherit">举报</button></div><div class="r-alert r-alert--info">${ic('burn')}阅后即焚已开启，消息查看后 30 秒销毁</div><div class="r-syncbar" style="border-radius:8px">${ic('alert')}同步失败</div></div>`,
  'empty': () => `<div class="r-scope d-grid2"><div class="r-empty" style="border-radius:14px;background:var(--wt-bg-panel);box-shadow:var(--wt-shadow-1)"><div class="r-empty__art">${emptyArt()}</div><b>还没有交易记录</b><p>收到或转出的资产会显示在这里，每一笔都记着来自哪个聊天。</p>${btn('收款', 'default', { size: 'sm', icon: 'receive' })}</div>
    <div style="border-radius:14px;background:var(--wt-bg-panel);box-shadow:var(--wt-shadow-1);padding:12px 14px;display:grid;gap:14px">${[0, 1, 2].map(() => `<div style="display:grid;grid-template-columns:44px 1fr;gap:12px;align-items:center"><span class="r-skel" style="width:44px;height:44px;border-radius:50%"></span><div style="display:grid;gap:8px"><span class="r-skel" style="height:12px;width:60%"></span><span class="r-skel" style="height:10px;width:85%"></span></div></div>`).join('')}</div></div>`,
  'dot-states': () => `<div class="r-scope d-dotstates">${[['', '常亮', '在线 · 已就绪 · 钱包安全'], ['is-live', '呼吸', '直播中 · 通话中 · 红包进行中 · 链上确认中 · 待支付'], ['is-off', '熄灭', '离线 · 已结束 · 已过期']].map(([c, t, d]) => `<div><span class="d-dotbox">${dot('wt-dot--lg ' + c)}</span><b>${t}</b><small>${d}</small></div>`).join('')}<div><span class="d-dotbox"><span class="wt-typing"><i></i><i></i><i></i></span></span><b>正在输入</b><small>单聊聊天头副标题</small></div><div><span class="d-dotbox"><span class="wt-eq"><i></i><i></i><i></i><i></i></span></span><b>声波</b><small>直播中置顶条</small></div></div>`,
  'bubbles': () => `<div class="r-scope d-chatbg" style="display:flex;flex-direction:column">${msg(bub('上车', {}), { a: LW, nick: '对方 · 带尾巴' })}${msg(bub('收到', { self: 1 }), { self: 1 })}</div>`,
};
function emptyArt() { return `<svg viewBox="0 0 88 64" width="88" height="64" aria-hidden="true"><rect x="22" y="6" width="44" height="28" rx="5" transform="rotate(-11 44 20)" fill="none" stroke="var(--wt-brand)" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="10" y="20" width="68" height="40" rx="11" fill="var(--wt-bg-subtle)" stroke="var(--wt-line-3)" stroke-width="1.5"/><path d="M50 34h28v12H50a6 6 0 0 1 0-12z" fill="var(--wt-bg-input)" stroke="var(--wt-line-3)" stroke-width="1.5"/><circle cx="56" cy="40" r="2.6" fill="var(--wt-brand)"/></svg>`; }

function render(root = document) {
  $$('[data-r]', root).forEach(el => { const f = R[el.dataset.r]; if (f) el.innerHTML = f(); });
  wire(root);
}

/* ───────── 交互：指针跟随暗纹、仪式、红包 ───────── */
function wire(root) {
  $$('.wt-wallet', root).forEach(w => {
    if (w.dataset.wired) return; w.dataset.wired = 1;
    w.addEventListener('pointermove', e => { const b = w.getBoundingClientRect(); w.classList.add('is-tracking');
      w.style.setProperty('--wt-gx', ((e.clientX - b.left) / b.width * 100).toFixed(1) + '%'); w.style.setProperty('--wt-gy', ((e.clientY - b.top) / b.height * 100).toFixed(1) + '%'); });
    w.addEventListener('pointerleave', () => { w.classList.remove('is-tracking'); w.style.removeProperty('--wt-gx'); w.style.removeProperty('--wt-gy'); });
    if (w.hasAttribute('data-ritual')) w.addEventListener('click', () => { w.classList.remove('is-ritual'); void w.offsetWidth; w.classList.add('is-ritual'); });
  });
  $$('[data-envelope]', root).forEach(e => { if (e.dataset.wired) return; e.dataset.wired = 1; e.addEventListener('click', () => { e.classList.remove('is-opening'); void e.offsetWidth; e.classList.add('is-opening'); }); });
}

/* ───────── 文档表格 ───────── */
const GROUPS = [
  ['表面', ['bg-frame', 'bg-panel', 'bg-chat', 'bg-subtle', 'bg-raised', 'bg-hover', 'bg-active', 'bg-pinned', 'bg-input', 'bg-mask']],
  ['文字', ['text-1', 'text-2', 'text-3', 'text-4', 'text-inverse']],
  ['描边', ['line-1', 'line-2', 'line-3']],
  ['品牌', ['brand', 'brand-hover', 'brand-active', 'brand-text', 'brand-soft', 'brand-soft-2', 'on-brand', 'focus-ring']],
  ['状态', ['success', 'success-soft', 'danger', 'danger-soft', 'on-danger', 'warning', 'warning-soft']],
  ['消息', ['bubble-other-bg', 'bubble-other-line', 'bubble-self-bg', 'bubble-self-text', 'bubble-self-meta', 'mention', 'mention-self', 'highlight']],
  ['未读', ['badge-bg', 'badge-text', 'badge-muted-bg', 'badge-muted-text']],
  ['钱包与状态灯', ['wallet-body', 'wallet-text', 'wallet-text-2', 'wallet-text-3', 'wallet-line', 'wallet-slot', 'wallet-grain', 'dot', 'dot-hi', 'dot-ring', 'dot-off']],
  ['头像', ['avatar-1-bg', 'avatar-1-fg', 'avatar-2-bg', 'avatar-2-fg', 'avatar-3-bg', 'avatar-3-fg', 'avatar-4-bg', 'avatar-4-fg', 'avatar-5-bg', 'avatar-5-fg', 'avatar-6-bg', 'avatar-6-fg']],
];
const sw = (v, bg) => `<span class="d-sw" style="--c:${v};--b:${bg}"><i></i><code>${esc(v)}</code></span>`;
function colorTables() {
  $('#color-tables').innerHTML = GROUPS.map(([g, ks]) => `<div class="d-tblwrap"><table class="d-tbl d-colors"><caption>${g}</caption><thead><tr><th>令牌</th><th>浅色</th><th>深色</th><th>用在</th></tr></thead><tbody>
    ${ks.map(k => { const [l, d, u] = W.theme[k]; return `<tr><td><code class="d-tok">--wt-${k}</code></td><td>${sw(l, '#FFFFFF')}</td><td>${sw(d, '#0F1114')}</td><td>${esc(u)}</td></tr>`; }).join('')}</tbody></table></div>`).join('');
  $('#brand-consts').innerHTML = Object.entries(W.brand).filter(([k]) => k !== 'gradient').map(([k, v]) => `<div class="d-bc"><i style="background:${v}"></i><b>--wt-${k}</b><code>${v}</code></div>`).join('') + `<div class="d-bc"><i style="background:${W.brand.gradient}"></i><b>--wt-gradient</b><code>只用于图标与字标</code></div>`;
}
function typeTable() {
  $('#type-table').innerHTML = `<table class="d-tbl"><thead><tr><th>名称</th><th>字号 / 行高 / 字重</th><th>示例</th><th>用在</th></tr></thead><tbody>${Object.entries(W.type).map(([k, [s, l, w, u]]) => `<tr><td><code class="d-tok">--wt-fs-${k}</code></td><td class="d-mono">${s} / ${l} / ${w}</td><td><span style="font-size:${s};line-height:${l};font-weight:${w};white-space:nowrap">${k === 'display' || k === 'h1' ? '<span class="r-num">$12,480.32</span>' : k.startsWith('title') || k.startsWith('h') ? 'PEPE 早鸟群' : '今晚 22:00 开直播聊新合约'}</span></td><td>${u}</td></tr>`).join('')}</tbody></table>`;
}
function layoutTable() {
  $('#layout-table').innerHTML = `<table class="d-tbl"><thead><tr><th>令牌</th><th>值</th><th>说明</th></tr></thead><tbody>${Object.entries(W.layout).map(([k, [v, u]]) => `<tr><td><code class="d-tok">--wt-${k}</code></td><td class="d-mono">${v}</td><td>${u}</td></tr>`).join('')}</tbody></table>`;
  $('#space-scale').innerHTML = Object.entries(W.space).filter(([k]) => k !== '0').map(([k, v]) => `<div class="d-space"><i style="width:${v}"></i><code>${k} · ${v}</code></div>`).join('');
  $('#radius-scale').innerHTML = Object.entries(W.radius).map(([k, v]) => `<div class="d-radius"><i style="border-radius:${k === 'full' ? '999px' : v}"></i><code>${k} · ${v}</code></div>`).join('');
}
function legacyTables() {
  $('#legacy-table').innerHTML = `<table class="d-tbl"><thead><tr><th>pc-web 现有变量</th><th>改为</th><th>说明</th></tr></thead><tbody>${Object.entries(W.legacy).map(([k, [v, n]]) => `<tr><td><code class="d-tok">${k}</code></td><td><code class="d-tok">${v}</code></td><td>${esc(n).replace(/`([^`]+)`/g, '<code>$1</code>')}</td></tr>`).join('')}</tbody></table>`;
  $('#hex-table').innerHTML = `<table class="d-tbl"><thead><tr><th>硬编码色</th><th>次数</th><th>替换为</th><th>是什么</th></tr></thead><tbody>${W.hexmap.map(([h, n, to, what]) => `<tr><td>${h.split(' ').map(x => x.startsWith('#') ? `<span class="d-hex"><i style="background:${x}"></i>${x}</span>` : `<span class="d-hex">${esc(x)}</span>`).join(' ')}</td><td class="d-mono">${n}</td><td><code class="d-tok">${esc(to)}</code></td><td>${esc(what).replace(/`([^`]+)`/g, '<code>$1</code>')}</td></tr>`).join('')}</tbody></table>`;
}
function iconGrid() {
  const groups = {};
  Object.entries(W.icons).forEach(([k, v]) => { (groups[v.group] = groups[v.group] || []).push([k, v]); });
  $('#icon-grid').innerHTML = Object.entries(groups).map(([g, list]) => `<h4 class="d-h4">${g} <small>${list.length}</small></h4><div class="d-icons">${list.map(([k, v]) => `<div class="d-icon" title="${esc(v.replaces)}">${ic(k)}<b>${v.zh}</b><code>${k}</code><small>${esc(v.replaces)}</small></div>`).join('')}</div>`).join('');
}

/* ───────── 桌面框缩放 ───────── */
function fitFrames() { $$('.d-frame').forEach(f => { const inner = f.firstElementChild; const w = +f.dataset.w || 1280; inner.style.transform = `scale(${f.clientWidth / w})`; }); }

/* ───────── 主题切换 ───────── */
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem('wt-ds-theme', t); } catch (e) {}
  $$('[data-set-theme]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.setTheme === t)));
}
$$('[data-set-theme]').forEach(b => b.addEventListener('click', () => setTheme(b.dataset.setTheme)));
setTheme(document.documentElement.dataset.theme || 'light');

/* ───────── 复制代码 ───────── */
$$('pre.d-code').forEach(pre => { const b = document.createElement('button'); b.className = 'd-copy'; b.textContent = '复制';
  b.addEventListener('click', async () => { try { await navigator.clipboard.writeText(pre.querySelector('code').innerText); b.textContent = '已复制'; } catch (e) { b.textContent = '请手动选择'; } setTimeout(() => b.textContent = '复制', 1600); });
  pre.appendChild(b); });

/* 目录高亮 */
const links = $$('.d-toc a');
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => { es.forEach(e => { if (e.isIntersecting) { links.forEach(a => a.classList.toggle('is-on', a.getAttribute('href') === '#' + e.target.id)); } }); }, { rootMargin: '-45% 0px -50% 0px' }) : null;
if (io) $$('main section[id]').forEach(s => io.observe(s));

colorTables(); typeTable(); layoutTable(); legacyTables(); iconGrid(); render(); fitFrames();
addEventListener('resize', fitFrames);
window.WTDS = { render, fitFrames, setTheme };
})();
