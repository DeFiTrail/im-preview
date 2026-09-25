/* Walletalk 设计系统 · 直播间 pages/live 与客服 components/CS* 参考页面（演示数据）
   结构、文案按 pc-web 源码与 i18n/zh.json 排布，只换皮不改功能。 */
(() => {
const { R, wire, fitFrames, h } = window.WTDS;
const { ic, av, dot, badge, btn, ibtn, bub, msg, envelope, topBar, navItem, NAV, sbar, LW, KR, XY } = h;
const NEW = [];
const reg = (k, f) => { R[k] = f; NEW.push(k); };

/* ═════════ 直播间（固定黑夜：沉浸式画面） ═════════ */
const lvState = s => s === 'live' ? `<span class="r-lv__state">${dot('wt-dot--sm is-live')}直播中</span>` : s === 'wait' ? `<span class="r-lv__state is-wait">等待开播</span>` : `<span class="r-lv__state is-end">直播结束</span>`;
const lvToggle = (i, t, o = {}) => `<button class="r-lv__toggle${o.on ? ' is-on' : ''}" style="position:relative">${ic(i)}${t}${o.badge ? `<span class="r-badge" style="position:absolute;top:-6px;right:-6px">${o.badge}</span>` : ''}</button>`;
const lvMeta = (o = {}) => `<div class="r-lv__meta"><div class="r-lv__title"><b>${o.title || '老王的 AMA · 新合约迁移'}</b>${lvState(o.state || 'live')}${o.mode === false ? '' : '<span class="r-lv__mode">可连线直播</span>'}</div>
  <div class="r-lv__chips"><span>主讲 <b>老王</b></span><span>在线 <b>312</b></span><span>累计 <b>1,046</b> 人次</span><span>点赞 <b>2.3万</b></span>${o.elapsed === false ? '' : '<span>已播 <b>42:18</b></span>'}</div></div>`;
const lvTop = (o = {}) => `<header class="r-lv__top">${ibtn('chevron-left', '返回')}${av('老', 2, { size: 'md', live: 1 })}${lvMeta(o)}
  <div class="r-lv__acts">${lvToggle('nav-chat', '群聊', { on: o.chat, badge: o.chat ? 0 : 8 })}${o.host ? lvToggle('nav-contacts', o.side ? '收起' : '场控', { on: o.side, badge: 2 }) : ''}</div></header>`;

const slide = () => `<div class="r-lv__screen"><div class="r-lv__slide"><small>PEPE 早鸟群 · 群直播</small><h4>新合约迁移：<br>你需要做的三件事</h4>
  <ul><li>旧合约 <code>0x6982…1933</code> 9 月 30 日停止交易</li><li>在「钱包 · 兑换」里 1 : 1 换成新代币</li><li>只认群公告里的地址，私聊发来的一律不信</li></ul><footer><span>演示数据</span><span>3 / 12</span></footer></div></div>`;
const tile = (n, c, o = {}) => `<div class="r-lv__tile${o.talk ? ' is-talk' : ''}" style="--c1:${o.c1 || '#3A3148'};--c2:${o.c2 || '#2A2530'}"><div class="cam">${av(n[0], c)}</div>
  <span class="nm">${o.mute ? `<span class="mute">${ic('mic')}</span>` : ic('mic')}${n}${o.talk ? '<span class="tag">主讲</span>' : ''}${o.voice ? '<span class="tag" style="background:rgba(255,247,236,.2);color:#FFF7EC">语音</span>' : ''}</span></div>`;
const DM = [['sys', '', '欢迎来到直播间，请文明发言'], ['', 'Kris', '审计报告在哪看？'], ['', '小鱼', '上车了'], ['', '阿May', '新地址和群公告一致'], ['', 'Leo', '兑换手续费谁出？'], ['is-me', '我', '收到，先小仓位']];
const danmaku = (list = DM) => `<div class="r-lv__danmaku">${list.map(([c, u, t]) => `<span class="${c}">${u ? `<b>${u}</b>` : ''}${t}</span>`).join('')}</div>`;
const likes = () => `<div class="r-lv__likes" aria-hidden="true">${[[0, -18, '#FFB224'], [.7, 10, '#F38917'], [1.4, -6, '#FFC96A'], [2.1, 16, '#E8762A'], [2.7, -12, '#FFB224']].map(([d, dx, c]) => `<i style="animation-delay:-${d}s;--dx:${dx}px;--c:${c}">${ic('like')}</i>`).join('')}</div>`;
const player = () => `<div class="r-lv__quality"><span>高清${ic('chevron-down')}</span><span title="画中画">${ic('pip')}</span><span title="关闭声音">${ic('volume')}</span></div>`;
const artc = () => `<div class="r-lv__artc"><button title="静音">${ic('mic')}</button><button class="is-off" title="开启摄像头">${ic('video')}</button><button class="is-danger" title="停止共享">${ic('screen-share')}</button><i class="sep"></i><span class="r-seg"><span class="is-on">演讲者</span><span>宫格</span></span></div>`;

const lvRow = (a, name, sub, acts = '') => `<div class="r-lv__row">${a}<div class="who"><b>${name}</b><small>${sub}</small></div>${acts}</div>`;
const sideHead = (t, sub, close = '收起') => `<div class="r-lv__sidehead"><span class="ico">${ic('nav-contacts')}</span><div>${t}<em>${sub}</em></div>${btn(close, 'text', { size: 'sm' })}</div>`;
const sideCtl = () => `<aside class="r-lv__side">${sideHead('场控', '在线 312')}
  <span class="r-seg"><span class="is-on">场控</span><span>在线<em>312</em></span></span>
  <div class="r-lv__scroll"><div class="r-lv__sec">举手申请 ${badge(2)}</div>
  ${lvRow(av('K', 3, { size: 'sm' }), 'Kris', `${ic('video')}视频连麦 · 12 秒前`, `${btn('同意', 'primary', { size: 'sm' })}${btn('拒绝', 'default', { size: 'sm' })}`)}
  ${lvRow(av('M', 5, { size: 'sm' }), '阿May', `${ic('mic')}语音连麦（更流畅）· 1 分钟前`, `${btn('同意', 'primary', { size: 'sm' })}${btn('拒绝', 'default', { size: 'sm' })}`)}
  <div class="r-lv__sec">连麦者 <small style="font-weight:400">2 / 4</small></div>
  ${lvRow(av('老', 2, { size: 'sm' }), '老王 <span class="r-tag r-tag--brand" style="height:18px;font-size:11px;margin-left:4px">主讲</span>', `${dot('wt-dot--sm is-live')}共享窗口中`)}
  ${lvRow(av('阿', 2, { size: 'sm' }), '阿杰', `<span style="color:var(--wt-danger);display:inline-flex">${ic('mic')}</span>已静音 · 语音`, `${btn('设为主讲', 'default', { size: 'sm' })}${btn('下麦', 'default', { size: 'sm' })}`)}
  <div class="r-lv__sec">弹幕</div><div class="r-setrow">全员禁言<span class="r-switch"></span></div>
  <div class="r-lv__sec">直播模式</div>
  <div class="r-lv__src"><span>${ic('video')}摄像头直播</span><span>${ic('screen-share')}共享桌面</span><span class="is-on">${ic('pip')}共享窗口/PPT</span></div></div></aside>`;
const sideOnline = () => `<aside class="r-lv__side">${sideHead('场控', '在线 312')}
  <span class="r-seg"><span>场控</span><span class="is-on">在线<em>312</em></span></span>
  <div class="r-input">${ic('search')}<span class="ph">搜索昵称或 userID 邀请上麦</span></div>
  <div class="r-lv__scroll">${[['K', 3, 'Kris', '举手中 · 视频连麦'], ['鱼', 6, '小鱼', '观众'], ['M', 5, '阿May', '观众'], ['L', 4, 'Leo', '已禁言', 1], ['S', 5, 'Sophia', '观众'], ['林', 5, '林总', '观众']].map(([a, c, n, s, muted]) =>
    lvRow(av(a, c, { size: 'sm' }), n, s, `${btn('邀请上麦', 'default', { size: 'sm' })}${btn(muted ? '解除禁言' : '禁言', 'text', { size: 'sm' })}`)).join('')}
  <div class="r-lv__sec" style="font-weight:400">还有 306 人未展示，请用搜索精确查找</div></div></aside>`;
const chatDrawer = () => `<aside class="r-lv__drawer">${sideHead('群聊', 'PEPE 早鸟群 · 1,284 人', '关闭').replace(ic('nav-contacts'), ic('nav-chat'))}
  <div class="r-lv__msgs">${[
    msg(bub('今晚 22:00 开直播聊新合约，大家来', { meta: '21:30' }), { a: LW, nick: '老王', role: '群主' }),
    `<div class="r-sys"><b>老王</b> 发起了群直播</div>`,
    msg(bub('PPT 能发群文件吗？', { meta: '21:52' }), { a: KR, nick: 'Kris' }),
    msg(envelope(), { a: XY, nick: '小鱼' }),
    msg(bub('收到，我先小仓位', { self: 1, meta: '21:55' }), { self: 1, state: 'read' }),
  ].join('')}</div>
  <div class="r-lv__chatfoot"><div class="r-input"><span class="ph">说点什么…</span></div>${ibtn('emoji', '表情')}${ibtn('asset', '资产：转账 / 收款 / 红包', 'is-asset')}</div></aside>`;

const lvBar = (o = {}) => `<footer class="r-lv__bar"><div class="r-lv__input">发条弹幕…${ibtn('emoji', '表情')}</div>${btn('发送', 'default')}<span class="sp"></span>
  ${o.host ? '' : btn('举手上麦', 'default', { icon: 'hand' })}${btn('点赞', 'default', { icon: 'like', cls: 'is-like' })}${o.host ? btn('结束直播', 'danger-solid') : ''}${btn('退出直播间', 'default')}</footer>`;

const livePC = (o = {}) => `<div class="r-scope" data-theme="dark" style="height:100%"><div class="r-lv">${lvTop(o)}
  <div class="r-lv__body"><div class="r-lv__main is-share${o.side ? ' is-side' : ''}${o.host ? ' has-artc' : ''}">${slide()}
    ${o.host ? `<span class="r-lv__sharetag">${ic('screen-share')}共享中：已暂停你的摄像头画面，带宽全部留给共享内容（声音不受影响）</span>` : `<span class="r-lv__sharetag">${ic('screen-share')}老王 正在共享窗口</span>`}
    <div class="r-lv__tiles">${tile('老王', 2, { talk: 1, c1: '#5A3A2A', c2: '#2A2226' })}${tile('阿杰', 2, { mute: 1, voice: 1, c1: '#263330', c2: '#1A2224' })}</div>
    ${danmaku()}${likes()}${o.host ? artc() : player()}</div>
    ${o.side ? (o.online ? sideOnline() : sideCtl()) : ''}${o.chat ? chatDrawer() : ''}</div>
  ${lvBar(o)}</div></div>`;
reg('live-pc-host', () => livePC({ host: 1, side: 1 }));
reg('live-pc-viewer', () => livePC({}));
const panel = (html, cls) => `<div class="r-lv r-lvpanel">${html.replace(`class="${cls}"`, `class="${cls}" style="width:100%"`)}</div>`;
reg('live-side', () => `<div class="r-scope r-lvsides" data-theme="dark">${panel(sideCtl(), 'r-lv__side')}${panel(sideOnline(), 'r-lv__side')}${panel(chatDrawer(), 'r-lv__drawer')}</div>`);

/* 等待 / 准备开播 / 已结束 / 结束确认 */
const lvStates = (n = 4) => `<div class="r-scope r-lvstates${n === 3 ? ' is-3' : ''}" data-theme="dark">
  <div><div class="r-lvstate"><div class="r-lv__overlay"><div><small style="margin:0 0 6px">距离开播</small><b>14:36</b><small>主讲人尚未开播，直播即将开始…</small></div></div></div><div class="r-cap">观众 · 等待开播（倒计时）</div></div>
  <div><div class="r-lvstate"><div class="r-lv__overlay"><div><b style="font-size:20px;font-weight:500">你是本场主讲人，准备好后点击开播</b>${btn('立即开播', 'primary', { size: 'lg' })}<small>可连线直播 · 开播后模式不可更改</small></div></div></div><div class="r-cap">主讲人 · 进入直播间后</div></div>
  <div><div class="r-lvstate"><div class="r-lv__overlay" style="bottom:56px"><div><b style="font-size:28px">直播结束</b><small>时长 72 分钟 · 峰值 348 · 点赞 2.3万</small></div></div><div class="r-lv__bar is-ended" style="position:absolute;left:0;right:0;bottom:0;height:56px">本场直播已结束${btn('返回', 'primary', { size: 'sm' })}</div></div><div class="r-cap">直播结束（底栏替换为返回）</div></div>
${n === 4 ? `  <div><div class="r-lvstate is-modal"><div class="r-modal r-endmodal"><div class="r-endmodal__b"><span class="ico">${ic('alert')}</span><b>结束本场直播？</b><p>结束后观众将无法继续观看，本场时长、观看人次与点赞数据将归档到历史场次。此操作不可撤销。</p></div><div class="r-modal__foot">${btn('继续直播', 'default')}${btn('结束直播', 'danger-solid')}</div></div></div><div class="r-cap">主讲人 · 结束确认</div></div>` : ''}</div>`;
reg('live-states', () => lvStates(4));
reg('live-states-3', () => lvStates(3));

/* 发起群直播 LiveCreateModal（跟随白天 / 黑夜） */
const choice = (t, d, on) => `<div class="r-choice${on ? ' is-on' : ''}"><span class="r-radio${on ? ' is-on' : ''}"></span><b>${t}</b><small>${d}</small></div>`;
reg('live-create', () => `<div class="r-scope r-modalstage"><div class="r-modal" style="width:520px"><div class="r-modal__head">发起群直播${ibtn('close', '关闭')}</div><div class="r-modal__body r-form">
  <div class="r-field"><label>直播主题</label><div class="r-input is-focus"><span>老王的 AMA · 新合约迁移</span></div></div>
  <div class="r-field"><label>直播介绍</label><div class="r-input is-area"><span class="ph">简要介绍本场直播内容（选填）</span></div></div>
  <div class="r-field"><label>主讲人</label><div class="r-input">${av('老', 2, { size: 'xs' })}<span>老王</span><span style="margin-left:auto">${ic('chevron-down')}</span></div><div class="r-help">主讲人可以是群内任何成员（含自己），其进入直播间后可点击「立即开播」</div></div>
  <div class="r-field"><label>直播模式</label><div class="r-choices">${choice('一人直播', '仅主播出镜，本场不可连麦，最省流量')}${choice('可连线直播', '支持举手连麦（最多约4人），本场锁定', 1)}</div><div class="r-help">开播后模式不可更改</div></div>
  <div class="r-field"><label>开播时间</label><div class="r-choices">${choice('立即', '创建后马上进直播间')}${choice('预约', '指定时间，群内发预告', 1)}</div><div class="r-input">${ic('clock')}<span class="r-num">2026-09-25 22:00</span></div></div>
  <div class="r-help" style="display:flex;gap:6px;align-items:center">${ic('info')}群直播仅本群成员可见，卡片不可转发</div></div>
  <div class="r-modal__foot">${btn('取消', 'default')}${btn('预约直播', 'primary')}</div></div></div>`);

/* H5 直播（观众） */
reg('live-h5', () => `<div class="r-phone r-scope" data-theme="dark"><div class="r-phone__scr" style="background:#0B0D10">${sbar.replace('r-phone__sb"', 'r-phone__sb" style="background:#0B0D10"')}
  <div class="r-lvm"><div class="r-lvm__top">${ibtn('chevron-left', '返回')}${av('老', 2, { size: 'md', live: 1 })}${lvMeta({ title: '老王的 AMA', mode: false, elapsed: false })}
    <div class="r-lvm__acts">${lvToggle('nav-chat', '群聊', { badge: 8 })}</div></div>
  <div class="r-lvm__stage"><div class="r-lvm__cam">${av('老', 2)}</div>${danmaku(DM.slice(1))}${likes()}${player()}</div>
  <div class="r-lvm__bar"><div class="r-lv__input">发条弹幕…${ibtn('emoji', '表情')}</div>${btn('发送', 'default')}${btn('举手上麦', 'default')}${btn('点赞', 'default', { icon: 'like', cls: 'is-like' })}<span class="sp"></span>${btn('退出直播间', 'default')}</div></div></div></div>`);

/* ═════════ 客服（跟随白天 / 黑夜） ═════════ */
const NAV_AGENT = [...NAV, ['nav-workbench', '工作台'], ['nav-admin', '管理']];
const navBarA = active => `<nav class="r-nav">${av('K', 1, { size: 'md', online: true })}${NAV_AGENT.map(([n, t, b]) => navItem(n, t, b, t === active)).join('')}</nav>`;
const csNav = (brand, items, on) => `<aside class="r-cs__nav"><div class="r-cs__brand"><span class="ico">${ic(brand[0])}</span>${brand[1]}</div>${items.map(([i, t, b]) => i === '-' ? '<div class="r-cs__sep"></div>' : `<div class="r-cs__item${t === on ? ' is-on' : ''}">${ic(i)}${t}${b ? badge(b) : ''}</div>`).join('')}</aside>`;
const WB = [['nav-chat', '接待', 6], ['nav-tickets', '我的工单', 5], ['nav-contacts', '服务客户'], ['folder', '知识库'], ['reply', '个人常用语'], ['-'], ['bell', '消息治理']];
const MG = [['nav-workbench', '看板'], ['nav-chat', '会话监控', 21], ['nav-contacts', '团队'], ['settings', '团队配置'], ['folder', '知识审核', 2], ['reply', '团队常用语'], ['security', '治理与质检'], ['history', '操作审计']];
const csShell = (active, nav, main) => `<div class="r-app r-scope">${topBar()}${navBarA(active)}<div class="r-main"><div class="r-cs">${nav}<section class="r-cs__main">${main}</section></div></div></div>`;
const status = on => `<div class="r-cs-status" role="radiogroup" aria-label="接待状态">${[['online', '在线接待'], ['busy', '忙碌'], ['away', '小休'], ['', '下线']].map(([c, t]) => `<span class="${t === on ? 'is-on' : ''}"><i class="r-cs-dot ${c}"></i>${t}</span>`).join('')}</div>`;
const stat = (i, v, l, cls = '') => `<div class="r-stat ${cls}"><span class="ico">${ic(i)}</span><div style="min-width:0"><b>${v}</b><small>${l}</small></div></div>`;
const src = t => `<span class="r-src">${t}</span>`;
const qrow = (a, name, s, sub, wait, acts, late) => `<div class="r-qrow${late ? ' is-late' : ''}">${a}<div class="who" style="min-width:0"><b>${name}${s ? src(s) : ''}</b><small>${sub}</small></div><div class="acts">${wait ? `<span class="wait">${wait}</span>` : ''}${acts}</div></div>`;
const box = (head, body, cls = '') => `<div class="r-box ${cls}"><div class="r-box__h">${head}</div>${body}</div>`;

const QUEUE = [
  [av('访', 4, { size: 'md' }), '访客 #2291', '手机网页版', '提现 200 USDT 三小时还没到账', '已等待 2 分 14 秒', 1],
  [av('阿', 2, { size: 'md' }), '阿杰', '电脑桌面端', '红包领了，余额没变化', '已等待 1 分 05 秒', 1],
  [av('L', 4, { size: 'md' }), 'Leo', 'iOS端', '新手机上怎么用 Passkey 登录', '已等待 36 秒'],
  [av('S', 5, { size: 'md' }), 'Sophia', '电脑网页版', '兑换报价一直在刷新', '已等待 12 秒'],
];
const reception = () => csShell('工作台', csNav(['nav-workbench', '客服工作台'], WB, '接待'), `
  <header class="r-cs__head"><h3>接待</h3><span class="cap">接待 3/6 · 技能：钱包、充提</span>${status('在线接待')}${ibtn('info', '查看工作台使用引导')}</header>
  <div class="r-cs__body">
    <div class="r-stats">${stat('clock', '4', '排队等待', 'is-key is-hot')}${stat('nav-chat', '3 / 6', '接待中会话')}${stat('request', '2', '待跟进留言')}${stat('nav-tickets', '5', '待处理工单')}</div>
    <div class="r-cols2">
      ${box(`排队等待 <small style="display:inline-flex;align-items:center;gap:5px">${dot('wt-dot--sm is-live')}实时监听中</small>${btn('接入最早排队', 'primary', { size: 'sm' })}`, QUEUE.map(([a, n, s, sub, w, late]) => qrow(a, n, s, sub, w, btn('接入', 'default', { size: 'sm' }), late)).join(''))}
      ${box(`我的接待 <small>3 / 6</small>`, [
        [av('林', 5, { size: 'md', online: 1 }), '林总', '手机App', '好的，我截图给你', '服务中 12 分钟'],
        [av('M', 5, { size: 'md', online: 1 }), '阿May', '电脑桌面端', '授权撤销以后还要再授权吗？', '服务中 5 分钟'],
        [av('B', 3, { size: 'md', online: 'off' }), 'Ben', '安卓端', '[图片]', '服务中 1 分钟'],
      ].map(([a, n, s, sub, w]) => qrow(a, n, s, sub, w, `${btn('进入', 'default', { size: 'sm' })}${ibtn('forward', '转接')}${ibtn('more', '结束会话 · 备注 · 客户画像')}`)).join(''))}
    </div>
    ${box(`待跟进留言 <small>非工作时间或排队放弃的客户会留言</small>`, [
      [av('K', 3, { size: 'md' }), 'Kris', '安卓端', '钱包备份以后换手机，怎么恢复？', '昨天 22:14'],
      [av('访', 6, { size: 'md' }), '访客 #2280', '手机网页版', '排队太久先走了，麻烦回电', '昨天 21:40'],
    ].map(([a, n, s, sub, w]) => qrow(a, n, s, sub, w, btn('接入', 'default', { size: 'sm' }))).join(''))}
  </div>`);
reg('cs-reception', reception);

reg('cs-offline', () => `<div class="r-scope r-hero-off"><b>开始今天的接待工作</b><p>点击「立即上线」后系统会把新咨询自动分配给你；排队和留言接入后进入「我的接待」，在聊天窗口回复客户即可。</p>
  <div class="r-flow">${[['上线', '切换为在线状态'], ['接入', '接排队 / 接留言'], ['服务', '聊天窗口回复客户'], ['结束沉淀', '小结 / 备注 / 转工单']].map(([t, d], i) => `<div><i>${i + 1}</i><b>${t}</b><small>${d}</small></div>`).join('')}</div>
  <div style="display:flex;gap:8px;flex-wrap:wrap">${btn('立即上线', 'primary')}${btn('查看工作台使用引导', 'text')}</div></div>`);
reg('cs-status', () => `<div class="r-scope" style="display:grid;gap:12px;justify-items:start">${status('在线接待')}<div class="r-stats" style="width:100%">${stat('clock', '4', '排队等待', 'is-key is-hot')}${stat('nav-chat', '3 / 6', '接待中会话')}${stat('request', '2', '待跟进留言')}</div>
  <div class="r-row" style="gap:16px"><span class="r-load"><i><span style="width:50%"></span></i>接待 3/6</span><span class="r-load is-high"><i><span style="width:83%"></span></i>接待 5/6</span><span class="r-load is-full"><i><span style="width:100%"></span></i>已满负荷</span></div></div>`);

/* 工单 CSTicketPanel */
const prio = p => `<span class="r-prio ${{ 紧急: 'urgent', 高: 'high', 普通: 'normal', 低: 'low' }[p]}">${p}</span>`;
const tst = s => s === '处理中' ? `<span class="r-tag r-tag--brand">${dot('wt-dot--sm is-live')}处理中</span>` : s === '已解决' ? '<span class="r-tag r-tag--success">已解决</span>' : s === '已关闭' ? '<span class="r-tag" style="color:var(--wt-text-3)">已关闭</span>' : '<span class="r-tag">待处理</span>';
const TICKETS = [
  ['提现 200 USDT 三小时未到账', 'TK-20260921-0042', '紧急', '处理中', ['阿', 2, '阿杰'], '<span class="r-sla is-soon">SLA 截止 22:30</span>', '21:10', 1],
  ['红包领取后余额没有变化', 'TK-20260921-0041', '高', '待处理', ['K', 3, 'Kris'], '<span class="r-sla is-over">已超时 12 分钟</span>', '20:58'],
  ['新手机无法用 Passkey 登录', 'TK-20260921-0039', '普通', '待处理', ['L', 4, 'Leo'], '<span class="r-sla">SLA 截止 明天 10:00</span>', '19:40'],
  ['兑换报价与成交价不一致', 'TK-20260920-0035', '普通', '处理中', ['S', 5, 'Sophia'], '<span class="r-sla">SLA 截止 明天 18:00</span>', '昨天'],
  ['申请导出交易记录', 'TK-20260920-0031', '低', '待处理', ['林', 5, '林总'], '<span class="r-sla">—</span>', '昨天', 0, 1],
  ['群直播无法开播', 'TK-20260919-0028', '高', '已解决', ['老', 2, '老王'], '<span class="r-sla">—</span>', '09/19'],
  ['地址簿同步异常', 'TK-20260918-0022', '低', '已关闭', ['M', 5, '阿May'], '<span class="r-sla">—</span>', '09/18'],
];
const ticketTable = () => `<table class="r-tk"><thead><tr><th>工单</th><th>优先级</th><th>状态</th><th>客户</th><th>SLA</th><th>更新</th><th></th></tr></thead><tbody>${TICKETS.map(([t, id, p, s, [a, c, n], sla, up, sel, claim]) =>
  `<tr class="${sel ? 'is-sel' : ''}"><td class="t"><b>${t}</b><small>${id}</small></td><td>${prio(p)}</td><td>${tst(s)}</td><td><span style="display:inline-flex;align-items:center;gap:8px">${av(a, c, { size: 'xs' })}${n}</span></td><td>${sla}</td><td style="color:var(--wt-text-3)">${up}</td><td>${claim ? btn('接单', 'primary', { size: 'sm' }) : ''}</td></tr>`).join('')}</tbody></table>`;
const ticketDrawer = () => `<aside class="r-tdrawer"><div class="r-tdrawer__h"><div class="top">${prio('紧急')}${tst('处理中')}${ibtn('close', '关闭')}</div><b>提现 200 USDT 三小时未到账</b><small>TK-20260921-0042</small></div>
  <div class="r-tdrawer__kv"><span>客户</span><span style="display:flex;align-items:center;gap:6px">${av('阿', 2, { size: 'xs' })}阿杰 ${src('电脑桌面端')}</span><span>指派给</span><span>我（Kevin）</span><span>SLA 截止</span><span class="r-sla is-soon">今天 22:30 · 剩 44 分钟</span><span>关联会话</span><span><a class="r-link">打开来源会话</a></span><span>附件</span><span><span class="r-att">${ic('image')}提现记录截图.png<small style="color:var(--wt-text-3)">214 KB</small></span></span></div>
  <div class="r-tdrawer__body"><p>21:00 从资金账户提现 200 USDT 到 <span class="r-mono">0x3b8e…09e1</span>（BSC），页面显示成功，链上查不到。</p>
    <div class="r-lv__sec" style="padding:4px 0 0">处理记录</div>
    <div class="r-tl"><div><i class="is-on"></i><div><b>回复</b><small>Kevin · 21:10</small><p>已提交链上查询，预计 30 分钟内给你结果。</p></div></div><div><i></i><div><b>受理</b><small>Kevin · 21:05</small></div></div><div><i></i><div><b>创建工单</b><small>会话转工单 · 阿杰 · 21:02</small></div></div></div></div>
  <div class="r-tdrawer__foot"><div class="r-input"><span class="ph">输入处理回复/备注</span></div><div class="row">${btn('关闭', 'default')}<span style="flex:1"></span>${btn('回复', 'default')}${btn('标记解决', 'primary')}</div></div></aside>`;
reg('cs-tickets', () => csShell('工作台', csNav(['nav-workbench', '客服工作台'], WB, '我的工单'), `
  <header class="r-cs__head"><h3>我的工单</h3><span class="r-seg"><span>全部工单</span><span class="is-on">指派给我 5</span><span>待认领 3</span></span><span class="r-select">${ic('filter')}按状态筛选：全部${ic('chevron-down')}</span></header>
  <div class="r-cs__body"><div class="r-box" style="overflow-x:auto">${ticketTable()}</div></div><div class="r-mask"></div>${ticketDrawer()}`));
reg('cs-ticket-table', () => `<div class="r-scope r-box" style="overflow-x:auto">${ticketTable()}</div>`);
reg('cs-ticket-drawer', () => `<div class="r-scope" style="position:relative;height:720px;border-radius:14px;overflow:hidden;background:var(--wt-bg-chat)">${ticketDrawer().replace('class="r-tdrawer"', 'class="r-tdrawer" style="width:100%"')}</div>`);
reg('cs-prio', () => `<div class="r-scope r-row">${['紧急', '高', '普通', '低'].map(prio).join('')}<span style="width:12px"></span>${['待处理', '处理中', '已解决', '已关闭'].map(tst).join('')}<span style="width:12px"></span><span class="r-sla">SLA 截止 明天 10:00</span><span class="r-sla is-soon">SLA 截止 22:30</span><span class="r-sla is-over">已超时 12 分钟</span></div>`);

/* 管理控制台 CSManagerConsole */
const AGENTS = [
  ['艾', 4, '小艾', 'online', '在线接待', 5, 6, '16 秒'],
  ['诚', 3, '阿诚', 'online', '在线接待', 6, 6, '22 秒'],
  ['雨', 6, '小雨', 'busy', '忙碌', 3, 5, '31 秒'],
  ['白', 2, '大白', 'away', '小休 · 午饭', 0, 6, '—'],
  ['K', 1, 'Kevin（我）', '', '下线', 0, 6, '—'],
];
const loadBar = (n, m) => `<span class="r-load${n >= m ? ' is-full' : n / m >= .8 ? ' is-high' : ''}"><i><span style="width:${Math.round(n / m * 100)}%"></span></i>${n >= m ? '已满负荷' : `接待 ${n}/${m}`}</span>`;
reg('cs-manage', () => csShell('管理', csNav(['nav-admin', '客服管理'], MG, '看板'), `
  <header class="r-cs__head"><h3>实时概况</h3><span class="cap">每 10 秒自动刷新 · 21:46:10</span>${ibtn('refresh', '刷新')}<span class="cap" style="margin-left:8px">我的接单状态</span>${status('下线')}</header>
  <div class="r-cs__body">
    <div class="r-stats">${stat('nav-contacts', '8 / 12', '在线坐席', 'is-key')}${stat('clock', '4', '排队中', 'is-key is-hot')}${stat('nav-chat', '21', '接待中')}${stat('history', '18 秒', '平均首响')}${stat('star', '97.6%', '满意度')}${stat('nav-tickets', '12', '待处理工单')}</div>
    <div class="r-cols2" style="grid-template-columns:minmax(0,1.3fr) minmax(0,1fr)"><div style="display:grid;gap:14px;align-content:start">
      ${box('坐席实时看板 <small>8 人在线</small>', `<table class="r-tk"><thead><tr><th>坐席</th><th>状态</th><th>接待</th><th>平均首响</th></tr></thead><tbody>${AGENTS.map(([a, c, n, d, s, l, m, fr]) => `<tr><td><span style="display:inline-flex;align-items:center;gap:8px">${av(a, c, { size: 'xs' })}${n}</span></td><td><span style="display:inline-flex;align-items:center;gap:6px"><i class="r-cs-dot ${d}"></i>${s}</span></td><td>${loadBar(l, m)}</td><td class="r-num" style="color:var(--wt-text-2)">${fr}</td></tr>`).join('')}</tbody></table>`)}
      ${box('团队配置 <small>分配与作息</small>' + btn('保存', 'default', { size: 'sm' }), `<div class="r-setrow">分配规则<span class="r-rule" style="margin-left:auto"><span>轮流</span><span class="is-on">最少接待</span><span>技能优先</span></span></div><div class="r-setrow">无坐席 AI 兜底<span class="r-switch is-on"></span></div><div class="r-setrow">作息（工作时间）<span class="v">09:00 – 21:00</span><span class="r-switch is-on" style="margin-left:12px"></span></div>`)}
    </div><div style="display:grid;gap:14px;align-content:start">
      ${box('实时排队 <small>4 人</small>', QUEUE.slice(0, 3).map(([a, n, s, sub, w, late]) => qrow(a, n, s, sub, w, btn('指派', 'default', { size: 'sm' }), late)).join(''))}
      ${box('实时对话 <small>21 个进行中</small>', [['艾', 4, '小艾 → 阿杰', '提现 200 USDT 三小时未到账', '服务中 12 分钟'], ['诚', 3, '阿诚 → 林总', '授权撤销以后还要再授权吗', '服务中 8 分钟'], ['月', 5, '月月 → Ben', '[图片]', '服务中 1 分钟']].map(([a, c, n, sub, w]) => qrow(av(a, c, { size: 'md' }), n, '', `${sub} · ${w}`, '', `${btn('主管介入', 'default', { size: 'sm' })}${btn('强制转接', 'text', { size: 'sm' })}`)).join(''))}
    </div></div>
  </div>`));

/* 访客咨询 CSVisitorPanel（H5） */
const mHead = (t, s) => `<header class="r-m-head">${ibtn('chevron-left', '返回')}<div class="t"><b>${t}</b>${s ? `<span>${s}</span>` : ''}</div>${ibtn('more', '更多')}</header>`;
const phone = (inner, bg = 'var(--wt-bg-chat)') => `<div class="r-phone r-scope"><div class="r-phone__scr" style="background:${bg}">${sbar.replace('r-phone__sb"', 'r-phone__sb" style="background:var(--wt-bg-panel)"')}${inner}</div></div>`;
const faq = (open, n = 4) => `<div class="r-faq">${[['提现多久到账？', '链上提现一般 1–5 分钟到账，BSC 高峰期可能延迟到 30 分钟。超过 1 小时未到账，请发起咨询并附上交易哈希。'], ['新手机上怎么用 Passkey 登录？'], ['红包没领完会退回吗？'], ['兑换的手续费怎么算？']].slice(0, n).map(([q, a], i) => `<div><b>${q}${ic(open && i === 0 ? 'chevron-down' : 'chevron-right')}</b>${open && i === 0 ? `<p>${a}</p><div class="fb">${btn('有帮助', 'default', { size: 'sm' })}${btn('没帮助', 'default', { size: 'sm' })}${btn('仍需人工客服', 'text', { size: 'sm' })}</div>` : ''}</div>`).join('')}</div>`;
const secT = t => `<div class="r-m-sect">${t}</div>`;
const entry = () => phone(`${mHead('在线客服')}<div class="r-m-body"><div class="r-m-pad">
    <div class="r-cv-entry"><b>${ic('nav-cs')}在线客服</b><p>工作日 09:00-21:00 为你服务，其余时段可留言</p><div class="row">${btn('发起咨询', 'primary')}${btn('留言', 'default')}</div></div>
    ${secT('热门问题')}${faq(1, 3)}
    ${secT('历史咨询')}<div class="r-faq"><div class="r-cvh"><b>提现到账延迟</b><small>09/20 · 已结束</small><span class="st">${btn('评价', 'default', { size: 'sm' })}</span></div><div class="r-cvh"><b>钱包备份后怎么换手机</b><small>09/12 · 留言待跟进</small><span class="st">${btn('继续咨询', 'default', { size: 'sm' })}</span></div></div>
  </div></div>`);
const queue = () => phone(`${mHead('在线客服')}<div class="r-m-body"><div class="r-m-pad">
    <div class="r-cv-queue"><span class="pos">3${dot('is-live')}</span><b>正在排队</b><small>当前位次 3 · 队列共 9 人</small><small>坐席繁忙，请稍候，接入后将自动进入对话</small>${btn('取消排队', 'default', { size: 'sm' })}</div>
    ${secT('热门问题')}${faq(0)}
  </div></div>`);
const stars = () => `<div class="r-stars">${[1, 2, 3, 4, 5].map(n => `<span class="${n <= 4 ? 'on' : ''}">${ic('star')}</span>`).join('')}</div>`;
const csCard = (t, b, extra = '') => `<div class="r-csmsg"><div class="r-csmsg__h"><span class="bar"></span>${t}</div><div class="r-csmsg__b">${b}</div>${extra}</div>`;
const active = () => phone(`${mHead('小艾', '咨询进行中')}<div class="r-m-body"><div class="r-msgs">
    <div class="r-cssys">客服 小艾 已接入，为你服务</div>
    ${msg(bub('提现 200 USDT 三小时还没到账', { self: 1, meta: '21:02' }), { self: 1, state: 'read' })}
    ${msg(bub('收到，我帮你查一下链上记录，请稍等。', { meta: '21:03' }), { a: ['艾', 4], nick: '小艾' })}
    ${msg(csCard('已为你创建工单', '提现 200 USDT 三小时未到账 · 处理中。处理结果会在这里通知你。'), { a: ['艾', 4], cont: 1 })}
    ${msg(bub('收到了，谢谢', { self: 1, meta: '21:31' }), { self: 1, state: 'read' })}
    <div class="r-cssys">本次咨询已结束</div>
    ${msg(csCard('请为本次服务评价', '你的评价会帮助我们做得更好', stars()), { a: ['艾', 4] })}
  </div></div><div class="r-m-foot">${ibtn('mic', '语音')}<div class="in">说点什么…</div>${ibtn('emoji', '表情')}${ibtn('plus', '更多')}</div>`);
reg('cs-visitor-entry', entry); reg('cs-visitor-queue', queue); reg('cs-visitor-chat', active);

/* 聊天里的客服消息 CSMessageRender + 坐席工具 SendActionBar */
reg('cs-msgs', () => `<div class="r-scope r-chatbg" style="display:flex;flex-direction:column">
  <div class="r-cssys">客服 小艾 已接入，为你服务</div>
  ${msg(csCard('已为你创建工单', '提现 200 USDT 三小时未到账 · 处理中。处理结果会在这里通知你。'), { a: ['艾', 4], nick: '工单通知' })}
  ${msg(csCard('请为本次服务评价', '你的评价会帮助我们做得更好', stars()), { a: ['艾', 4], nick: '邀请评价（悬停 4 星）' })}
  ${msg(csCard('请为本次服务评价', '你的评价会帮助我们做得更好', '<div class="thanks">感谢您的评价</div>'), { a: ['艾', 4], nick: '评价后' })}
  <div class="r-cssys">本次咨询已结束</div></div>`);
reg('cs-tools', () => `<div class="r-scope r-cstools">
  <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:12px;align-content:start"><div class="r-toolcard"><div class="r-foot__tools">${ibtn('mic', '语音')}${ibtn('emoji', '表情')}${ibtn('image', '图片')}${ibtn('file', '文件')}<span class="sep"></span>${ibtn('asset', '资产', 'is-asset')}<span class="sep"></span>${ibtn('reply', '快捷回复')}${ibtn('folder', '知识库', 'is-on')}${ibtn('nav-tickets', '转工单')}</div></div>
    <div class="r-agentpop"><div class="r-agentpop__h">知识库</div><div class="r-input">${ic('search')}<span class="ph">搜索知识库</span></div>${[['提现多久到账？', '链上提现一般 1–5 分钟到账，BSC 高峰期可能延迟到 30 分钟。超过 1 小时未到账，请提供交易哈希。'], ['红包没领完会退回吗？', '24 小时内未领完的金额会原路退回发红包的人，退回后会有一条系统通知。'], ['怎么撤销代币授权？', '钱包 → 授权管理，找到对应合约点「撤销授权」，需要支付少量网络费用。']].map(([t, d]) => `<div class="r-kb"><b>${t}</b><small>${d}</small>${btn('发送', 'default', { size: 'sm' })}</div>`).join('')}</div></div>
  <div class="r-agentpop" style="align-self:start"><div class="r-agentpop__h">快捷回复</div>${[['默认分组', ['您好，我是客服小艾，很高兴为您服务。', '请提供一下交易哈希，我帮您查询。', '问题已处理，您刷新一下钱包看看。']], ['充提', ['链上确认需要 1–5 分钟，请稍等。', '提现地址请务必选择 BSC 网络。']]].map(([g, list]) => `<div class="r-qr-g">${g}</div>${list.map(t => `<div class="r-qr">${t}</div>`).join('')}`).join('')}</div>
  <div class="r-modal" style="align-self:start"><div class="r-modal__head">会话转工单${ibtn('close', '关闭')}</div><div class="r-modal__body r-form">
    <div class="r-field"><label>标题</label><div class="r-input is-focus"><span>提现 200 USDT 三小时未到账</span></div></div>
    <div class="r-field"><label>描述</label><div class="r-input is-area"><span class="ph">补充问题细节（可选）</span></div></div>
    <div class="r-field"><label>优先级</label><span class="r-seg"><span>低</span><span>普通</span><span>高</span><span class="is-on">紧急</span></span></div>
    <div class="r-field"><label>附件</label><span class="r-att" style="justify-self:start">${ic('plus')}添加附件</span><div class="r-help">仅支持图片/文档/ZIP，且单个不超过 10MB</div></div></div>
    <div class="r-modal__foot">${btn('取消', 'default')}${btn('提交', 'primary')}</div></div></div>`);

/* ═════════ 个人设置 · 外观（拍板：跟随系统 + 设置里可切） ═════════ */
const chk = (t, on) => `<span class="r-chkopt"><span class="r-check${on ? ' is-on' : ''}">${on ? ic('check') : ''}</span>${t}</span>`;
reg('setting-appearance', () => `<div class="r-scope r-setpanel"><div class="r-setpanel__h">账号设置${ibtn('close', '关闭')}</div><div class="r-setpanel__b">
  <div class="r-setpanel__t">个人设置</div>
  <div class="r-setpanel__g"><b>选择语言</b><div>${chk('简体中文', 1)}${chk('English')}</div></div>
  <div class="r-setpanel__g"><b>外观<span class="r-tag r-tag--brand" style="height:18px;font-size:11px">新增</span></b><div>${chk('跟随系统', 1)}${chk('白天')}${chk('黑夜')}</div><small>跟随系统时，电脑或手机切换深色模式，界面自动跟着变</small></div>
  <div class="r-setpanel__g"><b>点击关闭按钮时的事件<small>仅桌面端</small></b><div>${chk('退出应用')}${chk('最小化托盘', 1)}</div></div></div>
  <div class="r-setpanel__div"></div>
  <div class="r-setpanel__b"><div class="r-setpanel__sw"><div><b>允许陌生人发一条消息</b><small>开启后，还不是好友的人最多只能给你发 1 条消息；关闭后，陌生人无法给你发任何消息</small></div><span class="r-switch is-on"></span></div></div></div>`);

/* 渲染新增的项 */
document.querySelectorAll('[data-r]').forEach(el => { if (NEW.includes(el.dataset.r)) el.innerHTML = R[el.dataset.r](); });
wire(document); fitFrames();
})();
