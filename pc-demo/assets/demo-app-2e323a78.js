import{d as $}from"./walletalk-tokens-3761ee8e.js";const u="imim-dapps",v={official:"官方",trading:"交易",cex:"中心化交易所",prediction:"预测市场",commerce:"链上商城",defi:"DeFi",gamefi:"游戏 / NFT",tools:"工具"},M={"identity.read":"读取个人资料","wallet.accounts":"读取钱包地址","wallet.sign":"请求签名","wallet.transaction":"请求交易",share:"分享卡片",storage:"应用存储",notifications:"订阅通知",ui:"界面能力","cex.read":"读取交易所资产","cex.trade":"交易所下单"},c=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),E={info:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/>',share:'<path d="M14.5 6.5l5 4.5-5 4.5"/><path d="M19.5 11h-9a6 6 0 0 0-6 6v1.5"/>',bell:'<path d="M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5h-14z"/><path d="M10.3 20a1.9 1.9 0 0 0 3.4 0"/>',user:'<circle cx="12" cy="8.5" r="3.5"/><path d="M5 19.5c1.2-3.3 3.8-5 7-5s5.8 1.7 7 5"/>',chat:'<path d="M20 13.5a3.5 3.5 0 0 1-3.5 3.5H10l-4.5 3v-3.2A3.5 3.5 0 0 1 4 13.5v-6A3.5 3.5 0 0 1 7.5 4h9A3.5 3.5 0 0 1 20 7.5z"/>'},w=t=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${E[t]}</svg>`,k=new URLSearchParams(location.search),i=$(k.get("app")??""),f=document.getElementById("app"),y=window.parent!==window;let r="",d=[];function x(){if(!i){f.innerHTML='<main class="ma"><section class="ma-card"><p>没有找到这个样例应用。</p></section></main>';return}const t=new URL(i.officialUrl).host;f.innerHTML=`
<main class="ma">
  <header class="ma-hero">
    <img class="ma-icon" src="${c(i.iconUrl)}" alt="" width="64" height="64" />
    <div class="ma-hero__text">
      <h1>${c(i.name)}</h1>
      <p>${c(i.description)}</p>
      <div class="ma-tags">
        <span class="ma-tag">${c(v[i.category]??i.category)}</span>
        <span class="ma-tag ma-tag--brand">样例应用</span>
      </div>
    </div>
  </header>

  <section class="ma-note">
    ${w("info")}
    <p>这是演示环境里的占位页。正式上架后，这里加载开发者登记的入口地址 <b>${c(t)}</b>，页面由开发者提供。</p>
  </section>

  <section class="ma-card">
    <h2>主要功能</h2>
    <ol class="ma-feats">${i.highlights.map(e=>`<li>${c(e)}</li>`).join("")}</ol>
  </section>

  <section class="ma-card">
    <h2>容器能力演示</h2>
    <p class="ma-status" id="status"></p>
    <div class="ma-actions" id="actions"></div>
    <ul class="ma-log" id="log" aria-live="polite"></ul>
  </section>
</main>`,p()}function p(){const t=document.getElementById("status"),e=document.getElementById("actions");if(!t||!e||!i)return;if(!y)t.innerHTML='<span class="ma-dot is-off"></span>没有在 Walletalk 小程序容器里打开';else if(!r)t.innerHTML='<span class="ma-dot"></span>正在连接 Walletalk…';else{const a=d.map(s=>M[s]??s);t.innerHTML=`<span class="ma-dot is-live"></span>已连接 Walletalk · 已授权：${c(a.join("、")||"无")}`}const n=a=>!!r&&d.includes(a),o=[{label:"分享到会话",icon:"share",method:"share",params:{path:""},enabled:n("share")},{label:"轻提示",icon:"bell",method:"ui.toast",params:{message:`来自「${i.name}」的提示`},enabled:n("ui")},{label:"读取我的资料",icon:"user",method:"identity.get",enabled:n("identity.read")},{label:"回到聊天",icon:"chat",method:"openIM",enabled:!!r}];e.innerHTML=o.map((a,s)=>`<button type="button" class="ma-btn" data-index="${s}" ${a.enabled?"":"disabled"}>${w(a.icon)}${c(a.label)}</button>`).join(""),e.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{const s=o[Number(a.dataset.index)];L(s.method,s.params).then(l=>h(`${s.label}：${I(l)}`),l=>h(`${s.label}：${l.message}`,!0))})})}function I(t){if(t&&typeof t=="object"){const e=t;if(typeof e.nickname=="string")return`${e.nickname}（ID ${String(e.userId??"")}）`;if(e.opened)return"已打开会话选择"}return"完成"}function h(t,e=!1){var a;const n=document.getElementById("log");if(!n)return;const o=document.createElement("li");for(e&&(o.className="is-error"),o.textContent=t,n.prepend(o);n.children.length>4;)(a=n.lastElementChild)==null||a.remove()}const m=new Map;let g=Promise.resolve();function L(t,e){const n=()=>new Promise((a,s)=>{if(!r){s(new Error("没有连接到 Walletalk"));return}const l=crypto.randomUUID(),b=window.setTimeout(()=>{m.delete(l),s(new Error("请求超时"))},3e4);m.set(l,{resolve:a,reject:s,timer:b}),window.parent.postMessage({channel:u,type:"request",id:l,method:t,params:e},r)}),o=g.then(n,n);return g=o.catch(()=>{}),o}window.addEventListener("message",t=>{if(t.source!==window.parent)return;const e=t.data;if(!(!e||typeof e!="object"||e.channel!==u)){if(e.type==="connect"){r=t.origin,d=Array.isArray(e.permissions)?e.permissions:[],p();return}if(t.origin===r)if(e.type==="response"&&typeof e.id=="string"){const n=m.get(e.id);if(!n)return;m.delete(e.id),window.clearTimeout(n.timer);const o=e.error;o?n.reject(new Error(o.message||"请求被拒绝")):n.resolve(e.result)}else e.type==="disconnect"&&(r="",d=[],p(),h("Walletalk 已断开连接",!0))}});x();y&&[0,400,1200,3e3,6e3].forEach(t=>window.setTimeout(()=>{r||window.parent.postMessage({channel:u,type:"ready"},"*")},t));
