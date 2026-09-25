// Walletalk Design Tokens v1.1.0 · 由 tokens.py 生成，请勿手改
// 用法（tailwind.config.js）：presets: [require("./walletalk.preset.cjs")]
// 类名示例：bg-wt-panel text-wt-text-2 border-wt-line-2 bg-wt-brand/10 rounded-wt-lg shadow-wt-2 text-wt-body
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "wt": {
          "frame": "var(--wt-bg-frame)",
          "panel": "rgb(var(--wt-bg-panel-rgb) / <alpha-value>)",
          "chat": "var(--wt-bg-chat)",
          "subtle": "var(--wt-bg-subtle)",
          "raised": "var(--wt-bg-raised)",
          "hover": "var(--wt-bg-hover)",
          "active": "var(--wt-bg-active)",
          "pinned": "var(--wt-bg-pinned)",
          "input": "var(--wt-bg-input)",
          "text": {
            "1": "rgb(var(--wt-text-1-rgb) / <alpha-value>)",
            "2": "var(--wt-text-2)",
            "3": "rgb(var(--wt-text-3-rgb) / <alpha-value>)",
            "4": "var(--wt-text-4)",
            "inverse": "var(--wt-text-inverse)"
          },
          "line": {
            "1": "var(--wt-line-1)",
            "2": "var(--wt-line-2)",
            "3": "var(--wt-line-3)"
          },
          "brand": {
            "DEFAULT": "rgb(var(--wt-brand-rgb) / <alpha-value>)",
            "hover": "var(--wt-brand-hover)",
            "active": "var(--wt-brand-active)",
            "text": "var(--wt-brand-text)",
            "soft": "var(--wt-brand-soft)",
            "soft-2": "var(--wt-brand-soft-2)",
            "on": "var(--wt-on-brand)"
          },
          "success": {
            "DEFAULT": "rgb(var(--wt-success-rgb) / <alpha-value>)",
            "soft": "var(--wt-success-soft)"
          },
          "danger": {
            "DEFAULT": "rgb(var(--wt-danger-rgb) / <alpha-value>)",
            "soft": "var(--wt-danger-soft)"
          },
          "warning": {
            "DEFAULT": "var(--wt-warning)",
            "soft": "var(--wt-warning-soft)"
          },
          "up": "var(--wt-up)",
          "down": "var(--wt-down)",
          "wallet": {
            "DEFAULT": "var(--wt-wallet-body)",
            "text": "var(--wt-wallet-text)",
            "text-2": "var(--wt-wallet-text-2)",
            "line": "var(--wt-wallet-line)"
          },
          "ink": "var(--wt-ink)",
          "paper": "var(--wt-paper)",
          "amber": "var(--wt-amber)",
          "ember": "var(--wt-ember)",
          "envelope": "var(--wt-envelope)"
        },
        "primary": "rgb(var(--wt-brand-rgb) / <alpha-value>)",
        "primary-teal": "rgb(var(--wt-brand-rgb) / <alpha-value>)",
        "primary-deep": "var(--wt-brand-active)"
      },
      "fontFamily": {
        "wt": [
          "Outfit",
          "Noto Sans SC",
          "PingFang SC",
          "Microsoft YaHei",
          "system-ui",
          "sans-serif"
        ],
        "wtmono": [
          "Geist Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace"
        ]
      },
      "borderRadius": {
        "wt-xs": "6px",
        "wt-sm": "8px",
        "wt-md": "10px",
        "wt-lg": "14px",
        "wt-xl": "18px",
        "wt-2xl": "20px",
        "wt-full": "999px"
      },
      "boxShadow": {
        "wt-1": "var(--wt-shadow-1)",
        "wt-2": "var(--wt-shadow-2)",
        "wt-3": "var(--wt-shadow-3)"
      },
      "fontSize": {
        "wt-caption": [
          "11px",
          {
            "lineHeight": "16px",
            "fontWeight": "400"
          }
        ],
        "wt-meta": [
          "12px",
          {
            "lineHeight": "18px",
            "fontWeight": "400"
          }
        ],
        "wt-body-sm": [
          "13px",
          {
            "lineHeight": "20px",
            "fontWeight": "400"
          }
        ],
        "wt-body": [
          "14px",
          {
            "lineHeight": "22px",
            "fontWeight": "400"
          }
        ],
        "wt-title-sm": [
          "15px",
          {
            "lineHeight": "22px",
            "fontWeight": "500"
          }
        ],
        "wt-title": [
          "16px",
          {
            "lineHeight": "24px",
            "fontWeight": "600"
          }
        ],
        "wt-h3": [
          "18px",
          {
            "lineHeight": "26px",
            "fontWeight": "600"
          }
        ],
        "wt-h2": [
          "22px",
          {
            "lineHeight": "30px",
            "fontWeight": "600"
          }
        ],
        "wt-h1": [
          "28px",
          {
            "lineHeight": "36px",
            "fontWeight": "600"
          }
        ],
        "wt-display": [
          "36px",
          {
            "lineHeight": "42px",
            "fontWeight": "600"
          }
        ]
      },
      "transitionTimingFunction": {
        "wt": "cubic-bezier(.23, 1, .32, 1)",
        "wt-ritual": "cubic-bezier(.32, .72, 0, 1)"
      },
      "height": {
        "wt-topbar": "var(--wt-topbar-h)",
        "wt-row": "var(--wt-conv-row-h)",
        "wt-control": "var(--wt-control-h)"
      },
      "width": {
        "wt-nav": "var(--wt-nav-w)",
        "wt-drawer": "var(--wt-drawer-w)"
      }
    }
  }
};
