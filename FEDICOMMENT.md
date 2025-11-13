# FediComment Integration

The re-terminal theme now includes **FediComment**, a self-hosted commenting system that uses the Fediverse (Mastodon, GoToSocial, Pleroma, etc.) for comments.

## How It Works

1. Write a blog post
2. Post about it on your Fediverse instance (Mastodon, GoToSocial, etc.)
3. Add the post ID to your article's frontmatter
4. Replies to your Fediverse post appear as comments on your blog!

## Features

- ✅ Works with Mastodon, GoToSocial, and any Mastodon API-compatible platform
- ✅ Automatically themed to match all re-terminal color schemes
- ✅ Nested comment threads
- ✅ Custom emoji support
- ✅ Avatar and metadata display
- ✅ Lazy loading (comments load on demand)
- ✅ Privacy-friendly (no tracking, no third parties)
- ✅ No database or server-side code required

## Usage

### Step 1: Post About Your Article

After publishing your blog post, create a post about it on your Fediverse instance:

```
Just published a new article about Hugo themes!

https://yourblog.com/posts/my-article/

#Hugo #WebDev
```

### Step 2: Get the Status ID

Find the status ID from your post URL:

- **Mastodon**: `https://mastodon.social/@username/123456789` → Status ID: `123456789`
- **GoToSocial**: `https://gts.example.com/@username/01HQ123ABC...` → Status ID: `01HQ123ABC...`

### Step 3: Add to Frontmatter

Add the Fediverse information to your post's frontmatter:

**YAML:**
```yaml
---
title: "My Blog Post"
date: 2025-01-12
fediverse:
  instance: "https://mastodon.social"
  username: "yourname"
  id: "123456789012345678"
---
```

**TOML:**
```toml
+++
title = "My Blog Post"
date = 2025-01-12

[fediverse]
instance = "https://mastodon.social"
username = "yourname"
id = "123456789012345678"
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
4. Copy status ID from the Mastodon post URL
5. Edit `content/posts/hello-world.md` and add:
   ```yaml
   fediverse:
     instance: "https://mastodon.social"
     username: "yourname"
     id: "123456789"
   ```
6. Rebuild and redeploy: `hugo && deploy`
7. People reply to your Mastodon post
8. Their replies appear as comments on your blog!

## Privacy & Security

FediComment:
- Makes direct API calls to the Fediverse instance you specify
- Does not use cookies or localStorage
- Does not track users
- Does not send data to third parties
- Loads comments only when users click "Load Comments"
- Includes XSS protection (sanitizes HTML, removes scripts)

## GoToSocial Support

FediComment fully supports GoToSocial! Just use your GoToSocial instance URL and post ID:

```yaml
fediverse:
  instance: "https://gts.example.com"
  id: "01HQ123ABCDEF123456789"  # GoToSocial uses ULID format
  username: "yourname"
```

## Troubleshooting

**Comments not loading?**
- Check that the status ID is correct
- Verify the instance URL has no trailing slash
- Ensure your Fediverse post is public
- Check browser console for errors

**Styling issues?**
- Make sure `static/style.css` is loaded
- Verify theme is properly set with theme switcher
- Check that CSS variables are defined for your theme

**CORS errors?**
- This is a server-side issue with some Fediverse instances
- Most major instances (Mastodon, GoToSocial) have CORS properly configured
- If you encounter issues, contact your instance administrator

## Files

- `static/js/fedicomment.js` - Main JavaScript widget
- `static/style.css` - FediComment theming (lines 1478-1685)
- `layouts/partials/comments.html` - Hugo template partial

## Credits

Inspired by Carl Schwan's [blog post](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/) on Mastodon comments.
