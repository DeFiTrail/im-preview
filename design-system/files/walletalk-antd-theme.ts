// Walletalk Design Tokens v1.1.0 · 由 tokens.py 生成，请勿手改
// 用法（src/App.tsx）：
//   import { walletalkLight, walletalkDark } from "@/styles/walletalk-antd-theme";
//   <ConfigProvider theme={isDark ? walletalkDark : walletalkLight} ...>
// 同时在 <html> 上设置 data-theme="light" | "dark"，让 CSS 变量跟着切换。
import { theme, type ThemeConfig } from "antd";

export const walletalkLight: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#F38917",
    colorInfo: "#F38917",
    colorSuccess: "#187A4C",
    colorError: "#C23A31",
    colorWarning: "#E8600A",
    colorLink: "#B8470A",
    colorLinkHover: "#E47D0F",
    colorLinkActive: "#C9690A",
    colorTextBase: "#17120C",
    colorBgBase: "#FFFFFF",
    colorText: "#17120C",
    colorTextSecondary: "#5A5248",
    colorTextTertiary: "#6B6358",
    colorTextQuaternary: "#A39B90",
    colorBorder: "rgba(23,18,12,.12)",
    colorBorderSecondary: "rgba(23,18,12,.07)",
    colorSplit: "rgba(23,18,12,.07)",
    colorBgContainer: "#FFFFFF",
    colorBgElevated: "#FFFFFF",
    colorBgLayout: "#F3EFE8",
    colorBgMask: "rgba(23,18,12,.36)",
    colorBgSpotlight: "#17120C",
    colorFill: "rgba(23,18,12,.08)",
    colorFillSecondary: "rgba(23,18,12,.06)",
    colorFillTertiary: "rgba(23,18,12,.04)",
    colorFillQuaternary: "rgba(23,18,12,.02)",
    controlItemBgHover: "rgba(23,18,12,.04)",
    controlItemBgActive: "#F3EDE4",
    controlItemBgActiveHover: "#F3EDE4",
    controlOutline: "rgba(243,137,23,.40)",
    fontFamily: "\"Outfit\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", system-ui, sans-serif",
    fontFamilyCode: "\"Geist Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
    fontSize: 14,
    borderRadius: 10,
    borderRadiusSM: 8,
    borderRadiusLG: 14,
    borderRadiusXS: 6,
    controlHeight: 36,
    controlHeightSM: 28,
    controlHeightLG: 44,
    boxShadow: "0 0 0 1px rgba(23,18,12,.06), 0 4px 12px -2px rgba(23,18,12,.10), 0 2px 4px rgba(23,18,12,.04)",
    boxShadowSecondary: "0 0 0 1px rgba(23,18,12,.06), 0 4px 12px -2px rgba(23,18,12,.10), 0 2px 4px rgba(23,18,12,.04)",
    motionEaseOut: "cubic-bezier(.23, 1, .32, 1)",
    motionEaseInOut: "cubic-bezier(.77, 0, .175, 1)",
    motionDurationFast: "0.12s",
    motionDurationMid: "0.2s",
    motionDurationSlow: "0.32s",
    wireframe: false,
  },
  components: {
    Button: {
      primaryColor: "#17120C",
      dangerColor: "#FFFFFF",
      primaryShadow: "none",
      defaultShadow: "none",
      dangerShadow: "none",
      fontWeight: 500,
      defaultBg: "#FFFFFF",
      defaultBorderColor: "rgba(23,18,12,.12)",
      defaultColor: "#17120C",
      textHoverBg: "rgba(23,18,12,.04)",
      contentFontSizeSM: 13,
      paddingInline: 16,
    },
    Input: {
      colorBgContainer: "#F5F1EB",
      activeBorderColor: "#F38917",
      hoverBorderColor: "rgba(23,18,12,.20)",
      activeShadow: "0 0 0 3px rgba(243,137,23,.40)",
    },
    InputNumber: {
      colorBgContainer: "#F5F1EB",
      activeBorderColor: "#F38917",
      hoverBorderColor: "rgba(23,18,12,.20)",
    },
    Select: {
      colorBgContainer: "#F5F1EB",
      optionSelectedBg: "#F3EDE4",
      optionActiveBg: "rgba(23,18,12,.04)",
      optionSelectedFontWeight: 500,
    },
    Modal: {
      contentBg: "#FFFFFF",
      headerBg: "#FFFFFF",
      footerBg: "#FFFFFF",
      titleFontSize: 16,
      titleColor: "#17120C",
      borderRadiusLG: 16,
    },
    Drawer: {
      colorBgElevated: "#FFFFFF",
    },
    Tabs: {
      itemColor: "#5A5248",
      itemHoverColor: "#17120C",
      itemSelectedColor: "#17120C",
      itemActiveColor: "#17120C",
      inkBarColor: "#F38917",
      titleFontSize: 14,
      horizontalItemGutter: 24,
      cardBg: "#F6F3EE",
    },
    Segmented: {
      colorBgLayout: "#F5F1EB",
      itemSelectedBg: "#FFFFFF",
      itemColor: "#5A5248",
      itemHoverColor: "#17120C",
      itemSelectedColor: "#17120C",
    },
    Menu: {
      itemBg: "transparent",
      itemHoverBg: "rgba(23,18,12,.04)",
      itemSelectedBg: "#F3EDE4",
      itemSelectedColor: "#17120C",
      itemColor: "#5A5248",
      itemHeight: 40,
      itemBorderRadius: 8,
    },
    Dropdown: {
      controlItemBgHover: "rgba(23,18,12,.04)",
      controlItemBgActive: "#F3EDE4",
    },
    Card: {
      headerFontSize: 15,
      headerHeight: 52,
      colorBgContainer: "#FFFFFF",
    },
    Tag: {
      defaultBg: "#F6F3EE",
      defaultColor: "#5A5248",
    },
    Tooltip: {
      colorBgSpotlight: "#17120C",
      colorTextLightSolid: "#FFF7EC",
    },
    Switch: {
      handleBg: "#FFFFFF",
    },
    Checkbox: {
      colorPrimary: "#F38917",
    },
    Notification: {
      width: 360,
    },
    Alert: {
      withDescriptionPadding: "12px 16px",
    },
    Table: {
      headerBg: "#F6F3EE",
      headerColor: "#6B6358",
      rowHoverBg: "rgba(23,18,12,.04)",
      borderColor: "rgba(23,18,12,.07)",
      cellPaddingBlock: 14,
    },
    Badge: {
      textFontSize: 11,
      indicatorHeight: 18,
    },
  },
};

