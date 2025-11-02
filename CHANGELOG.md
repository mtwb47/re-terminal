# Changelog

All notable changes to this Hugo theme since it was forked from Terminal on 2024-07-28.

## [3.2.0] - 2025-11-02

### Added
- Video post type with red accent color styling
- `--accent-video` CSS variable for all 16 theme variants (Gruvbox, Everforest, Catppuccin, High Contrast, Oxocarbon, Dracula, Nord, Rose Pine, Tokyo Night, Solarized, Monokai, Ayu)
- Video archetype template (`archetypes/videos.md`)
- Video single page template (`layouts/videos/single.html`)
- Video list page template (`layouts/videos/list.html`)
- Video styling (`assets/css/videos.scss`)
- Automatic video embed support for YouTube (both formats), Vimeo, and direct video URLs
- Video posts now display in main blog feed with responsive embeds
- Video posts now appear in archives shortcode with red accent color
- 🎬 emoji prefix for video posts in feeds, archives, and single pages
- Separate RSS feeds:
  - Posts only feed (`/posts/index.xml`)
  - Links only feed (`/links/index.xml`)
  - Videos only feed (`/videos/index.xml`)
  - Main feed includes all post types (`/index.xml`)
- Video URL and caption display in RSS feeds

### Changed
- Updated main feed templates to show video embeds (index.html, list.html)
- Updated archives shortcode to include videos post type
- Updated default RSS feed to include video posts with proper formatting
- Imported videos.scss in main style.scss

### Fixed
- Video container width on single pages now displays at full width
- Video figure display set to block for proper sizing

## [3.1.1] - 2025-10-19

### Added
- Archives shortcode now includes links and images post types
- Color-coded styling for links (green) and images (blue) in archives matching main feed

### Changed
- Archives now displays all post types (posts, links, images) in a unified chronological view

## [3.1.0] - 2025-10-19

### Added
- YouTube shortcode support (60186ef)
- Links in index.html (d7a3221)

## [3.0.0] - 2025-10-11

### Fixed
- Table rendering fixes (903eb05, 6a3429a, 9febe1c)

## [2.9.0] - 2025-10-08

### Added
- Theme comments support (7071068)

### Fixed
- Comments rendering (e7c48fe)
- Multiple final fixes (6b9df09, 6052d14)

## [2.8.0] - 2025-10-07

### Added
- Scrollbar customization (2d01598)
- Selection background styling (58e01d1)

### Fixed
- RSS feed fixes (e1f3850)
- Menu fixes (563ce99)
- Solarized theme fixes (193fbf9)
- Color scheme corrections (0fcd35a, 465bbba, f9ebfc7, 79b0231, ebced95, 9a8e5e1)
- Caption background (9a8e5e1)
- Footer responsiveness (03638f2)
- Image cropping (73b12f7)
- Link type styling (fc8b2ad, 59bbac5)
- Accent color corrections (3d5d13b)
- Border improvements (f9ebfc7)
- Various visual fixes (b4ddc34, 7dd3a04, 686abe1, ca774a4, fd6822d, ef20600, 6d7edee, bdbf06f)

## [2.7.0] - 2025-10-06

### Fixed
- Spacing improvements (ecfe682, ad741ee, 3a25de3)

## [2.6.0] - 2025-10-05

### Added
- Theme switcher functionality (505646f, 707c61b)
- Multiple color themes (b36f6a3)

### Fixed
- Link hover colors (1bf31c5, eb0faf2)
- Flash effect (03e2968)
- Hover behavior (3c142d2)
- Theme cleanup (d280281)

## [2.5.0] - 2025-10-04

### Fixed
- RSS feed improvements (ddb241e, a422524)

## [2.4.0] - 2025-10-02

### Added
- New link post type (9aed73d)
- New metadata system (580ffc2, 73e733a)
- Metadata partial (73e733a)

### Changed
- New color scheme (c52bdab)

### Fixed
- Safe URL handling (b7706a1)
- Padding adjustments (e61611c, 2590ffe, b8d1af7, c3f1ad5)
- Border styling (8fc1bc0, 1d1f03e, ccf7b9c, fe97c0a, 70caa36)
- Light theme compatibility (f6fbc88)
- Button styling (4e0b2cb)
- Background removal (429c443)
- Border color changes (93dd0b0)
- Dropdown menu enhancements (e7855b2)
- Multiple metadata fixes (157c637, 25c20d6, a1b19a2, fc9399a, d1602f5, 528f1ac, 896479e, 2ffb033, 446d1c8, c91957b, d39989b)

