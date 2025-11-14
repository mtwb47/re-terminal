# FediComment Integration

The re-terminal theme now includes **FediComment**, a self-hosted commenting system that uses Mastodon for comments.

## How It Works

1. Write a blog post
2. Post about it on your Mastodon instance
3. Add the post ID to your article's frontmatter
4. Replies to your Mastodon post appear as comments on your blog!

## Features

- ✅ Works with Mastodon and Mastodon-compatible platforms
- ✅ Automatically themed to match all re-terminal color schemes
- ✅ Nested comment threads
- ✅ Custom emoji support
- ✅ Avatar and metadata display
- ✅ Lazy loading (comments load on demand)
- ✅ Privacy-friendly (no tracking, no third parties)
- ✅ No database or server-side code required
- ✅ Direct API access (no proxy needed)

## Usage

### Step 1: Post About Your Article

After publishing your blog post, create a post about it on Mastodon:

```
Just published a new article about Hugo themes!

https://yourblog.com/posts/my-article/

#Hugo #WebDev
```

### Step 2: Get the Status ID

Find the status ID from your post URL:

**Example:** `https://fosstodon.org/@thelinuxcast/123456789` → Status ID: `123456789`

The status ID is the number at the end of your post URL.

### Step 3: Add to Frontmatter

Add the Fediverse information to your post's frontmatter:

**YAML:**
```yaml
---
title: "My Blog Post"
date: 2025-01-12
fediverse:
  instance: "https://fosstodon.org"
  username: "yourname"
  id: "123456789"
---
```

**TOML:**
```toml
+++
title = "My Blog Post"
date = 2025-01-12

[fediverse]
instance = "https://fosstodon.org"
username = "yourname"
id = "123456789"
+++
```

### Step 4: Build and Deploy

That's it! When users visit your blog post, they can click "Load Comments from Fediverse" to see all replies.

## Disabling Comments on Specific Posts

To disable comments on a post, add to your frontmatter:

```yaml
hideComments: true
```

## Configuration Options

The FediComment widget supports these parameters (configured in `layouts/partials/comments.html`):

- `instance` (required): Your Fediverse instance URL
- `id` (required): The status/post ID
- `username` (optional): Your username for the reply link
- `loadButtonText`: Text for the load button (default: "Load Comments from Fediverse")
- `replyButtonText`: Text for the reply button (default: "💬 Reply on Fediverse")
- `noCommentsText`: Message when no comments exist
- `maxDepth`: Maximum nesting level for replies (default: 10)
- `dateFormat`: 'relative' or 'absolute' (default: 'relative')

## Theming

FediComment automatically adapts to all re-terminal theme families and variants:
- Gruvbox (dark/light)
- Everforest (dark/light)
- Catppuccin (dark/light)
- High Contrast (dark/light)
- Oxocarbon (dark/light)
- Dracula (dark/light)
- Nord (dark/light)
- Rose Pine (dark/light)
- Tokyo Night (dark/light)
- Solarized (dark/light)
- Monokai (dark/light)
- Ayu (dark/light)

The styling is defined in `static/style.css` using CSS variables.

## Example Workflow

1. Write post: `content/posts/hello-world.md`
2. Build and deploy: `hugo && deploy`
3. Post on Mastodon: "Check out my new post! https://yourblog.com/posts/hello-world/"
4. Copy status ID from the Mastodon post URL (e.g., `https://fosstodon.org/@thelinuxcast/123456789` → `123456789`)
5. Edit `content/posts/hello-world.md` and add:
   ```toml
   [fediverse]
   instance = "https://fosstodon.org"
   username = "thelinuxcast"
   id = "123456789"
   ```
6. Rebuild and redeploy: `hugo && deploy`
7. People reply to your Mastodon post
8. Their replies appear as comments on your blog!

## Privacy & Security

FediComment:
- Makes direct API calls to your Mastodon instance
- Does not use cookies or localStorage
- Does not track users
- Does not send data to third parties
- Loads comments only when users click "Load Comments"
- Includes XSS protection (sanitizes HTML, removes scripts)
- Uses Mastodon's public API (no authentication required)

## Troubleshooting

**Comments not loading?**
- Check that the status ID is correct (numeric only)
- Verify the instance URL has no trailing slash
- Ensure your Mastodon post is public
- Check browser console for errors
- Test the API directly: `https://your-instance.social/api/v1/statuses/YOUR_ID/context`

**Styling issues?**
- Make sure `static/style.css` is loaded
- Verify theme is properly set with theme switcher
- Check that CSS variables are defined for your theme

**Reply button 404?**
- Verify the `username` field is set in frontmatter
- Check the status ID matches your Mastodon post

## Files

- `static/js/fedicomment.js` - Main JavaScript widget
- `static/style.css` - FediComment theming (lines 1478-1685)
- `layouts/partials/comments.html` - Hugo template partial

## Why Mastodon?

Mastodon's public API allows unauthenticated access to public posts, making it perfect for a simple, client-side commenting system. No backend servers, no databases, no authentication required - just clean, open web technology.

## Credits

Inspired by Carl Schwan's [blog post](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/) on Mastodon comments.
