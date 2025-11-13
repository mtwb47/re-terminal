/**
 * FediComment - Fediverse commenting system for static sites
 * Works with Mastodon, GoToSocial, and other ActivityPub platforms
 *
 * Usage:
 * new FediComment({
 *   containerEl: '#comments',
 *   instanceUrl: 'https://mastodon.social',
 *   statusId: '12345678901234567',
 *   proxyUrl: 'https://proxy.example.com' // Optional, for GoToSocial
 * });
 */

class FediComment {
  constructor(config) {
    this.config = {
      containerEl: config.containerEl,
      instanceUrl: config.instanceUrl?.replace(/\/$/, ''), // Remove trailing slash
      statusId: config.statusId,
      username: config.username, // Username for reply link
      proxyUrl: config.proxyUrl?.replace(/\/$/, ''), // Optional proxy URL
      loadButtonText: config.loadButtonText || 'Load Comments from Fediverse',
      replyButtonText: config.replyButtonText || 'Reply on Fediverse',
      noCommentsText: config.noCommentsText || 'No comments yet. Be the first to reply!',
      errorText: config.errorText || 'Failed to load comments. Please try again later.',
      maxDepth: config.maxDepth || 10,
      dateFormat: config.dateFormat || 'relative' // 'relative' or 'absolute'
    };

    this.container = typeof this.config.containerEl === 'string'
      ? document.querySelector(this.config.containerEl)
      : this.config.containerEl;

    if (!this.container) {
      console.error('FediComment: Container element not found');
      return;
    }

    if (!this.config.instanceUrl || !this.config.statusId) {
      console.error('FediComment: instanceUrl and statusId are required');
      return;
    }

    this.init();
  }

  init() {
    // Create load button
    const loadButton = document.createElement('button');
    loadButton.className = 'fedicomment-load-btn';
    loadButton.textContent = this.config.loadButtonText;
    loadButton.addEventListener('click', () => this.loadComments());

    this.container.appendChild(loadButton);
  }