## [2.3.0] - 2025-09-20

### Added
- Logo animations (71426cb, 27150e3)

### Changed
- Logo size adjustments (af54516, b035849)

### Fixed
- Various fixes (e819682, 2c2ddb0)

## [2.2.0] - 2025-09-19

### Added
- New logo design (7fb0d7c, ceec937)

### Changed
- Logo font and styling (5bec9f7, 5975077, 65a5de0, 9003596, 40fb183, bd9ca0c)
- Logo centering (200da23, cf284d9, eb8fcb8, 9f14168, 4bf0958, 0a6c848, 3bcf4df, 6e54d71, bfa773d, f0e8990, 23f423b, 269ccd2)
- Letter spacing (6c27d60, 882e1ab)
- Hover effects (3ee6de2, bd53a03)

### Fixed
- Light theme compatibility (6cf5ac6)
- Font rendering (feba24f, 1605c11, a8e9f01)
- Spacing adjustments (cbe0a6d, 7474ad7, 0c6440d, acfa8c3, 4833f22, 956ef5e, ec4c82e, 7091634, e38754a, 988d10d)

## [2.1.0] - 2025-09-16

### Added
- Archive page support (d085684)
- Image galleries with lightbox (810836f, 51f3ef3)
- Image menu (ce5eb46)

### Fixed
- Menu fixes (0d6ec8b, d06109f)
- Various fixes (60e1b4d, 076ea86, b17e20c, 72dd5b2)

## [2.0.0] - 2025-08-30

### Added
- Conditional comment count display (abb833a)
- New partial structure (2a61768)
- Option to remove callout on pages (f4868db)

### Fixed
- Comment count conditional logic (abb833a, 32681aa, c6dceaa)
- Spacing fixes (ffb8feb, 0a69245)
- Various fixes (8b9d020, a8e575c)

### Removed
- Reverted some changes (632c8d6)

## [1.9.0] - 2025-08-28

### Added
- Footer menu (55e9e5e)
- Footer partial (942dc59)
- Music section in menu (5b5d423, b3e1e91)
- Mobile menu (6025a0f)

### Changed
- Menu styling overhaul (9b107cf, aa2596e, 50b31e6, 7c0ae64, cf4c266, a90786a, 22ef839, d43d0cc, e48a977, 45515c0, fffd7b1, bef9ec6, 265b416, 2af79cc)
- Font changes (94d1b22, 59d093c, ab0f276, 74b9f3d, 8595165)
- Font size adjustments (8c0e1a2, a88ede4, 247e024, bc985b8)
- Title font and color (e0ea6b7, e8a2c1d)
- Underline styling (2af79cc, 2413c29, a971f0a, c3e5199, cf3d66c, bf4065a, aebdd20)

### Fixed
- Footer menu fixes (49c22d8, 2afc81a, dee0236)
- Mobile menu fixes (6025a0f)
- Hover effects (d12b90e)

### Removed
- Footer menu removed (2bc91ec)

## [1.8.0] - 2025-08-29

### Added
- Dropdown menu (2d1a59d, 1791b9c, d12041a, 004e31b, 3533978, a39ae09, 4c3de2e)
- Light/dark theme toggle (f52f188, f385ded, 64ff6ac, f2e0ea1)

## [1.7.0] - 2025-08-25

### Changed
- Various style changes (052ae9c, 16e5b90, 2d32b8a)
- TLC improvements (58b2dd4)

## [1.6.0] - 2025-08-19

### Added
- Script support (926a412)

### Fixed
- Multiple test fixes (9b84fab, 9fe086b, b8614f5)

## [1.5.0] - 2025-08-08

### Added
- Last.fm integration (56ba69e)
- Stats link (4d6e72d)

### Changed
- Heading sizes (93282ac)

### Fixed
- Multiple test iterations (3915357, e86437b, 2a563cf, dca654c, c19459c, 587095f)
- Final adjustments (2e9a09e, 5fa768b, d165200, de97928)

