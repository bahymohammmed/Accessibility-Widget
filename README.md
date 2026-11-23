# Accessible Visitor Toolkit

A free, open-source, Arabic/English accessibility widget with visual preferences, browser-based Read Aloud, caption/transcript support, and floating-button or fixed-sidebar installation.

**This is not a WCAG 2.2 AA certification.** Websites must be independently audited.

## Website and live demo

The redesigned bilingual landing page lives at [index.html](./index.html). The actual widget is [accessibility-widget.js](./accessibility-widget.js).

**To publish the site on GitHub Pages:**

1. Go to repository **Settings → Pages**.
2. Select **Deploy from a branch**.
3. Select branch **main**, folder **/(root)**, then **Save**.
4. Verify the deployment under **Actions** / **Pages**.

Expected address after successful deployment: https://bahymohammmed.github.io/Accessibility-Widget/

## Installation

Host the JavaScript file on your own domain, then add:

```html
<script src="/accessibility-widget.js" defer></script>
```

Fixed sidebar:

```html
<script src="/accessibility-widget.js" data-avt-mode="sidebar" data-avt-side="right" defer></script>
```

Change `right` to `left` if needed.

## Included

- Arabic and English, right-to-left interface
- Text resizing, high-contrast and grayscale controls
- Text spacing, link highlighting, reading guide
- Read page and selected text using browser voices
- Caption preferences and transcript integration
- Visual alert and live-caption integration hooks
- Fixed sidebar or floating launcher

Caption tracks, live speech transcription, sign-language interpretation and screen-reader compatibility depend on media, service integrations, and host website support.

## Analytics and privacy

No telemetry is enabled by default. GitHub repository visits are **not** widget-installation metrics. Aggregate cross-site usage reporting requires a separate, consent-aware backend with privacy and security review. Do not transmit selected text, form content, transcripts, or personal data.

## Verification

The redesigned website passed 36 targeted Chromium checks across desktop, tablet and mobile widths in an in-memory environment. This is **not** a comprehensive accessibility audit or a production deployment test.

## License

[MIT](./LICENSE).