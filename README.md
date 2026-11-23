# Able — Web Accessibility for Everyone

**Able** is a free, MIT-licensed Arabic/English website accessibility widget. It provides visual preferences, browser-based Read Aloud, caption and transcript integrations, and a floating button or fixed sidebar.

![Able logo icon](./assets/able-icon.webp)

**Important:** Able is *not* an automatic WCAG 2.2 AA compliance solution. Websites must be evaluated and remediated separately.

## Website and demo

- **Website:** [index.html](./index.html)
- **Widget:** [accessibility-widget.js](./accessibility-widget.js)
- **Approved icon:** [assets/able-icon.webp](./assets/able-icon.webp)
- **Demo caption files:** `sample-ar.vtt`, `sample-en.vtt`

To publish the site, enable **Settings → Pages → Deploy from a branch → main → /(root)**.

GitHub Pages URL (once deployed): https://bahymohammmed.github.io/Accessibility-Widget/

## Install

Host the widget JavaScript on your website, then add:

```html
<script src="/accessibility-widget.js" defer></script>
```

Fixed sidebar on the right (use `left` for left placement):

```html
<script src="/accessibility-widget.js" data-avt-mode="sidebar" data-avt-side="right" defer></script>
```

The configuration prefix `data-avt-` and existing `window.AccessibleVisitorToolkit` API are preserved for backward compatibility. New integrations may use `window.AbleWidget` as an alias.

## Included features

- Arabic/English UI and RTL/LTR layout
- Text sizing and spacing, high contrast, grayscale, link highlighting, reading guide
- Browser-dependent speech synthesis for page or selected text
- Closed-caption preferences, transcript viewer, visual notifications
- Integration hooks for live captions, sign-language videos, and text-based communication
- Floating launcher or fixed sidebar placement; responsive controls

Features requiring external resources **do not automatically produce** captions, sign-language interpretation, or speech transcription. The website owner must supply accurate content/services. Browser voices and screen-reader behavior vary by environment.

## Privacy and analytics

Tracking is **disabled by default**. GitHub traffic is not a count of installations or active users. An optional aggregate usage backend requires separate deployment, consent/privacy review, and security controls. Never transmit visitor selections, spoken text, transcripts, form contents, or personal information.

## Accessibility verification

Browser interaction checks are not a complete WCAG audit. Perform manual keyboard, screen-reader, color-contrast, device, and website integration testing before claiming conformance. See [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## License

MIT — see [LICENSE](./LICENSE). Copyright attribution retains the original project history.

## Brand history

Previously published as **Accessible Visitor Toolkit (AVT)**; renamed to **Able** in November 2026. The GitHub repository name and widget file path remain unchanged to avoid breaking existing links.