## [1.4.0] - 2025-07-17

### Added
- New shortcode (aa91c0a)
- Footer menu (5cc12f0)
- Open option for links (721643a)

### Changed
- Larger sizing (b6c3eca)

### Fixed
- CSS improvements (b1f8773, 4ba18e5, f43b528, cd71ae9)
- Multiple fixes (5a05476, c29275c, 33b4e0b)

## [1.3.0] - 2025-07-12

### Added
- Email icon (9550d70)

### Fixed
- Email icon height (157367e, b4aa683)

## [1.2.0] - 2025-07-07

### Added
- Logo support (62e71d3, 9a81c10, cb279c6, c9f7178)
- Header customization (d5726b5)

### Changed
- Menu redesign (69d8868)
- Title styling (d57213f, 0fe7a39)
- Logo positioning (efce2ca, f349273, ca1440b)

### Fixed
- Multiple layout fixes (2e60f36, 4cdbe5e, fdfffd4, 38b95f4, 2443f3b, 1066c5b, 63c5006, 88fabdc, 476bf29)
- Header removal/restoration (eed248d, d5726b5)
- Calls fixes (865cf32)
- Padding and margin (7671b24, 428fef1, 80467c2, 596d369)

## [1.1.0] - 2025-07-06

### Changed
- Background color (04d932c)
- Link styling (0c2a7ef)
- Orange accent color (3965d75)

### Fixed
- Multiple color fixes (c18ef86, 8da0be6, 21ad1bd)

## [1.0.0] - 2025-07-05

### Added
- Pagination support (b1eddec)
- Comment system support (58de6bf)
- Mastodon integration (7fcd25d)

### Changed
- Extensive CSS overhaul (9648c44, 043952c, 5d3dfca, fdd5b36, bb823cd, f8a268d, 8548f28, 9dcf97e, 0793430, b53d4cf, 9e22ab5, b9b0eba, 11bd9fd, 86e957a, 5795360)

## [0.9.0] - 2025-06-30

### Fixed
- RSS feed fixes (fd4b517, e140574)

### Removed
- Reverted some changes (ba81996)

## [0.8.0] - 2025-06-29

### Added
- Comment count display (7501244)
- Extended footer (bbe27b7)

### Changed
- Footer updates (d6c6aed)

### Removed
- Footer removed (211d3bb)

## [0.7.0] - 2025-06-24

### Added
- Link functionality (5823d2c)
- Comment system (cd22ef9, d1be761, de41dac)
- Pagination (eed5c93)

### Changed
- Code cleanup (e3d18f7)

### Fixed
- Link rendering (c686df9, 39a793b, 2008716, aef225b)
- Spacing (daf135f, 5232d4d)

### Removed
- Comments removed (d7cc5fd)
- Links removed (6722240)

## [0.6.0] - 2025-06-23

### Added
- Analytics support (40c4e94)
- Mastodon link (7e2c353)
- RSS improvements (c4d0e72)

## [0.5.0] - 2025-03-27

### Changed
- Updated module path to version v2 (bc3b1ca)

## [0.4.0] - 2025-03-12

### Added
- Paper theme (light theme support) (1d17b9a, 74be984)

### Fixed
- Menu color hardcoding (3e101bd)
- Package name color in Go (2cff086)
- Punctuation color extraction (a0bcb9c)
- Hardcoded colors in syntax highlighting (2327489)

### Changed
- De-duplicated CSS variable definitions (41fe5f3)
- Moved color variables (babd08d)
- Changed spaces indent back to 2 (c51feb3)

## [0.3.0] - 2025-02-16

### Fixed
- Tags URL handling with integers (fbad744)
- Tags URL regression with backslash (fcb047a)

## [0.2.0] - 2025-01-21

### Fixed
- Local theme variables (4b7e56a)
- README update (default color is blue) (0d3c5fd)

## [0.1.0] - 2024-12-22

### Fixed
- Copyright footer alignment with `fullWidthTheme` and `centerTheme` (90c0a89)
- Media queries not working properly (3f85215)
- CSS nesting issues (588095c)

## [0.0.1] - 2024-08-23

