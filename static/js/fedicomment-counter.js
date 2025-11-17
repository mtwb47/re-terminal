/**
 * FediComment Counter - Displays comment counts from Fediverse
 * Works with the FediComment system for Hugo blogs
 */

class FediCommentCounter {
  constructor() {
    this.CACHE_KEY = 'fedicomment-counts';
    this.CACHE_TTL = 3600000; // 1 hour in milliseconds
  }

  /**
   * Get cached count for a status
   */
  getCachedCount(statusId) {
    try {
      const cache = JSON.parse(localStorage.getItem(this.CACHE_KEY) || '{}');
      const cached = cache[statusId];

      if (cached && (Date.now() - cached.timestamp) < this.CACHE_TTL) {
        return cached.count;
      }
    } catch (error) {
      console.error('FediCommentCounter: Error reading cache', error);
    }
    return null;
  }

  /**
   * Save count to cache
   */
  saveToCache(statusId, count) {
    try {
      const cache = JSON.parse(localStorage.getItem(this.CACHE_KEY) || '{}');
      cache[statusId] = {
        count: count,
        timestamp: Date.now()
      };
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(cache));
    } catch (error) {
      console.error('FediCommentCounter: Error saving to cache', error);
    }
  }

  /**
   * Fetch comment count from Mastodon API
   */
  async fetchCommentCount(instance, statusId) {
    try {
      const response = await fetch(`${instance}/api/v1/statuses/${statusId}/context`);

      if (!response.ok) {
        if (response.status === 429) {
          console.warn('FediCommentCounter: Rate limit reached');
        }
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      const count = data.descendants?.length || 0;

      return count;
    } catch (error) {
      console.error('FediCommentCounter: Failed to fetch count', error);
      return null;
    }
  }

  /**
   * Update counter element with count
   */
  updateCounterDisplay(element, count) {
    const countSpan = element.querySelector('.count');
    if (countSpan) {
      if (count === 0) {
        countSpan.textContent = 'No comments';
      } else if (count === 1) {
        countSpan.textContent = '1 Comment';
      } else {
        countSpan.textContent = `${count} Comments`;
      }
    }
  }

  /**
   * Load comment count for a counter element
   */
  async loadCommentCount(element) {
    const instance = element.dataset.instance;
    const statusId = element.dataset.statusId;

    if (!instance || !statusId) {
      console.error('FediCommentCounter: Missing instance or statusId');
      return;
    }

    // Check cache first
    const cachedCount = this.getCachedCount(statusId);
    if (cachedCount !== null) {
      this.updateCounterDisplay(element, cachedCount);
      return;
    }

    // Fetch from API
    const count = await this.fetchCommentCount(instance, statusId);
    if (count !== null) {
      this.saveToCache(statusId, count);
      this.updateCounterDisplay(element, count);
    }
  }

  /**
   * Initialize all counters on the page
   */
  init() {
    const counters = document.querySelectorAll('.fedicomment-counter');
    counters.forEach(counter => {
      this.loadCommentCount(counter);
    });
  }
}

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  window.FediCommentCounter = FediCommentCounter;

  document.addEventListener('DOMContentLoaded', function() {
    const counter = new FediCommentCounter();
    counter.init();
  });
}
