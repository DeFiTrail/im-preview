# 钱包流程稿 · 技术使用说明

v1.1 · 2026-10-28 · 在线版 https://defitrail.github.io/im-preview/wallet-flows/

这不是 Figma 稿，是**用设计系统的令牌直接写出来的 HTML/CSS**。好处是：量尺寸、取颜色、抄结构都不需要切图工具，浏览器 F12 就是标注面板；坏处是没有图层面板，所以这里把它拆成了能直接拿走的几份。

## 目录

| 文件 | 给谁 | 怎么用 |
|---|---|---|
| `index.html` | 所有人 | 流程看板：15 组流程、63 屏，右上角切手机 / PC、白天 / 黑夜，每屏下方是交互说明。双击即开 |
| `screens/` | 前端 | **每屏一个独立 HTML**（`screens/index.html` 是索引）。打开任意一屏 → F12 → 元素面板里就是这一屏的完整结构和类名；地址后加 `?pc`、`?dark`、`?pc&dark` 切变体 |
| `wallet-flows.css` | 前端 | 流程稿用到的全部组件样式。颜色、圆角、间距全部是 `--wt-*` 令牌，与 `brand/design-system/tokens/walletalk-tokens.css` 同名；类名 → 组件对照见下表 |
| `png/` | 前端 / 测试 / 产品 | 2 倍图切图，四个目录：`mobile-light` `mobile-dark` `pc-light` `pc-dark`，文件名 = 屏编号（如 `mpc-device-02.png`）。测试拿它做视觉验收基准 |
| `screens.json` | 测试 | 63 屏的编号、所属流程、名称、交互说明，可直接导入用例表 |
| `cover.jpg` | — | 发布站封面 |

屏编号规则：`<流程 id>-<两位序号>`，流程 id 与看板左侧目录一致（`onboard` `pin` `hd-create` `hd-backup` `hd-import` `hd-addr` `hd-export` `mpc-create` `mpc-sign` `mpc-device` `mpc-export` `mpc-rebackup` `list` `sec-hd` `sec-mpc`）。

## 类名 → 组件对照

流程稿里的类名是为了画稿方便起的短名，实现时映射到各端现有组件，不要照搬类名。

| 流程稿类名 | 是什么 | pc-web（antd 5 + 设计系统） | Flutter |
|---|---|---|---|
| `.hd` `.ttl` `.bk` `.x` | 页头：返回、标题、关闭（PC 对话框） | `Modal` 头 / 页面头 | `AppBar` |
| `.steps` | 步骤条（3px 条） | 自定义，`--wt-brand` / `--wt-line-2` | 自定义 |
| `.btn.p` `.btn.s` `.btn.g` `.btn.d` `.btn.dis` | 主 / 次 / 幽灵 / 危险 / 禁用按钮。**手机 52px 圆角 14，PC 44px 圆角 12** | `Button type=primary/default/text/danger` | `FilledButton` / `OutlinedButton` / `TextButton` |
| `.in` `.in.ta` `.in.code` | 输入框 50px（PC 44）/ 多行 / 等宽 | `Input` / `Input.TextArea` | `TextField` |
| `.pin` | 6 格 PIN，44×52，当前格琥珀描边 | 自定义 | 自定义 |
| `.str` | 密码强度条 4 段 | 自定义 | 自定义 |
| `.note` `.note.w` `.note.ok` `.note.dg` | 提示块：信息 / 警告 / 成功 / 危险 | `Alert` | 自定义 |
| `.card` `.card.sel` `.tag` | 选择卡（引导页两张卡），选中态 2px 琥珀描边 + 6px 浅环 | 自定义 | 自定义 |
| `.opt` `.opt.rec` | 列表式选项（导入方式、换设备两条路） | `List.Item` | `ListTile` |
| `.wt` `.cd` `.by` `.cl` | 钱包皮面 + 11° 箔卡 + 扣环，直接用 `brand/design-system/css/walletalk-signature.css` 的 `.wt-wallet` | 签名组件 | 签名组件（Flutter 版需按 CSS 复刻） |
| `.dot` `.dot.live` `.dot.off` | 状态灯：常亮 / 呼吸 / 熄灭 | `.wt-dot` | 自定义 |
| `.rit` | 仪式页（生成中 / 恢复中 / 完成） | 全屏页 | 全屏页 |
| `.mn` `.mn.blur` `.slots` | 助记词网格（3 列，PC 4 列）、校验槽 | 自定义 | 自定义 |
| `.li` `.ix` `.tx` `.rt` | 列表行（地址、设备、钱包） | `List.Item` | `ListTile` |
| `.chip` `.chip.b` `.chip.ok` `.chip.wr` | 标签：默认 / 品牌 / 成功 / 警告 | `Tag` | `Chip` |
| `.sw` `.sw.off` | 开关 | `Switch` | `Switch` |
| `.sec` `h5` | 安全 Tab 分节 | 分组列表 | 分组列表 |
| `.vc` `.num` `.em` | 核对码：6 位数字 + 4 图案 | 自定义 | 自定义 |
| `.dev` | 设备卡 | `List.Item` | `ListTile` |
| `.ban` | 顶部横幅（未备份 / 保护期 / 需同步） | `Alert banner` | 自定义 |
| `.tabs` `.wsel` `.drop` | 钱包 6 Tab、钱包切换器、下拉 | 现有 `wallet-tabs`、账户下拉 | 现有 |
| `.sheet` `.mask` | 底部弹层（PC 为居中弹窗 440px） | `Modal` / `Drawer` | `showModalBottomSheet` |
| `.file` `.file.f` | 文件选择区 / 已选态 | `Upload.Dragger` | 自定义 |
| `.kv` | 键值行（转账确认） | `Descriptions` | 自定义 |
| `.tbl` | 对比表（两种钱包的区别） | `Table` | 自定义 |

## 尺寸与动效速查

- 手机帧 390×844；PC 对话框 760 宽，内容区左右 24。
- 字阶：标题 22/30，小标题 16/24，正文 14/22，辅助 12/18，说明 13/20。
- 圆角：按钮 14（PC 12）、输入 12、卡片 16、皮面 20、弹层 20（顶部）。
- 动效：卡片滑出 560ms `cubic-bezier(.32,.72,0,1)`；呼吸 3.2s；交互 200ms。
- 两套主题的全部颜色值在 `wallet-flows.css` 顶部 `.scr[data-theme="light"]` / `.scr[data-theme="dark"]` 两个块里，与设计系统令牌一一对应。

## 文案

界面上的每一个字以 `docs/wallet/钱包文案-中英对照.md` 为准，流程稿和文案表若有出入以文案表为准。
