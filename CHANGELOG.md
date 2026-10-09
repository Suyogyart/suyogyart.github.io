# Changelog

All notable changes to the **Nepal Lipi Converter (DTNConverter)** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2026-10-09

### Added
- **Callijatra Foundation Visual Redesign**: Restyled the entire converter to match the visual identity, colors (`#c0392b`), and typography of the [Callijatra Foundation](https://callijatra.github.io) website.
- **Header & Navbar**:
  - Integrated official Callijatra SVG logo (`callijatra_logo.svg`) with dark mode inversion support.
  - Added feature badge pill (`NEPAL LIPI CONVERTER`) matching `newa-font-switch-widget` navbar design.
  - Added mobile responsive hamburger dropdown navigation menu.
- **Dark Mode Support**: Sun/Moon toggle button with zero-flash `localStorage` theme persistence and system `prefers-color-scheme` detection.
- **Interactive Features**:
  - **Panel Layout Swapper (`⇄ Swap Panels`)**: 1-click button to swap physical left/right positions of Devanagari and Nepal Lipi panel cards.
  - **Quick Sample Presets**: Instant load buttons for common words (`ज्वज्वलोपा`, `नेपाल लिपि`, `भिंतुना`, `सुभाय्`, `नेपाल संवत्`, `०१२३४५६७८९`).
  - **Font Size Adjuster**: Controls (`S`, `M`, `L`, `XL`) to dynamically adjust converter text size.
  - **Stats Counter**: Live character and word count tracking beneath each text area.
  - **Toast Notifications**: Floating visual feedback for copy and export actions.
  - **File Export**: One-click `.txt` file export for converted Nepal Lipi text.
  - **Interactive Script Reference Matrix**: Tabbed alphabet chart for Consonants, Vowels, Matras, and Numerals with click-to-insert character functionality.
- **Informational Sections**: Added background guide on Nepal Lipi history, Unicode standard details (U+11480–U+114DF), and Callijatra digital tools ecosystem links.

### Changed
- Compact textarea height (`rows="5"`) for balanced, responsive viewports across mobile and desktop.
- Replaced central content swap arrow with panel layout container swapping.
- Streamlined real-time bidirectional transliteration logic to handle inputs automatically in both panels.

### Fixed
- Multi-character conjunct mapping (e.g. `ङ्ह`, `ञ्ह`, `र्ह`) for authentic manuscript orthography.
- Mobile word wrapping (`word-break: break-word`) and touch-scrolling inside textareas.

---

## [1.0.0] - 2026-01-07

### Added
- Initial real-time Devanagari ↔ Nepal Lipi (Newa script) converter web application.
- Character-by-character array mapping between Devanagari and Newa Unicode characters.
- Custom `@font-face` font embedding for `NotoSansNewa-Regular.otf`.
- basic copy-to-clipboard functionality.
- Privacy policy and support page compliance for App Store publishing.