### Added
- Call to action banner (74f38a9)
- Cover caption support (9795a75)
- Comments counter partial (a85b82b)
- Single base partial (a85b82b)
- CSS variables for customization (4bc7d37, c592d7c, fa19e20, c55361b)
- Accent contrast color variable (fa19e20)
- Utterances comment system demo (9b2fc88)
- Submenu support (4ab0722)
- Article link colorization option (c531cd8)
- Copyright parameter support in footer (c9e3c82)

### Changed
- Default footer (bcf3a31)
- Config rebranding (9f17b5f)
- Migrated to native CSS variables (4bc7d37, c592d7c)
- Updated demo site (004534d)
- Lowered minimum Hugo version (e755de9)
- Rearranged menus (a0dbe90)
- Show figure only on post pages (4779fd6)

### Fixed
- GitHub repo URL typo (22dc46f)
- RGBA to color-mix with transparent (58e5516)
- Comments counter in single.html (d4ec986, 79a14e8)
- Project ID (f7c9337)
- Typos (cf3bc17, 46ac8d9)
- CSS issues (17c236d, 9e870a1)

### Removed
- Deprecated resources.ToCSS (84cbf7e)
- Lorem text replaced with about page text (031c964)

### Documentation
- Updated README (cf87ac2, ee9eea2, e1866ff, d93d82f, 79e40ef, 0d3c5fd)
- Demo site updates (0172b4e, 7bf0ba6, 39fcee3, 5864d79)
- Added blogpost about CSS Variables (7bf0ba6)

### Chore
- Added VSCode workspace recommendations (8704e19)
- Added Firebase exampleSite deploy (18ee33c)
- Migrated from Firebase (969ec9a)
- Updated pipelines (39fcee3)
- Updated screenshots (5864d79)
- Updated theme.toml (df1265c)

---

**Fork Information:**
- Original theme: [Terminal by panr](https://github.com/panr/hugo-theme-terminal)
- Fork date: 2024-07-28 (commit d45d6d6)
- Forked by: Mirus (re-terminal)

[3.2.0]: https://github.com/mtwb47/re-terminal/compare/v3.1.1...v3.2.0
[3.1.1]: https://github.com/mtwb47/re-terminal/compare/v3.1.0...v3.1.1
[3.1.0]: https://github.com/mtwb47/re-terminal/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/mtwb47/re-terminal/compare/v2.9.0...v3.0.0
[2.9.0]: https://github.com/mtwb47/re-terminal/compare/v2.8.0...v2.9.0
[2.8.0]: https://github.com/mtwb47/re-terminal/compare/v2.7.0...v2.8.0
[2.7.0]: https://github.com/mtwb47/re-terminal/compare/v2.6.0...v2.7.0
[2.6.0]: https://github.com/mtwb47/re-terminal/compare/v2.5.0...v2.6.0
[2.5.0]: https://github.com/mtwb47/re-terminal/compare/v2.4.0...v2.5.0
[2.4.0]: https://github.com/mtwb47/re-terminal/compare/v2.3.0...v2.4.0
[2.3.0]: https://github.com/mtwb47/re-terminal/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/mtwb47/re-terminal/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/mtwb47/re-terminal/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/mtwb47/re-terminal/compare/v1.9.0...v2.0.0
[1.9.0]: https://github.com/mtwb47/re-terminal/compare/v1.8.0...v1.9.0
[1.8.0]: https://github.com/mtwb47/re-terminal/compare/v1.7.0...v1.8.0
[1.7.0]: https://github.com/mtwb47/re-terminal/compare/v1.6.0...v1.7.0
[1.6.0]: https://github.com/mtwb47/re-terminal/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/mtwb47/re-terminal/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/mtwb47/re-terminal/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/mtwb47/re-terminal/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/mtwb47/re-terminal/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/mtwb47/re-terminal/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/mtwb47/re-terminal/compare/v0.9.0...v1.0.0
[0.9.0]: https://github.com/mtwb47/re-terminal/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/mtwb47/re-terminal/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/mtwb47/re-terminal/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/mtwb47/re-terminal/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/mtwb47/re-terminal/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/mtwb47/re-terminal/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/mtwb47/re-terminal/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/mtwb47/re-terminal/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/mtwb47/re-terminal/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/mtwb47/re-terminal/compare/d45d6d6...v0.0.1
