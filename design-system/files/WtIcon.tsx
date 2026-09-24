// Walletalk 图标 · 71 个 · 24 网格、1.5px 线宽、圆头圆角。由 build_icons.py 生成。
// 用法与 antd 图标一致：<WtIcon name="nav-chat" style={{ fontSize: 22, color: "var(--wt-text-3)" }} />
import type { SVGProps } from "react";

export type WtIconName = "nav-chat" | "nav-contacts" | "nav-apps" | "nav-wallet" | "nav-cs" | "nav-tickets" | "nav-workbench" | "nav-admin" | "nav-me" | "search" | "plus" | "scan" | "user-add" | "group-add" | "win-min" | "win-max" | "win-close" | "history" | "translate" | "live" | "invite" | "settings" | "folder" | "phone" | "video" | "mic" | "emoji" | "image" | "file" | "asset" | "agent-tools" | "burn" | "send" | "pin" | "mute" | "at" | "reply" | "forward" | "recall" | "copy" | "trash" | "check" | "check-double" | "clock" | "alert" | "play" | "download" | "card" | "dapp" | "receive" | "transfer" | "swap" | "approvals" | "address-book" | "security" | "red-packet" | "request" | "chain" | "qr" | "refresh" | "eye" | "eye-off" | "filter" | "chevron-left" | "chevron-right" | "chevron-down" | "close" | "more" | "info" | "bell" | "logout";

