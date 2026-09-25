/* Walletalk 设计系统 · 应用广场 pages/apps、小程序容器、官方小程序"币圈百科"（演示数据）
   广场结构按源码：推广与置顶 → 全部 / 最近使用 / 常用 → 最近使用 → 官方首推 → 分类 → 行业热门（榜单）。 */
(() => {
const { R, wire, fitFrames, h } = window.WTDS;
const { ic, av, dot, badge, btn, ibtn, bub, msg, topBar, navItem, NAV, sbar, mTab, LW, KR } = h;
const NEW = [];
const reg = (k, f) => { R[k] = f; NEW.push(k); };
let uid = 0;

/* ───────── 应用数据（名称为行业内常见 DApp；图标用色块 + 首字母占位，实际取开发者上传的 iconUrl） ───────── */
const A = {
  wiki: { n: '币圈百科', off: 'book', cat: '工具', d: '行情、币种百科、市场洞察，一个应用看懂加密市场', l: '12.4 万', fav: 1 },
  safe: { n: '防骗课堂', off: 'security', cat: '官方', d: '识别假客服、假空投、授权钓鱼，附真实案例和自查清单', l: '8.6 万' },
  uni: { n: 'Uniswap', m: 'U', c: '#D9487E', cat: 'DeFi', d: '以太坊上的去中心化交易所', l: '52.8 万', p: 1 },
  cake: { n: 'PancakeSwap', m: 'PS', c: '#1F9BB8', cat: 'DeFi', d: 'BNB 链上的去中心化交易所', l: '31.2 万', p: 1, fav: 1 },
  gmgn: { n: 'GMGN.AI', m: 'G', c: '#1C9A6E', cat: '工具', d: '链上 Meme 交易与聪明钱追踪', l: '27.5 万' },
  four: { n: 'Four.Meme', m: 'F', c: '#6E54E8', cat: '交易', d: 'BNB 链 Meme 币发射平台', l: '22.1 万', risk: 'medium' },
  aster: { n: 'Aster', m: 'A', c: '#D9772B', cat: '交易', d: '链上永续合约交易', l: '18.7 万', p: 1, risk: 'medium' },
  venus: { n: 'Venus', m: 'V', c: '#3767D6', cat: 'DeFi', d: 'BNB 链上的借贷协议', l: '12.9 万', p: 1 },
  lista: { n: 'Lista', m: 'L', c: '#B8472F', cat: 'DeFi', d: 'BNB 链流动性质押与借贷', l: '10.4 万' },
  poly: { n: 'Polymarket', m: 'PM', c: '#4B5B70', cat: '预测市场', d: '对热点事件下注的预测市场', l: '9.8 万', p: 1, risk: 'medium' },
  transit: { n: 'Transit Swap', m: 'T', c: '#2E7FC7', cat: '工具', d: '多链聚合兑换', l: '8.1 万' },
  me: { n: 'Magic Eden', m: 'ME', c: '#A8437A', cat: '游戏 / NFT', d: '多链 NFT 交易市场', l: '6.3 万' },
};
const appic = (a, size = '') => a.off
  ? `<span class="r-appic is-official${size ? ' r-appic--' + size : ''}" aria-hidden="true">${ic(a.off)}</span>`
  : `<span class="r-appic${size ? ' r-appic--' + size : ''}" style="--c:${a.c}" aria-hidden="true">${a.m}</span>`;
const tags = a => `${a.off ? '<span class="r-tag r-tag--brand">官方</span>' : `<span class="r-tag">${a.cat}</span>`}${a.p ? `<span class="r-tag">${ic('check')}认证伙伴</span>` : ''}`;
const risk = a => a.risk === 'medium' ? `<span class="r-risk is-medium">${ic('security')}风险中</span>` : a.risk === 'high' ? `<span class="r-risk is-high">${ic('alert')}风险高</span>` : `<span class="r-risk">${ic('security')}风险低</span>`;
const star = (on, label = on ? '取消常用' : '加入常用') => `<button class="r-iconbtn${on ? ' is-fav' : ''}" aria-label="${label}" title="${label}">${ic('star')}</button>`;

/* 推广与置顶 */
const promo = (a, pinned) => `<div class="r-promo${pinned ? ' is-pinned' : ''}">${appic(a, 'lg')}<b>${a.n}${pinned ? '<span class="r-tag r-tag--pin">置顶</span>' : '<span class="r-tag">推广</span>'}</b><p>${a.d}</p>
  <div class="row"><span>${a.off ? '官方' : a.cat} · ${a.l} 次打开</span>${btn('打开', pinned ? 'primary' : 'default', { size: 'sm' })}</div></div>`;
const tile = a => `<div class="r-apptile" title="${a.n}">${appic(a)}<span>${a.n}</span></div>`;
const fcard = a => `<div class="r-fcard"><div class="r-fcard__h">${appic(a, 'lg')}<div><b>${a.n}</b><small>${tags(a)}</small></div></div><p>${a.d}</p>
  <div class="r-fcard__meta"><span>${a.l} 次打开</span>${risk(a)}</div><div class="r-fcard__acts">${btn('打开', 'primary', { size: 'sm' })}${btn('详情', 'default', { size: 'sm' })}${star(a.fav)}</div></div>`;
const CATS = [['candles', '交易'], ['chain', '中心化交易所'], ['info', '预测市场'], ['asset', '链上商城'], ['swap', 'DeFi'], ['emoji', '游戏 / NFT'], ['settings', '工具'], ['security', '官方']];
const chips = () => `<div class="r-chips">${CATS.map(([i, t]) => `<span class="r-chip">${ic(i)}${t}</span>`).join('')}</div>`;
const HOT = ['uni', 'cake', 'gmgn', 'four', 'aster', 'venus', 'lista', 'poly', 'transit', 'me'];
const rrow = (k, i, o = {}) => { const a = A[k]; return `<div class="r-rrow"><span class="n${i < 3 ? ' is-top' : ''}">${i + 1}</span>${appic(a)}
  <div class="who"><b>${a.n}${o.m ? `<span class="r-tag">${a.off ? '官方' : a.cat}</span>` : tags(a)}</b><p>${a.d}</p><small><span>${a.l} 次打开</span>${risk(a)}</small></div>
  <div class="acts">${btn('打开', 'default', { size: 'sm' })}${o.m ? '' : star(a.fav)}</div></div>`; };
const pager = (m) => m ? `<div class="r-pager"><span>${ic('chevron-left')}</span><span class="is-on">1 / 6</span><span>${ic('chevron-right')}</span></div>`
  : `<div class="r-pager"><span>${ic('chevron-left')}</span><span class="is-on">1</span><span>2</span><span>3</span><span>…</span><span>6</span><span>${ic('chevron-right')}</span></div>`;
const sect = (t, s, more) => `<div class="r-sect"><h3>${t}</h3>${s ? `<small>${s}</small>` : ''}${more ? `<span class="more">${more}${ic('chevron-right')}</span>` : ''}</div>`;
const plazaTabs = () => `<div class="r-tabs"><span class="is-on">全部</span><span>最近使用</span><span>常用</span></div>`;

const NAV_A = NAV;
const navBar = active => `<nav class="r-nav">${av('K', 1, { size: 'md', online: true })}${NAV_A.map(([n, t, b]) => navItem(n, t, b, t === active)).join('')}</nav>`;
const appsPC = () => `<div class="r-app r-scope">${topBar()}${navBar('应用')}<div class="r-main"><section class="r-apps">
  <header class="r-apps__head"><h2>应用</h2>${ibtn('refresh', '刷新')}<span class="sp"></span><div class="r-input">${ic('search')}<span class="ph">搜索应用</span></div>${btn('客服', 'default', { icon: 'nav-cs' })}${btn('开发者后台', 'default', { icon: 'settings' })}</header>
  <section><div class="r-promos">${promo(A.wiki, 1)}${promo(A.aster)}${promo(A.lista)}</div></section>
  ${plazaTabs()}
  <section style="margin-top:-8px">${sect('最近使用')}<div class="r-approw">${['wiki', 'cake', 'gmgn', 'four', 'safe', 'uni', 'venus', 'lista', 'poly', 'transit', 'me', 'aster'].map(k => tile(A[k])).join('')}</div></section>
  <section>${sect('官方首推', 'Walletalk 官方与认证伙伴')}<div class="r-feat">${['wiki', 'safe', 'cake', 'poly'].map(k => fcard(A[k])).join('')}</div></section>
  <section>${sect('分类')}${chips()}</section>
  <section>${sect('行业热门', '按近 7 天打开次数排序 · 每 24 小时更新')}<div class="r-rank"><div class="r-rank__col">${HOT.slice(0, 5).map((k, i) => rrow(k, i)).join('')}</div><div class="r-rank__col">${HOT.slice(5, 10).map((k, i) => rrow(k, i + 5)).join('')}</div></div>${pager()}</section>
</section></div></div>`;
reg('apps-pc', appsPC);

/* H5 应用广场：首屏 + 下滑 */
const phone = (inner, tab = '应用', bg = 'var(--wt-bg-chat)') => `<div class="r-phone r-scope"><div class="r-phone__scr" style="background:${bg}">${sbar.replace('r-phone__sb"', `r-phone__sb" style="background:${bg}"`)}${inner}${tab ? mTab(tab) : ''}</div></div>`;
reg('apps-h5-top', () => phone(`<div class="r-apps-m">
  <div class="r-apps-m__h"><h2>应用</h2>${ibtn('nav-cs', '客服')}${ibtn('settings', '开发者后台')}</div>
  <div class="r-input">${ic('search')}<span class="ph">搜索应用</span></div>
  ${promo(A.wiki, 1)}<div class="r-dots"><i class="is-on"></i><i></i><i></i></div>
  ${plazaTabs()}
  <section>${sect('最近使用')}<div class="r-approw">${['wiki', 'cake', 'gmgn', 'four', 'safe'].map(k => tile(A[k])).join('')}</div></section>
  <section>${sect('官方首推', '', '全部')}<div class="r-hscroll">${['wiki', 'safe', 'cake'].map(k => fcard(A[k])).join('')}</div></section>
</div>`));
reg('apps-h5-hot', () => phone(`<div class="r-apps-m" style="padding-top:12px">
  <section>${sect('分类')}${chips().replace('class="r-chips"', 'class="r-chips" style="margin-right:-16px"')}</section>
  <section>${sect('行业热门', '近 7 天')}<div class="r-rank__col">${HOT.slice(0, 5).map((k, i) => rrow(k, i, { m: 1 })).join('')}</div>${pager(1)}</section>
</div>`));

/* ═════════ 币圈百科 ═════════ */
const COIN = { BTC: ['₿', '#F7931A', '#FFFFFF'], ETH: ['Ξ', '#627EEA', '#FFFFFF'], USDT: ['₮', '#26A17B', '#FFFFFF'], BNB: ['BNB', '#F3BA2F', '#17120C'], XRP: ['X', '#23292F', '#FFFFFF'], SOL: ['S', '#6E54E8', '#FFFFFF'], USDC: ['$', '#2775CA', '#FFFFFF'], DOGE: ['Ð', '#C2A633', '#17120C'] };
const coin = (s, lg = 1) => { const [g, b, f] = COIN[s]; return `<span class="r-tkn${lg ? ' r-tkn--lg' : ''}" style="background:${b};color:${f}">${g}</span>`; };
// 行情：价格、24h 涨跌、24h 交易额、流通市值；百科：全球指数（USD）与人民币估值
const MK = [
  ['BTC', '84,242.16', 0.13, '36.62B', '1.67 万亿', '84,258.30', '599,919'],
  ['ETH', '2,681.38', -0.24, '13.85B', '3,236 亿', '2,683.10', '19,104'],
  ['USDT', '1.000', 0, '82.24B', '1,873 亿', '1.000', '7.12'],
  ['BNB', '774.72', 0.20, '1.55B', '1,129 亿', '775.04', '5,518'],
  ['XRP', '1.530', 1.27, '4.93B', '886 亿', '1.532', '10.91'],
  ['SOL', '124.50', 2.84, '3.12B', '601 亿', '124.61', '887.2'],
  ['USDC', '1.000', 0.01, '6.40B', '755 亿', '1.000', '7.12'],
  ['DOGE', '0.1612', -1.05, '1.08B', '237 亿', '0.1613', '1.148'],
];
const pct = v => `${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.abs(v).toFixed(2)}%`;
const chg = v => `<span class="r-chg${v < 0 ? ' is-down' : v === 0 ? ' is-flat' : ''}">${pct(v)}</span>`;
function spark(seed, up = true, w = 200, hgt = 80) {
  let x = seed * 9301 + 49297, y = hgt * (up ? .7 : .35); const pts = [];
  for (let i = 0; i <= 28; i++) { x = (x * 9301 + 49297) % 233280; const r = x / 233280 - .5; y = Math.max(8, Math.min(hgt - 6, y + r * 14 - (up ? 1.3 : -1.1))); pts.push([i * w / 28, y]); }
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const id = 'sp' + (++uid);
  return `<svg class="spark" viewBox="0 0 ${w} ${hgt}" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFB224" stop-opacity=".32"/><stop offset="1" stop-color="#FFB224" stop-opacity="0"/></linearGradient></defs><path d="${d} L${w} ${hgt} L0 ${hgt}Z" fill="url(#${id})"/><path d="${d}" fill="none" stroke="#FFB224" stroke-width="1.8" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>`;
}
const trend = (pair, px, v, vol, seed) => `<div class="r-trend"><span class="k">${ic('chain')}全链趋势</span><b class="pair">${pair}</b><span class="px">$${px}</span>
  <span class="chg${v < 0 ? ' is-down' : ''}">${ic('trend-up')}${pct(v)}</span>${spark(seed, v >= 0)}<span class="vol">Vol 24H<b>${vol}</b></span></div>`;
const wkseg = on => `<div class="r-wkseg" role="tablist">${[['candles', '行情'], ['book', '币种百科'], ['news', '市场洞察']].map(([i, t]) => `<span class="${t === on ? 'is-on' : ''}" role="tab" aria-selected="${t === on}">${t}</span>`).join('')}</div>`;
const mkRow = ([s, px, v, vol]) => `<div class="r-mkrow">${coin(s)}<div class="who"><b>${s}</b><small>Vol $${vol}</small></div><div class="px"><b>$${px}</b>${chg(v)}</div></div>`;
const wikiRow = ([s, , , , cap, idx, cny]) => `<div class="r-mkrow">${coin(s)}<div class="who"><b>${s}</b><small>流通市值 $${cap}</small></div><div class="px"><b>$${idx}</b><small>≈ ¥${cny}</small></div></div>`;
const THUMB = [['#2A2233', '#D9824A'], ['#15201F', '#6FA89A'], ['#1C2230', '#8A9BD6'], ['#2B1E16', '#E0A060']];
const thumb = k => { const [a, b] = THUMB[k % 4]; const id = 'th' + (++uid); const shape = [
  `<circle cx="70" cy="26" r="12" fill="${b}" opacity=".9"/><path d="M0 56 Q25 40 50 52 T100 48 V75 H0Z" fill="${b}" opacity=".35"/>`,
  `<circle cx="36" cy="40" r="18" fill="none" stroke="${b}" stroke-width="2"/><circle cx="60" cy="34" r="10" fill="${b}" opacity=".8"/>`,
  `<path d="M8 60 L28 44 L44 50 L66 26 L92 34" fill="none" stroke="${b}" stroke-width="3" stroke-linejoin="round"/><circle cx="66" cy="26" r="4" fill="${b}"/>`,
  `<rect x="18" y="20" width="26" height="36" rx="4" fill="${b}" opacity=".85"/><rect x="50" y="30" width="26" height="26" rx="4" fill="${b}" opacity=".45"/>`][k % 4];
  return `<span class="th"><svg viewBox="0 0 100 75" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="#0B0D10"/></linearGradient></defs><rect width="100" height="75" fill="url(#${id})"/>${shape}</svg></span>`; };
const ARTS = [
  ['年末复盘：在不确定中重新理解加密市场', '汇总数十位建设者与研究员的对话，梳理这一年里的叙事切换、资金流向和下一年的关键变量。', '市场洞察', '12-30'],
  ['比特币区间震荡，跨年行情要看什么？', 'BTC、ETH 窄幅波动，美联储政策分歧短期压制风险偏好；链上大户持仓与稳定币净流入是更早的信号。', '行情解读', '12-29'],
  ['稳定币的下一站：支付与合规', '从交易媒介到日常支付，稳定币正在被更多钱包和商户接入，合规框架决定它能走多远。', '深度', '12-27'],
  ['为什么在加密行业更需要一份年终总结', '当你真正想要某样东西时，先写下来。复盘仓位、复盘判断，也复盘自己的节奏。', '专栏', '12-26'],
];
const art = (a, k) => `<div class="r-art"><b>${a[0]}</b><p>${a[1]}</p>${thumb(k)}<small><span>${a[2]}</span><span>${a[3]}</span></small></div>`;
const mpHead = (o = {}) => `<header class="r-mp__head">${ibtn('chevron-left', '返回')}${appic(A.wiki, 'xs')}<b>币圈百科</b><span class="r-tag r-tag--brand">官方</span><span class="sp"></span>${ibtn('expand', o.half ? '全屏' : '半屏', 'is-cap')}${ibtn('more', '更多', 'is-cap')}${ibtn('close', '关闭', 'is-cap')}</header>`;
const mkHead = (a, b) => `<div class="r-mkhead"><span>${a}${ic('sort')}</span><span>${b}${ic('sort')}</span></div>`;

/* H5：行情 / 币种百科 / 市场洞察（容器全屏） */
const wikiPhone = (body) => `<div class="r-phone r-scope"><div class="r-phone__scr" style="background:var(--wt-bg-chat)">${sbar.replace('r-phone__sb"', 'r-phone__sb" style="background:var(--wt-bg-panel)"')}<div class="r-mp r-mp--m">${mpHead()}<div class="r-mp__body"><div class="r-wk">${body}</div></div></div></div></div>`;
reg('wiki-h5-market', () => wikiPhone(`${wkseg('行情')}<div class="r-input">${ic('search')}<span class="ph">输入币种名称查询</span></div>
  ${trend('BTC/USDT', '84,242.16', 0.13, '36.62B', 3)}<div class="r-dots" style="margin-top:-6px"><i class="is-on"></i><i></i><i></i></div>
  <div class="r-pilltabs"><span class="is-on">热门榜</span><span>涨幅榜</span><span>24h 交易额</span></div>
  <div class="r-mklist">${mkHead('名称 / 24h 交易额', '价格 / 涨跌')}${MK.slice(0, 5).map(mkRow).join('')}</div>`));
reg('wiki-h5-wiki', () => wikiPhone(`${wkseg('币种百科')}<div class="r-wkhero"><b>Crypto</b><small>洞悉加密世界，掌握币种信息</small></div><div class="r-input">${ic('search')}<span class="ph">输入币种名称查询</span></div>
  <div class="r-mklist">${mkHead('名称 / 流通市值', '全球指数')}${MK.slice(0, 7).map(wikiRow).join('')}</div>`));
reg('wiki-h5-insight', () => wikiPhone(`${wkseg('市场洞察')}<div class="r-wkhero"><b>Market Insights</b><small>深度解读市场，洞悉未来趋势</small></div><div class="r-arts">${ARTS.slice(0, 3).map(art).join('')}</div>`));

/* 聊天里的小程序卡片（DappMessageCard，点开为半屏） */
const appCard = (a = A.wiki) => `<div class="r-appcard${a.off ? '' : ' is-3rd'}" role="button" tabindex="0"><div class="r-appcard__cover">${appic(a, 'lg')}<div><b>${a.n}</b><small>${a.off ? 'Walletalk 官方小程序' : a.cat + ' · 小程序'}</small></div></div>
  <div class="r-appcard__main"><p>${a.d}</p></div><div class="r-appcard__foot">${ic('nav-apps')}小程序${btn('打开', 'default', { size: 'sm' })}</div></div>`;
reg('wiki-h5-half', () => `<div class="r-phone r-scope"><div class="r-phone__scr" style="background:var(--wt-bg-chat)">${sbar.replace('r-phone__sb"', 'r-phone__sb" style="background:var(--wt-bg-panel)"')}
  <header class="r-m-head">${ibtn('chevron-left', '返回')}<div class="t"><b>PEPE 早鸟群（1,284）</b></div>${ibtn('more', '设置')}</header>
  <div class="r-m-body"><div class="r-msgs" style="justify-content:flex-start">${msg(bub('大饼今天又横着走', { meta: '21:40' }), { a: LW, nick: '老王' })}${msg(appCard(), { a: LW, cont: 1 })}${msg(bub('稳住，看 24h 交易额', { self: 1, meta: '21:42' }), { self: 1, state: 'read' })}</div></div>
  <div class="r-sheet-mask"></div><div class="r-sheet"><div class="r-mp r-mp--m">${mpHead({ half: 1 })}<div class="r-mp__body"><div class="r-wk" style="padding-top:12px">${trend('BTC/USDT', '84,242.16', 0.13, '36.62B', 7)}<div class="r-mklist">${MK.slice(1, 3).map(mkRow).join('')}</div></div></div></div></div></div></div>`);

/* PC：容器全屏（保留 40 顶栏），币圈百科宽版 */
reg('wiki-pc', () => `<div class="r-scope" style="height:100%;display:flex;flex-direction:column;background:var(--wt-bg-frame)">${topBar()}<div class="r-mp" style="flex:1;min-height:0">${mpHead()}<div class="r-mp__body"><div class="r-wk r-wk--pc">
  <div class="r-wktop">${wkseg('行情')}<span style="font-size:12px;color:var(--wt-text-3)">更新于 21:46 · 全链聚合</span><div class="r-input">${ic('search')}<span class="ph">输入币种名称查询</span></div></div>
  <div class="r-wkgrid"><div>
    <div class="r-trends">${trend('BTC/USDT', '84,242.16', 0.13, '36.62B', 3)}${trend('ETH/USDT', '2,681.38', -0.24, '13.85B', 11)}${trend('SOL/USDT', '124.50', 2.84, '3.12B', 5)}</div>
    <div class="r-mklist" style="flex:1;min-height:0"><div class="r-mkbox__h"><div class="r-pilltabs"><span class="is-on">热门榜</span><span>涨幅榜</span><span>24h 交易额</span></div><span style="font-size:12px;color:var(--wt-text-3)">共 1,286 个币种</span></div>
      <table class="r-mktable"><thead><tr><th style="width:1%">#</th><th>名称</th><th class="r">价格 ${ic('sort')}</th><th class="r">24h 涨跌 ${ic('sort')}</th><th class="r">24h 交易额 ${ic('sort')}</th><th class="r">流通市值 ${ic('sort')}</th></tr></thead><tbody>
      ${MK.slice(0, 7).map(([s, px, v, vol, cap], i) => `<tr><td class="muted">${i + 1}</td><td><div class="r-token">${coin(s, 0)}<div><b>${s}</b></div></div></td><td class="r"><b style="font-weight:600">$${px}</b></td><td class="r">${chg(v)}</td><td class="r muted">$${vol}</td><td class="r muted">$${cap}</td></tr>`).join('')}</tbody></table></div>
  </div><div>
    <div class="r-mklist r-side-arts"><div class="r-mkbox__h"><b style="font-size:15px">市场洞察</b><span class="more" style="font-size:12.5px;color:var(--wt-text-3);display:inline-flex;align-items:center">全部${ic('chevron-right')}</span></div>${ARTS.map(art).join('')}</div>
    <div class="r-mklist" style="padding:14px 16px;display:grid;gap:8px"><b style="font-size:15px">币种百科</b><span style="font-size:12.5px;color:var(--wt-text-2)">1,286 个币种的简介、流通市值和全球指数，数据每分钟更新。</span>${btn('打开币种百科', 'default', { size: 'sm', icon: 'book' })}</div>
  </div></div></div></div></div></div>`);

/* 容器零件：连接此应用、更多菜单、容器顶栏、聊天卡片 */
const perm = (t, d, on) => `<div class="r-perm"><span class="r-check${on ? ' is-on' : ''}">${on ? ic('check') : ''}</span><div>${t}<small>${d}</small></div></div>`;
reg('mp-kit', () => `<div class="r-scope r-mpkit">
  <div class="r-modal r-consent"><div class="r-modal__head">连接此应用${ibtn('close', '关闭')}</div><div class="r-modal__body">
    <div class="r-consent__app">${appic(A.wiki)}<div><b>币圈百科</b><small>Walletalk 官方 · 版本 1.3.0</small></div></div>
    <span>选择允许此应用访问的信息和能力。每次签名与交易仍需要你确认。</span>
    ${perm('读取个人资料', '昵称、头像', 1)}${perm('分享卡片到会话', '把行情、文章分享给好友或群', 1)}${perm('请求订阅通知', '价格提醒、每日早报', 0)}
    <div class="r-privacy">${ic('security')}<span><b>隐私</b> · 仅授予你选择的权限，你可以随时撤销授权。</span></div></div>
    <div class="r-modal__foot">${btn('取消', 'default')}${btn('打开', 'primary')}</div></div>
  <div style="display:grid;gap:14px;align-content:start">
    <div class="r-mp" style="height:auto;border-radius:14px;overflow:hidden;box-shadow:var(--wt-shadow-1)">${mpHead()}</div>
    <div class="r-pop" style="justify-self:end;width:200px">${[['forward', '分享到会话'], ['star', '加入常用'], ['transfer', '划转到 Web3 钱包'], ['security', '权限']].map(([i, t]) => `<div class="r-pop__item">${ic(i)}${t}</div>`).join('')}<div class="r-pop__item">${ic('close')}断开授权</div><div class="r-pop__sep"></div><div class="r-pop__item is-danger">${ic('alert')}举报</div><div class="r-pop__item">${ic('info')}开发者</div></div></div>
  <div class="r-chatbg" style="display:flex;flex-direction:column">${msg(appCard(), { a: LW, nick: '老王' })}${msg(appCard(A.cake), { a: KR, nick: 'Kris' })}</div>
</div>`);

/* 渲染新增项 */
document.querySelectorAll('[data-r]').forEach(el => { if (NEW.includes(el.dataset.r)) el.innerHTML = R[el.dataset.r](); });
wire(document); fitFrames();
})();
