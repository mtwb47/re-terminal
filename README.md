# re-Terminal

## Welcome to Hugo Theme re-Terminal!

Hello! I'm thrilled to announce a brand new fork of Hugo Theme Terminal, now officially known as Hugo Theme Re-Terminal!

As the maintainer, I'm excited to share that this theme will continue to evolve and receive updates with new features. Why? Because I use it myself! You can bet your last byte that any changes I make will be thoroughly tested and refined for real-world use.

This fork aims to breathe new life into the original Terminal theme, which was once a popular choice among Hugo enthusiasts. Unfortunately, it had been neglected over time. But no more! With re-Terminal, we're committed to keeping the spirit of the original alive while adding fresh perspectives and innovations.

So, welcome aboard! I'm excited to have you join us on this journey as we shape the future of Hugo Theme re-Terminal together. Let's get started!

---

![re-Terminal](https://github.com/mirus-ua/hugo-theme-re-terminal/blob/main/images/screenshot.png?raw=true)

### DEMO - https://mtwb.blog

### ⚠️ The theme needs at least Hugo **Extended** v0.128.0.

re-Terminal before v2.1.0 may work with versions of HUGO less than v0.128.0 below to v0.90.0 if you change the min version manually in mod files, but I didn't test it

---

## Table of Contents

- [Features](#features)
- [What's New in re-Terminal](#whats-new-in-re-terminal)
- [CSS Variables](#css-variables)
- [Built-in shortcodes](#built-in-shortcodes)
- [Code highlighting](#code-highlighting)
- [How to start](#how-to-start)
- [How to run your site](#how-to-run-your-site)
- [How to configure](#how-to-configure)
- [Post archetype](#post-archetype)
- [Content Types](#content-types)
- [Add-ons](#add-ons)
- [How to edit the theme](#how-to-edit)
- [Found a bug?](#bug)
- [New cool idea or feature](#feature)
- [Terminal theme user?](#terminal-theme-user)
- [License](#license)

## Features

- **6 duotone themes**, depending on your preferences (blue is default, red, orange, green, pink, paper)
- **Theme switcher** for dynamic theme selection
- **Multiple post types** including standard posts, links, and images with galleries
- [**Fira Code**](https://github.com/tonsky/FiraCode) as default monospaced font. It's gorgeous!
- **Really nice duotone**, custom syntax highlighting based on [**PrismJS**](https://prismjs.com)
- **Fully responsive** design with mobile menu support
- **Fully based on Hugo ecosystem** (Pipes and Modules)
- **Native CSS variables** for super easy color customization
- **Archive page** with chronological post listing
- **Image galleries** with lightbox support
- **YouTube shortcode** for embedded videos
- **FediComment** - Mastodon-based commenting system (no backend required)
- **Customizable scrollbar** and selection styling
- **Logo animations** and customization
- **Light/dark theme toggle**
- **Footer menu** support
- **Dropdown menus** and submenus
- **Sticky menu** with configurable position (top, bottom, or none)

## What's New in re-Terminal

This fork includes extensive improvements and new features compared to the original Terminal theme:

### Design & Theming
- **Migrated from SCSS to CSS Native Variables** - brings super easy color customization via `style.css`
- **Theme switcher functionality** - dynamically change between color themes
- **Light theme support** - including the "paper" theme for light mode enthusiasts
- **Custom scrollbar** and selection background styling
- **Logo animations** with customizable fonts and styling
- **Improved responsive design** with enhanced mobile menu

### Content Types & Features
- **Link post type** - share and curate external links with special styling
- **Image galleries** - with lightbox support for beautiful image displays
- **YouTube shortcode** - easily embed YouTube videos
- **Archive page** - unified chronological view of all post types (posts, links, images) with color-coded styling
- **Comments counter** - display comment counts on pages
- **Cover captions** (`coverCaption`) - add information about your article cover images
- **Site top banner** - call to action banner support

### Navigation & Menus
- **Submenus** for the main menu (since v2.1.0)
- **Footer menu** with extended footer partials
- **Dropdown menu** support
- **Mobile menu** improvements

### Integrations
- **FediComment** - Self-hosted commenting via Mastodon - see [FEDICOMMENT.md](FEDICOMMENT.md)
- **Last.fm shortcode** - display your music listening activity (requires Last.fm data via GitLab CI/CD or similar - not included with theme)
- **Mastodon integration** - connect your Mastodon profile
- **Analytics support** - easily add your analytics tracking
- **RSS improvements** - better RSS feed generation

### Developer Experience
- **Removed all deprecated HUGO code** - fully compatible with modern Hugo
- **Post base primitive** - flexible pages where you can embed your code
- **Extended head/footer partials** - easy customization without modifying theme files
- **Metadata system** - improved post metadata handling
- **Table rendering fixes** - better table support and styling

## CSS Variables

You can find all of them in the browser's page inspector, but here is the list with default values anyway:

```css
  /* the colors are from dark pallets; light themes have different defaults */
  :root {
    --accent: #23B0FF; /* 1 of 5 basic colors */
    --background: color-mix(in srgb, var(--accent) 2%, #1D1E28 98%); /* background color; inherit shades of the accent */
    --accent-contrast-color: black; /* mainly uses for text on the accent backgrounds but not limited */
    --color: white; /* text color, also some other text use the variable in color mixing */
    --border-color: rgba(255, 255, 255, .1); /* border color */
    --article-link-color: var(inherit); /* for you, who want to colorize your article links */
    --menu-color: black; /* a variable for menus color */

    /* code syntax */
    /* take a look at themes/re-terminal/assets/css/syntax.scss to understand in detail which color stands for */
    --syntax-func-color: color-mix(in srgb, var(--accent) 70%, #999 30%);
    --syntax-var-color: color-mix(in srgb, var(--accent) 90%, transparent);
    --syntax-value-color: color-mix(in srgb, var(--accent), white);

    /* breakpoints */
    /* unfortunately, native CSS variables don't support media queries, so use SCSS vars instead */
    $phone: 684px;
    $tablet: 900px;
  }
```

### Theme Colors

Available theme colors: `blue` (default), `orange`, `red`, `green`, `pink`, `paper` (light theme)

Set your preferred theme in the config:

```toml
[params]
  themeColor = "orange"
```

## Built-in shortcodes

### `image`
Display an image with optional positioning and styling.

**Required props:** `src`
**Optional props:** `alt`, `position` (left | center | right), `style`

```go
{{< image src="/img/hello.png" alt="Hello Friend" position="center" style="border-radius: 8px;" >}}
```

### `figure`
Same as `image`, plus caption support.

**Required props:** `src`
**Optional props:** `alt`, `position`, `style`, `caption`, `captionPosition` (left | center | right), `captionStyle`

```go
{{< figure src="/img/hello.png" alt="Hello Friend" position="center" style="border-radius: 8px;" caption="Hello Friend!" captionPosition="right" captionStyle="color: red;" >}}
```

### `code`
Display collapsible code blocks with syntax highlighting.

**Required props:** `language`
**Optional props:** `title`, `id`, `expand` (default "△"), `collapse` (default "▽"), `isCollapsed`

```go
{{< code language="css" title="Really cool snippet" id="1" expand="Show" collapse="Hide" isCollapsed="true" >}}
pre {
  background: #1a1a1d;
  padding: 20px;
  border-radius: 8px;
}
{{< /code >}}
```

### `collapse`
Create collapsible sections.

**Optional props:** `title`, `open`, `class`

```go
{{< collapse title="Click to expand" >}}
This content is hidden by default.
{{< /collapse >}}
```

### `youtube`
Embed YouTube videos with responsive sizing.

**Required:** Video ID or full YouTube URL

```go
{{< youtube "dQw4w9WgXcQ" >}}
```

Or with full URL:
```go
{{< youtube "https://www.youtube.com/watch?v=dQw4w9WgXcQ" >}}
```

### `archives`
Display a chronological archive of all posts, links, and images grouped by year.

```go
{{< archives >}}
```

### `wordcount`
Display blog statistics including total posts and word count.

```go
{{< wordcount >}}
```

### `lastfm`
Display Last.fm listening statistics including recent tracks, top tracks, and top artists.

**Note:** Requires Last.fm data to be fetched via GitLab CI/CD or similar automation and saved to `data/lastfm/`. This functionality is not included with the theme.

```go
{{< lastfm >}}
```

### `recent`
Display most recent Last.fm scrobble only (compact version).

```go
{{< recent >}}
```

## Code highlighting

A custom syntax highlighting based on PrismJS. All you need to do is to wrap you code like this:

````
```html
  // your code here
```
````

**Supported languages**: actionscript, apacheconf, applescript, bash, c, clike, cmake, coffeescript, cpp, csharp, csp, css, css-extras, diff, django, docker, elixir, elm, erlang, flow, fsharp, git, go, graphql, haml, handlebars, haskell, http, java, javascript, json, jsx, kotlin, latex, less, llvm, makefile, markdown, markup, markup-templating, nasm, objectivec, ocaml, perl, php, php-extras, powershell, processing, pug, python, r, reason, ruby, rust, sass, scala, scheme, scss, sql, stylus, swift, textile, toml, tsx, twig, typescript, vim, visual-basic, wasm, yaml.

## How to start

You can download the theme manually by going to [https://github.com/mirus-ua/hugo-theme-re-terminal.git](https://github.com/mirus-ua/hugo-theme-re-terminal.git) and pasting it to `themes/re-terminal` in your root directory.

You can also choose **one of the 3 possibilities** to install the theme:

1. as Hugo Module
2. as a standalone local directory
3. as a git submodule

⚠️ The theme needs at least Hugo **Extended** v0.128.x.

### Install theme as Hugo Module

```bash
# If this is the first time you're using Hugo Modules
# in your project. You have to initiate your own module before
# you fetch the theme module.
#
# hugo mod init [your website/module name]
hugo mod get github.com/mirus-ua/hugo-theme-re-terminal
```

and in your config file add:

```toml
[module]
  # this is needed when you fetch the theme as a submodule to your repo.
  # replacements = "github.com/mirus-ua/hugo-theme-re-terminal -> themes/re-terminal"
[[module.imports]]
  path = 'github.com/mirus-ua/hugo-theme-re-terminal'
```

Keep in mind that the theme by default won't show up in the `themes` directory. This means that you are using the theme as it was on the repository at the moment you fetched it. Your local `go.sum` file keeps all the references. Read more about Hugo Modules in the [official documentation](https://gohugo.io/hugo-modules/).

### Install theme locally

```bash
git clone https://github.com/mirus-ua/hugo-theme-re-terminal.git themes/re-terminal
```

This will clone the repository directly to the `themes/re-terminal` directory.

### Install theme as a submodule

```bash
git submodule add -f https://github.com/mirus-ua/hugo-theme-re-terminal.git themes/re-terminal
```

This will install the repository as a sumbodule in the `themes/re-terminal` directory.

⚠️ If you encounter any issues with:

```bash
Error: module "re-terminal" not found; either add it as a Hugo Module or store it in "[...your custom path]/themes".: module does not exist
```

then please try to remove `theme = "re-terminal"` from your config file.

## How to run your site

```bash
hugo server -t re-terminal
```

and go to `localhost:1313` in your browser. From now on all the changes you make will go live, so you don't need to refresh your browser every single time.

## How to configure

The theme doesn't require any advanced configuration. Just copy:

```toml
baseurl = "/"
languageCode = "en-us"
# Add it only if you keep the theme in the `themes` directory.
# Remove it if you use the theme as a remote Hugo Module.
theme = "re-terminal"
pagination.pagerSize = 5

[params]
  # dir name of your main content (default is `content/posts`).
  # the list of set content will show up on your index page (baseurl).
  contentTypeName = "posts"

  # ["orange", "blue", "red", "green", "pink", "paper"]
  themeColor = "orange"

  # if you set this to 0, only submenu trigger will be visible
  showMenuItems = 2

  # show selector to switch language
  showLanguageSelector = false

  # set theme to full screen width
  fullWidthTheme = false

  # center theme with default width
  centerTheme = false

  # if your resource directory contains an image called `cover.(jpg|png|webp)`,
  # then the file will be used as a cover automatically.
  # With this option you don't have to put the `cover` param in a front-matter.
  autoCover = true

  # set post to show the last updated
  # If you use git, you can set `enableGitInfo` to `true` and then post will automatically get the last updated
  showLastUpdated = false

  # set a custom favicon (default is a `themeColor` square)
  # favicon = "favicon.ico"

  # Provide a string as a prefix for the last update date. By default, it looks like this: 2020-xx-xx [Updated: 2020-xx-xx] :: Author
  # updatedDatePrefix = "Updated"

  # set all headings to their default size (depending on browser settings)
  # oneHeadingSize = true # default

  # whether to show a page's estimated reading time
  # readingTime = false # default

  # whether to show a table of contents
  # can be overridden in a page's front-matter
  # Toc = false # default

  # set title for the table of contents
  # can be overridden in a page's front-matter
  # TocTitle = "Table of Contents" # default

  # sticky menu position on desktop (min-width: 769px)
  # options: "top" (menu above logo, sticky), "bottom" (menu below logo, sticky), "none" (no sticky behavior)
  # default: "bottom"
  # stickyMenuPosition = "bottom"

  # you can set a banner on the top of the page with a call to action
  # defaults: dismissible = false; URL is optional
  # [params.banner]
  # dismissible = false
  # text = "Check it out on GitHub"
  # url = "https://github.com/mirus-ua/hugo-theme-re-terminal"

[params.twitter]
  # set Twitter handles for Twitter cards
  # see https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started#card-and-content-attribution
  # do not include @
  creator = ""
  site = ""

[languages]
  [languages.en.params]
    languageName = "English"
    title = "re-Terminal"
    subtitle = "A simple, retro theme for Hugo"
    owner = ""
    keywords = ""
    copyright = ""
    menuMore = "Show more"
    readMore = "Read more"
    readOtherPosts = "Read other posts"
    newerPosts = "Newer posts"
    olderPosts = "Older posts"
    missingContentMessage = "Page not found..."
    missingBackButtonLabel = "Back to home page"
    minuteReadingTime = "min read"
    words = "words"

    [languages.en.params.logo]
      logoText = "re-Terminal"
      logoHomeLink = "/"

    [languages.en.menu]
      # Submenus is available since v2.1.0
      # [[languages.en.menu.main]]
      #   identifier = "submenuParent"
      #   name = "Submenu"
      # [[languages.en.menu.main]]
      #   parent = "submenuParent"
      #   identifier = "anItem"
      #   name = "AnItem"
      [[languages.en.menu.main]]
        identifier = "about"
        name = "About"
        url = "/about"
      [[languages.en.menu.main]]
        identifier = "showcase"
        name = "Showcase"
        url = "/showcase"

[module]
  # In case you would like to make changes to the theme and keep it locally in you repository,
  # uncomment the line below (and correct the local path if necessary).
  # --
  # replacements = "github.com/mirus-ua/hugo-theme-re-terminal -> themes/re-terminal"
[[module.imports]]
  path = 'github.com/mirus-ua/hugo-theme-re-terminal'
```

to `config.toml` file in your Hugo root directory and change params fields. In case you need, here's [a YAML version](https://gist.github.com/panr/9eeea6f595c257febdadc11763e3a6d1).

**NOTE:** Please keep in mind that `main menu` supports submenu nesting (since v2.1.0).

## Post archetype

See the default `post` file params supported by the theme — https://github.com/mirus-ua/hugo-theme-re-terminal/blob/main/archetypes/posts.md

## Content Types

re-Terminal supports multiple content types with different front matter configurations:

### Standard Posts

Create with: `hugo new posts/my-post.md`

```toml
+++
title = "My Post Title"
date = "2025-10-19"
author = ""
authorTwitter = "" #do not include @
cover = ""
coverCaption = ""
tags = ["tag1", "tag2"]
keywords = ["keyword1", "keyword2"]
description = ""
showFullContent = false
readingTime = false
hideComments = false
color = "" #color from the theme settings
+++
```

### Link Posts

Create with: `hugo new links/my-link.md`

Link posts appear with special styling and a 🔗 icon in archives.

```toml
+++
title = "Interesting Article"
date = "2025-10-19"
author = ""
authorTwitter = "" #do not include @
cover = ""
coverCaption = ""
tags = ["links", "web"]
keywords = [""]
description = ""
showFullContent = false
readingTime = false
hideComments = false
color = "" #color from the theme settings
type = "links"
link_url = "https://example.com/article" # The external URL for the link post
+++
```

### Image Posts

Create with: `hugo new images/my-image.md`

Image posts support galleries with lightbox and appear with a 📷 icon in archives.

```toml
+++
title = "My Photo Gallery"
date = "2025-10-19"
author = ""
type = "images"
image = ""
imageAlt = ""
imageCaption = ""
tags = ["photography", "gallery"]
keywords = [""]
description = ""
showFullContent = true
readingTime = false
hideComments = false
color = ""
+++
```

## Add-ons

- **Comments** — for adding comments to your blog posts please take a look at `layouts/partials/comments.html` https://github.com/mirus-ua/hugo-theme-re-terminal/blob/main/layouts/partials/comments.html.
- **Comments counter** — for adding comments counter to your blog posts please take a look at `layouts/partials/comments_counter.html` https://github.com/mirus-ua/hugo-theme-re-terminal/blob/main/layouts/partials/comments_counter.html.
- **Extended Head** — please take a look at `layouts/partials/extended_head.html` https://github.com/mirus-ua/hugo-theme-re-terminal/blob/main/layouts/partials/extended_head.html
- **Extended Footer** — please take a look at `layouts/partials/extended_footer.html` https://github.com/mirus-ua/hugo-theme-re-terminal/blob/main/layouts/partials/extended_footer.html

### Low-level add-ons

- **Post base** — Renders bare minimum of posts' content. For motivation and details take a look at https://github.com/mirus-ua/hugo-theme-re-terminal/blob/main/layouts/partials/single_basic.html

## How to edit the theme `<a id="how-to-edit" />`

If you are using as a remote Hugo Module (you don't have the theme files in the `theme/re-terminal`) and you have to override only some of the styles, you can do this easily by adding `static/style.css` in your root directory and point things you want to change.

Thanks to the native CSS variables migration, you can easily customize colors without touching the theme files. Just override the CSS variables in your `static/style.css`:

```css
:root {
  --accent: #FF6B35; /* Change accent color */
  --background: #1a1a1a; /* Change background */
  --color: #f0f0f0; /* Change text color */
}
```

If you have the theme files in the theme directory, then you can directly edit anything in the theme, you just have to go to `themes/re-terminal` and modify the files. No compilation step needed.

## Found a bug? `<a id="bug" />`

If you spot any bugs, please use [Issue Tracker](https://github.com/mirus-ua/hugo-theme-re-terminal/issues) or create a new [Pull Request](https://github.com/mirus-ua/hugo-theme-re-terminal/pulls) to fix the issue.

## New cool idea or feature? `<a id="feature" />`

The theme is in constant development since 2019 and has got many cool features that helped many of you and made the theme better. But there were also many features that I wasn't sure about because I want to keep the theme as simple as possible.

So, let's say you have an idea of how to extend the theme. That's cool and you're welcome to do that, just follow these steps:

- fork the theme
- implement the feature
- write an instruction how to use the feature
- give a working example of the implementation for other users
- add info about your work to `COMMUNITY-FEATURES.md`
- make a PR with edited `COMMUNITY-FEATURES.md`

This will help keeping the theme close to its roots, and also allow anyone who wishes to improve it and match their needs, to do whatever they want.

Sounds OK? Cool, let's rock! 🤘

## Terminal theme user?

I'd be happy to know more about you and what you are doing. If you want to share it, please make a contribution and [add your site to the list](https://github.com/mirus-ua/hugo-theme-re-terminal/blob/main/USERS.md)! 🤗

## Changelog

For a detailed list of all changes, improvements, and new features, please see [CHANGELOG.md](CHANGELOG.md).

## License

Copyright © 2019-2022 Radosław Kozieł ([@panr](https://twitter.com/panr))

Copyright © 2024-now Mirus

The theme is released under the MIT License. Check the [original theme license](https://github.com/mirus-ua/hugo-theme-re-terminal/blob/main/LICENSE.md) for additional licensing information.