const PATHS: Record<WtIconName, string> = {
  "nav-chat": "<path d=\"M20 13.5a3.5 3.5 0 0 1-3.5 3.5H10l-4.5 3v-3.2A3.5 3.5 0 0 1 4 13.5v-6A3.5 3.5 0 0 1 7.5 4h9A3.5 3.5 0 0 1 20 7.5z\"/><path d=\"M8.5 9.5h7M8.5 12.5h4\"/>",
  "nav-contacts": "<circle cx=\"9.5\" cy=\"8.5\" r=\"3.5\"/><path d=\"M3.5 19.5c.9-3 3.1-4.5 6-4.5s5.1 1.5 6 4.5\"/><path d=\"M15.8 5.3a3.3 3.3 0 0 1 0 6.4M17.8 14.8c1.3.8 2.2 2.3 2.7 4.7\"/>",
  "nav-apps": "<rect x=\"4\" y=\"4\" width=\"6.5\" height=\"6.5\" rx=\"2\"/><rect x=\"13.5\" y=\"4\" width=\"6.5\" height=\"6.5\" rx=\"2\"/><rect x=\"4\" y=\"13.5\" width=\"6.5\" height=\"6.5\" rx=\"2\"/><circle cx=\"16.75\" cy=\"16.75\" r=\"3.25\"/>",
  "nav-wallet": "<rect x=\"3.5\" y=\"7\" width=\"17\" height=\"12\" rx=\"3\"/><path d=\"M6.5 7l8.8-2.5a1.6 1.6 0 0 1 2 1.1L17.7 7\"/><path d=\"M20.5 11H16a2 2 0 0 0 0 4h4.5\"/>",
  "nav-cs": "<path d=\"M4.5 13v-1.5a7.5 7.5 0 0 1 15 0V13\"/><rect x=\"3.5\" y=\"12.5\" width=\"4\" height=\"6\" rx=\"1.8\"/><rect x=\"16.5\" y=\"12.5\" width=\"4\" height=\"6\" rx=\"1.8\"/><path d=\"M18.5 18.5c0 1.3-1.4 2-3.5 2h-2\"/>",
  "nav-tickets": "<path d=\"M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V10a2 2 0 0 0 0 4v2.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5V14a2 2 0 0 0 0-4z\"/><path d=\"M9.5 9.5h5M9.5 14.5h3\"/>",
  "nav-workbench": "<rect x=\"3.5\" y=\"4.5\" width=\"17\" height=\"11.5\" rx=\"2.5\"/><path d=\"M8.5 20h7M12 16v4\"/><path d=\"M7.5 12l2.5-2.5 2 2 3.5-3.5\"/>",
  "nav-admin": "<path d=\"M12 3.5l7 3v5c0 4.3-3 7.6-7 9-4-1.4-7-4.7-7-9v-5z\"/><circle cx=\"12\" cy=\"10.5\" r=\"2.2\"/><path d=\"M8.6 16.2c.8-1.5 2-2.2 3.4-2.2s2.6.7 3.4 2.2\"/>",
  "nav-me": "<circle cx=\"12\" cy=\"8.5\" r=\"3.5\"/><path d=\"M5 19.5c1.2-3.3 3.8-5 7-5s5.8 1.7 7 5\"/>",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"6.5\"/><path d=\"m16 16 4 4\"/>",
  "plus": "<path d=\"M12 5v14M5 12h14\"/>",
  "scan": "<path d=\"M4 8V6.5A2.5 2.5 0 0 1 6.5 4H8M16 4h1.5A2.5 2.5 0 0 1 20 6.5V8M20 16v1.5a2.5 2.5 0 0 1-2.5 2.5H16M8 20H6.5A2.5 2.5 0 0 1 4 17.5V16M4 12h16\"/>",
  "user-add": "<circle cx=\"10\" cy=\"8.5\" r=\"3.5\"/><path d=\"M3.5 19.5c.9-3 3.3-4.5 6.5-4.5 1.2 0 2.3.2 3.2.6\"/><path d=\"M18 14v6M15 17h6\"/>",
  "group-add": "<circle cx=\"8.5\" cy=\"8.5\" r=\"3\"/><circle cx=\"15.5\" cy=\"8.5\" r=\"3\"/><path d=\"M3 18.5c.7-2.5 2.7-3.8 5.5-3.8 1.4 0 2.6.3 3.5 1\"/><path d=\"M18 14.5v6M15 17.5h6\"/>",
  "win-min": "<path d=\"M6 12h12\"/>",
  "win-max": "<rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"2\"/>",
  "win-close": "<path d=\"M6.5 6.5l11 11M17.5 6.5l-11 11\"/>",
  "history": "<path d=\"M4.5 12a7.5 7.5 0 1 0 2.2-5.3\"/><path d=\"M4.5 4.5v3.2h3.2\"/><path d=\"M12 8.5V12l2.5 1.5\"/>",
  "translate": "<path d=\"M4 5.5h8M8 4v1.5M10.5 5.5c-.6 3.6-3 6.3-6 7.5M6.2 8.3c1 1.7 2.6 3 4.3 3.7\"/><path d=\"M12.5 20l3.5-8.5 3.5 8.5M13.7 17.2h4.6\"/>",
  "live": "<circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M8.3 15.7a5.3 5.3 0 0 1 0-7.4M15.7 8.3a5.3 5.3 0 0 1 0 7.4M5.5 18.5a9.2 9.2 0 0 1 0-13M18.5 5.5a9.2 9.2 0 0 1 0 13\"/>",
  "invite": "<circle cx=\"10\" cy=\"8.5\" r=\"3.5\"/><path d=\"M3.5 19.5c.9-3 3.3-4.5 6.5-4.5s5.6 1.5 6.5 4.5\"/><path d=\"M18.5 7v5M16 9.5h5\"/>",
  "settings": "<path d=\"M4 7h9M17 7h3M4 17h3M11 17h9\"/><circle cx=\"15\" cy=\"7\" r=\"2\"/><circle cx=\"9\" cy=\"17\" r=\"2\"/>",
  "folder": "<path d=\"M3.5 7.5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z\"/>",
  "phone": "<path d=\"M6.6 4h2.2l1.5 3.9-2 1.3a10 10 0 0 0 4.5 4.5l1.3-2 3.9 1.5v2.2a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.6 6.2 2 2 0 0 1 6.6 4z\"/>",
  "video": "<rect x=\"3.5\" y=\"6.5\" width=\"12\" height=\"11\" rx=\"2.5\"/><path d=\"M15.5 10.5l5-3v9l-5-3z\"/>",
  "mic": "<rect x=\"9\" y=\"3.5\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5\"/>",
  "emoji": "<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M8.5 14c.8 1.3 2 2 3.5 2s2.7-.7 3.5-2\"/><circle cx=\"9\" cy=\"9.8\" r=\"1\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"15\" cy=\"9.8\" r=\"1\" fill=\"currentColor\" stroke=\"none\"/>",
  "image": "<rect x=\"3.5\" y=\"4.5\" width=\"17\" height=\"15\" rx=\"2.5\"/><circle cx=\"9\" cy=\"9.5\" r=\"1.7\"/><path d=\"M20.5 15.5 16 11l-8.5 8.5\"/>",
  "file": "<path d=\"M7 3.5h6.5L18 8v10.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z\"/><path d=\"M13.5 3.5V8H18\"/>",
  "asset": "<ellipse cx=\"10\" cy=\"7\" rx=\"5.5\" ry=\"2.5\"/><path d=\"M4.5 7v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V7\"/><path d=\"M4.5 11v4c0 1.4 2.5 2.5 5.5 2.5.9 0 1.8-.1 2.6-.3\"/><circle cx=\"17.5\" cy=\"16.5\" r=\"3.5\"/>",
  "agent-tools": "<path d=\"M13 3.5 6 13h5.5l-1 7.5L18 11h-5.5z\"/>",
  "burn": "<path d=\"M12 20.5c3.3 0 6-2.4 6-5.8 0-2.9-1.9-4.6-3.3-6.2-.4 1.7-1.2 2.6-2.2 3.1.1-3-1.3-5.6-3.8-8.1-.1 3.4-2.7 5.2-2.7 9.6 0 4 2.7 7.4 6 7.4z\"/>",
  "send": "<path d=\"M20 4 10.5 13.5\"/><path d=\"M20 4l-5.5 16-4-6.5L4 9.5z\"/>",
  "pin": "<path d=\"M9 4.5h6l-1 5 3.5 3v1.5h-11v-1.5l3.5-3z\"/><path d=\"M12 14v5.5\"/>",
  "mute": "<path d=\"M9.3 6.5A4 4 0 0 1 16 9.5v4l1.5 2.5H8.5\"/><path d=\"M6.6 9.8v3.7L5 16h1.5\"/><path d=\"M10.5 19.5a1.7 1.7 0 0 0 3 0\"/><path d=\"M4.5 4.5l15 15\"/>",
  "at": "<circle cx=\"12\" cy=\"12\" r=\"3.5\"/><path d=\"M15.5 12v1.3a2.2 2.2 0 0 0 4.4 0V12a7.9 7.9 0 1 0-3.1 6.3\"/>",
  "reply": "<path d=\"M9.5 6.5 4.5 11l5 4.5\"/><path d=\"M4.5 11h9a6 6 0 0 1 6 6v1.5\"/>",
  "forward": "<path d=\"M14.5 6.5l5 4.5-5 4.5\"/><path d=\"M19.5 11h-9a6 6 0 0 0-6 6v1.5\"/>",
  "recall": "<path d=\"M8 8.5H15a4.5 4.5 0 0 1 0 9H9\"/><path d=\"M11 5.5 8 8.5l3 3\"/>",
  "copy": "<rect x=\"8.5\" y=\"8.5\" width=\"11\" height=\"11\" rx=\"2.5\"/><path d=\"M15.5 8.5V6.5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2\"/>",
  "trash": "<path d=\"M4.5 7h15M10 4.5h4M6.5 7l.8 11.2a2 2 0 0 0 2 1.8h5.4a2 2 0 0 0 2-1.8L17.5 7\"/><path d=\"M10 11v5M14 11v5\"/>",
  "check": "<path d=\"M5 12.5l4.5 4.5L19 7.5\"/>",
  "check-double": "<path d=\"M3 12.5l4.5 4.5 9-9.5\"/><path d=\"M11.5 16.5l.5.5 9-9.5\"/>",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M12 7.5V12l3 2\"/>",
  "alert": "<path d=\"M10.3 4.9a2 2 0 0 1 3.4 0l6.8 11.8a2 2 0 0 1-1.7 3h-13.6a2 2 0 0 1-1.7-3z\"/><path d=\"M12 10v3.5\"/><circle cx=\"12\" cy=\"16.5\" r=\"1\" fill=\"currentColor\" stroke=\"none\"/>",
  "play": "<path d=\"M8 5.5v13l10.5-6.5z\"/>",
  "download": "<path d=\"M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14\"/>",
  "card": "<rect x=\"3.5\" y=\"5\" width=\"17\" height=\"14\" rx=\"2.5\"/><circle cx=\"9\" cy=\"11\" r=\"2.2\"/><path d=\"M5.8 16c.6-1.4 1.7-2.1 3.2-2.1s2.6.7 3.2 2.1M14.5 10h3M14.5 13.5h3\"/>",
  "dapp": "<path d=\"M12 3.5l7.5 4.3v8.4L12 20.5l-7.5-4.3V7.8z\"/><path d=\"M12 12l7.5-4.2M12 12v8.5M12 12 4.5 7.8\"/>",
  "receive": "<path d=\"M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14\"/>",
  "transfer": "<path d=\"M7 17 17 7M9 7h8v8\"/>",
  "swap": "<path d=\"M5 8.5h13M14.5 5 18 8.5 14.5 12M19 15.5H6M9.5 12 6 15.5 9.5 19\"/>",
  "approvals": "<path d=\"M12 3.5l7 3v5c0 4.3-3 7.6-7 9-4-1.4-7-4.7-7-9v-5z\"/><path d=\"M9 12l2.2 2.2L15.5 10\"/>",
  "address-book": "<path d=\"M6.5 3.5h11a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-11z\"/><path d=\"M6.5 3.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2\"/><circle cx=\"13\" cy=\"10\" r=\"2.3\"/><path d=\"M9.8 15.5c.6-1.4 1.7-2.1 3.2-2.1s2.6.7 3.2 2.1\"/>",
  "security": "<rect x=\"5\" y=\"10.5\" width=\"14\" height=\"9.5\" rx=\"2.5\"/><path d=\"M8 10.5V8a4 4 0 0 1 8 0v2.5\"/><circle cx=\"12\" cy=\"15.2\" r=\"1\" fill=\"currentColor\" stroke=\"none\"/>",
  "red-packet": "<rect x=\"5\" y=\"3.5\" width=\"14\" height=\"17\" rx=\"2.5\"/><path d=\"M5 8.5c2 1.6 4.4 2.5 7 2.5s5-.9 7-2.5\"/><circle cx=\"12\" cy=\"11\" r=\"2\"/>",
  "request": "<path d=\"M6.5 3.5h11v17l-2.2-1.5-2 1.5-1.8-1.5-1.8 1.5-2-1.5-1.2 1.5z\"/><path d=\"M9.5 8.5h5M9.5 12h5M9.5 15.5h3\"/>",
  "chain": "<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M3.5 12h17M12 3.5c2.3 2.3 3.4 5.2 3.4 8.5s-1.1 6.2-3.4 8.5c-2.3-2.3-3.4-5.2-3.4-8.5S9.7 5.8 12 3.5z\"/>",
  "qr": "<rect x=\"4\" y=\"4\" width=\"6\" height=\"6\" rx=\"1.5\"/><rect x=\"14\" y=\"4\" width=\"6\" height=\"6\" rx=\"1.5\"/><rect x=\"4\" y=\"14\" width=\"6\" height=\"6\" rx=\"1.5\"/><path d=\"M14 14h2.5v2.5M20 14v.01M14 20h.01M17.5 17.5H20V20h-2.5z\"/>",
  "refresh": "<path d=\"M19.5 12a7.5 7.5 0 1 1-2.2-5.3\"/><path d=\"M19.5 4.5v3.2h-3.2\"/>",
  "eye": "<path d=\"M2.8 12S6 6 12 6s9.2 6 9.2 6-3.2 6-9.2 6-9.2-6-9.2-6z\"/><circle cx=\"12\" cy=\"12\" r=\"2.8\"/>",
  "eye-off": "<path d=\"M9.9 6.3A8.7 8.7 0 0 1 12 6c6 0 9.2 6 9.2 6a15.7 15.7 0 0 1-2.4 3.2M14 17.7c-.6.2-1.3.3-2 .3-6 0-9.2-6-9.2-6a15.3 15.3 0 0 1 3.6-4.2\"/><path d=\"M4.5 4.5l15 15\"/>",
  "filter": "<path d=\"M4.5 6h15l-6 7.2V19l-3-1.5v-4.3z\"/>",
  "chevron-left": "<path d=\"M14.5 5.5 8 12l6.5 6.5\"/>",
  "chevron-right": "<path d=\"M9.5 5.5 16 12l-6.5 6.5\"/>",
  "chevron-down": "<path d=\"M5.5 9.5 12 16l6.5-6.5\"/>",
  "close": "<path d=\"M6.5 6.5l11 11M17.5 6.5l-11 11\"/>",
  "more": "<circle cx=\"6\" cy=\"12\" r=\"1.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"12\" cy=\"12\" r=\"1.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"18\" cy=\"12\" r=\"1.2\" fill=\"currentColor\" stroke=\"none\"/>",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M12 11v5\"/><circle cx=\"12\" cy=\"8\" r=\"1\" fill=\"currentColor\" stroke=\"none\"/>",
  "bell": "<path d=\"M6.5 16.5v-6a5.5 5.5 0 0 1 11 0v6l1.5 2H5z\"/><path d=\"M10.2 20.5a2 2 0 0 0 3.6 0\"/>",
  "logout": "<path d=\"M14 4.5H7.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2H14\"/><path d=\"M11 12h9M17 9l3 3-3 3\"/>",
};

export type WtIconProps = Omit<SVGProps<SVGSVGElement>, "name"> & { name: WtIconName; size?: number | string; title?: string };

export function WtIcon({ name, size = "1em", title, ...rest }: WtIconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
      {...rest}
      dangerouslySetInnerHTML={{ __html: PATHS[name] }}
    />
  );
}

export default WtIcon;