export const walletalkDark: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#F38917",
    colorInfo: "#F38917",
    colorSuccess: "#4CC38A",
    colorError: "#EF6B5F",
    colorWarning: "#FFB224",
    colorLink: "#F38917",
    colorLinkHover: "#FF9A2E",
    colorLinkActive: "#E07A0C",
    colorTextBase: "#FFF7EC",
    colorBgBase: "#111317",
    colorText: "#FFF7EC",
    colorTextSecondary: "#B9B2A8",
    colorTextTertiary: "#948F87",
    colorTextQuaternary: "#6B6761",
    colorBorder: "rgba(255,247,236,.12)",
    colorBorderSecondary: "rgba(255,247,236,.07)",
    colorSplit: "rgba(255,247,236,.07)",
    colorBgContainer: "#111317",
    colorBgElevated: "#1A1D22",
    colorBgLayout: "#0B0D10",
    colorBgMask: "rgba(0,0,0,.56)",
    colorBgSpotlight: "#23282E",
    colorFill: "rgba(255,247,236,.10)",
    colorFillSecondary: "rgba(255,247,236,.07)",
    colorFillTertiary: "rgba(255,247,236,.05)",
    colorFillQuaternary: "rgba(255,247,236,.03)",
    controlItemBgHover: "rgba(255,247,236,.04)",
    controlItemBgActive: "#1E2227",
    controlItemBgActiveHover: "#1E2227",
    controlOutline: "rgba(255,178,36,.45)",
    fontFamily: "\"Outfit\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", system-ui, sans-serif",
    fontFamilyCode: "\"Geist Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
    fontSize: 14,
    borderRadius: 10,
    borderRadiusSM: 8,
    borderRadiusLG: 14,
    borderRadiusXS: 6,
    controlHeight: 36,
    controlHeightSM: 28,
    controlHeightLG: 44,
    boxShadow: "0 0 0 1px rgba(255,247,236,.10), 0 8px 24px -4px rgba(0,0,0,.50)",
    boxShadowSecondary: "0 0 0 1px rgba(255,247,236,.10), 0 8px 24px -4px rgba(0,0,0,.50)",
    motionEaseOut: "cubic-bezier(.23, 1, .32, 1)",
    motionEaseInOut: "cubic-bezier(.77, 0, .175, 1)",
    motionDurationFast: "0.12s",
    motionDurationMid: "0.2s",
    motionDurationSlow: "0.32s",
    wireframe: false,
  },
  components: {
    Button: {
      primaryColor: "#17120C",
      dangerColor: "#17120C",
      primaryShadow: "none",
      defaultShadow: "none",
      dangerShadow: "none",
      fontWeight: 500,
      defaultBg: "#1A1D22",
      defaultBorderColor: "rgba(255,247,236,.12)",
      defaultColor: "#FFF7EC",
      textHoverBg: "rgba(255,247,236,.04)",
      contentFontSizeSM: 13,
      paddingInline: 16,
    },
    Input: {
      colorBgContainer: "#0B0D10",
      activeBorderColor: "#F38917",
      hoverBorderColor: "rgba(255,247,236,.20)",
      activeShadow: "0 0 0 3px rgba(255,178,36,.45)",
    },
    InputNumber: {
      colorBgContainer: "#0B0D10",
      activeBorderColor: "#F38917",
      hoverBorderColor: "rgba(255,247,236,.20)",
    },
    Select: {
      colorBgContainer: "#0B0D10",
      optionSelectedBg: "#1E2227",
      optionActiveBg: "rgba(255,247,236,.04)",
      optionSelectedFontWeight: 500,
    },
    Modal: {
      contentBg: "#1A1D22",
      headerBg: "#1A1D22",
      footerBg: "#1A1D22",
      titleFontSize: 16,
      titleColor: "#FFF7EC",
      borderRadiusLG: 16,
    },
    Drawer: {
      colorBgElevated: "#111317",
    },
    Tabs: {
      itemColor: "#B9B2A8",
      itemHoverColor: "#FFF7EC",
      itemSelectedColor: "#FFF7EC",
      itemActiveColor: "#FFF7EC",
      inkBarColor: "#F38917",
      titleFontSize: 14,
      horizontalItemGutter: 24,
      cardBg: "#15181C",
    },
    Segmented: {
      colorBgLayout: "#0B0D10",
      itemSelectedBg: "#1A1D22",
      itemColor: "#B9B2A8",
      itemHoverColor: "#FFF7EC",
      itemSelectedColor: "#FFF7EC",
    },
    Menu: {
      itemBg: "transparent",
      itemHoverBg: "rgba(255,247,236,.04)",
      itemSelectedBg: "#1E2227",
      itemSelectedColor: "#FFF7EC",
      itemColor: "#B9B2A8",
      itemHeight: 40,
      itemBorderRadius: 8,
    },
    Dropdown: {
      controlItemBgHover: "rgba(255,247,236,.04)",
      controlItemBgActive: "#1E2227",
    },
    Card: {
      headerFontSize: 15,
      headerHeight: 52,
      colorBgContainer: "#111317",
    },
    Tag: {
      defaultBg: "#15181C",
      defaultColor: "#B9B2A8",
    },
    Tooltip: {
      colorBgSpotlight: "#23282E",
      colorTextLightSolid: "#FFF7EC",
    },
    Switch: {
      handleBg: "#FFFFFF",
    },
    Checkbox: {
      colorPrimary: "#F38917",
    },
    Notification: {
      width: 360,
    },
    Alert: {
      withDescriptionPadding: "12px 16px",
    },
    Table: {
      headerBg: "#15181C",
      headerColor: "#948F87",
      rowHoverBg: "rgba(255,247,236,.04)",
      borderColor: "rgba(255,247,236,.07)",
      cellPaddingBlock: 14,
    },
    Badge: {
      textFontSize: 11,
      indicatorHeight: 18,
    },
  },
};

export type WalletalkThemeMode = "light" | "dark";
/** 用户在"个人设置 → 外观"里的选择；默认 system */
export type WalletalkThemePref = "system" | "light" | "dark";

/** 把用户选择解析成实际主题 */
export function resolveWalletalkMode(pref: WalletalkThemePref): WalletalkThemeMode {
  if (pref === "system") return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  return pref;
}

/** 选"跟随系统"时，监听系统切换；返回取消监听的函数 */
export function watchSystemTheme(onChange: (mode: WalletalkThemeMode) => void): () => void {
  const mq = matchMedia("(prefers-color-scheme: dark)");
  const handler = () => onChange(mq.matches ? "dark" : "light");
  mq.addEventListener("change", handler);
  return () => mq.removeEventListener("change", handler);
}

/** 切换主题：同时改 antd 与 CSS 变量。mode 可以来自用户设置或 matchMedia("(prefers-color-scheme: dark)") */
export function applyWalletalkTheme(mode: WalletalkThemeMode): ThemeConfig {
  document.documentElement.dataset.theme = mode;
  return mode === "dark" ? walletalkDark : walletalkLight;
}