  async loadComments() {
    const loadButton = this.container.querySelector('.fedicomment-load-btn');
    if (loadButton) {
      loadButton.disabled = true;
      loadButton.textContent = 'Loading...';
    }

    try {
      let url;

      // Use proxy if configured (needed for GoToSocial)
      if (this.config.proxyUrl) {
        // Base64 encode the instance URL to safely pass it as a URL parameter
        const encodedInstance = btoa(this.config.instanceUrl);
        url = `${this.config.proxyUrl}/api/context/${encodedInstance}/${this.config.statusId}`;
      } else {
        // Direct API call (works for Mastodon)
        url = `${this.config.instanceUrl}/api/v1/statuses/${this.config.statusId}/context`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Remove load button
      if (loadButton) {
        loadButton.remove();
      }

      // Render comments
      this.renderComments(data);

    } catch (error) {
      console.error('FediComment error:', error);
      if (loadButton) {
        loadButton.textContent = this.config.errorText;
        loadButton.disabled = false;
      }
    }
  }

  renderComments(data) {
    const descendants = data.descendants || [];

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'fedicomment-wrapper';

    // Add reply button to original post
    const replyButton = document.createElement('a');
    replyButton.className = 'fedicomment-reply-btn';
    replyButton.href = `${this.config.instanceUrl}/@${this.config.username || 'user'}/${this.config.statusId}`;
    replyButton.target = '_blank';
    replyButton.rel = 'noopener noreferrer';
    replyButton.textContent = this.config.replyButtonText;
    wrapper.appendChild(replyButton);

    if (descendants.length === 0) {
      const noComments = document.createElement('p');
      noComments.className = 'fedicomment-no-comments';
      noComments.textContent = this.config.noCommentsText;
      wrapper.appendChild(noComments);
    } else {
      // Build comment tree
      const commentTree = this.buildCommentTree(descendants);
      const commentsContainer = document.createElement('div');
      commentsContainer.className = 'fedicomment-comments';

      // Render root level comments
      commentTree.forEach(comment => {
        commentsContainer.appendChild(this.renderComment(comment, 0));
      });

      wrapper.appendChild(commentsContainer);
    }

    this.container.appendChild(wrapper);
  }

  buildCommentTree(comments) {
    // Create a map of comments by ID
    const commentMap = new Map();
    comments.forEach(comment => {
      commentMap.set(comment.id, { ...comment, replies: [] });
    });

    // Build tree structure
    const roots = [];
    comments.forEach(comment => {
      const commentNode = commentMap.get(comment.id);
      if (comment.in_reply_to_id && commentMap.has(comment.in_reply_to_id)) {
        // This is a reply to another comment
        const parent = commentMap.get(comment.in_reply_to_id);
        parent.replies.push(commentNode);
      } else {
        // This is a root-level comment (reply to the original post)
        roots.push(commentNode);
      }
    });

    return roots;
  }

  renderComment(comment, depth) {
    const article = document.createElement('article');
    article.className = 'fedicomment-comment';
    article.setAttribute('data-depth', depth);

    // Avatar and header
    const header = document.createElement('header');
    header.className = 'fedicomment-header';

    const avatar = document.createElement('img');
    avatar.className = 'fedicomment-avatar';
    avatar.src = comment.account.avatar;
    avatar.alt = `${comment.account.display_name || comment.account.username} avatar`;
    avatar.loading = 'lazy';

    const authorInfo = document.createElement('div');
    authorInfo.className = 'fedicomment-author-info';

    const displayName = document.createElement('span');
    displayName.className = 'fedicomment-display-name';
    displayName.innerHTML = this.sanitizeHTML(this.escapeHtml(comment.account.display_name || comment.account.username));

    // Process custom emojis in display name
    if (comment.account.emojis && comment.account.emojis.length > 0) {
      displayName.innerHTML = this.replaceEmojis(displayName.innerHTML, comment.account.emojis);
    }

    const username = document.createElement('a');
    username.className = 'fedicomment-username';
    username.href = comment.account.url;
    username.target = '_blank';
    username.rel = 'noopener noreferrer';
    username.textContent = `@${comment.account.acct}`;

    const timestamp = document.createElement('a');
    timestamp.className = 'fedicomment-timestamp';
    timestamp.href = comment.url;
    timestamp.target = '_blank';
    timestamp.rel = 'noopener noreferrer';
    timestamp.textContent = this.formatDate(comment.created_at);
    timestamp.title = new Date(comment.created_at).toLocaleString();

    authorInfo.appendChild(displayName);
    authorInfo.appendChild(username);
    authorInfo.appendChild(timestamp);

    header.appendChild(avatar);
    header.appendChild(authorInfo);

    // Content
    const content = document.createElement('div');
    content.className = 'fedicomment-content';
    content.innerHTML = this.sanitizeHTML(comment.content);

    // Process custom emojis in content
    if (comment.emojis && comment.emojis.length > 0) {
      content.innerHTML = this.replaceEmojis(content.innerHTML, comment.emojis);
    }

    // Footer with stats
    const footer = document.createElement('footer');
    footer.className = 'fedicomment-footer';

    if (comment.favourites_count > 0) {
      const favs = document.createElement('span');
      favs.className = 'fedicomment-favs';
      favs.textContent = `★ ${comment.favourites_count}`;
      footer.appendChild(favs);
    }

    if (comment.reblogs_count > 0) {
      const boosts = document.createElement('span');
      boosts.className = 'fedicomment-boosts';
      boosts.textContent = `🔁 ${comment.reblogs_count}`;
      footer.appendChild(boosts);
    }

    article.appendChild(header);
    article.appendChild(content);
    if (footer.children.length > 0) {
      article.appendChild(footer);
    }

    // Render replies
    if (comment.replies && comment.replies.length > 0 && depth < this.config.maxDepth) {
      const replies = document.createElement('div');
      replies.className = 'fedicomment-replies';
      comment.replies.forEach(reply => {
        replies.appendChild(this.renderComment(reply, depth + 1));
      });
      article.appendChild(replies);
    }

    return article;
  }

  replaceEmojis(text, emojis) {
    emojis.forEach(emoji => {
      const img = `<img src="${emoji.url}" alt="${emoji.shortcode}" class="fedicomment-emoji" loading="lazy" />`;
      text = text.replace(new RegExp(`:${emoji.shortcode}:`, 'g'), img);
    });
    return text;
  }

  formatDate(dateString) {
    const date = new Date(dateString);

    if (this.config.dateFormat === 'absolute') {
      return date.toLocaleDateString();
    }

    // Relative time format
    const now = new Date();
    const diffMs = now - date;
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSecs < 60) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  sanitizeHTML(html) {
    // Basic sanitization - for production, use DOMPurify
    const div = document.createElement('div');
    div.innerHTML = html;

    // Remove script tags and event handlers
    const scripts = div.querySelectorAll('script');
    scripts.forEach(script => script.remove());

    // Remove on* event attributes
    const allElements = div.querySelectorAll('*');
    allElements.forEach(el => {
      Array.from(el.attributes).forEach(attr => {
        if (attr.name.startsWith('on')) {
          el.removeAttribute(attr.name);
        }
      });
    });

    // Only allow safe links
    const links = div.querySelectorAll('a');
    links.forEach(link => {
      if (!link.href.startsWith('http://') && !link.href.startsWith('https://')) {
        link.removeAttribute('href');
      }
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });

    return div.innerHTML;
  }
}

// Export for different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FediComment;
}
if (typeof window !== 'undefined') {
  window.FediComment = FediComment;
}
