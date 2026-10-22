// Click-to-enlarge for images.
//
// Bound once by delegation on document rather than per-image onclick handlers,
// so one listener covers markdown images in posts (which get the trigger class
// from the render-image hook), featured images on /images posts, and anything
// else carrying .lightbox-trigger.
//
// The overlay markup lives in partials/lightbox.html and is emitted once per
// page by baseof.html. If it is absent, this does nothing.

(function () {
  function init() {
    var box = document.getElementById('lightbox');
    if (!box) return;

    var img = document.getElementById('lightbox-img');
    var caption = document.getElementById('lightbox-caption');
    if (!img || !caption) return;

    var lastFocus = null;

    function isOpen() {
      return box.style.display === 'block';
    }

    function open(trigger) {
      lastFocus = trigger;

      // currentSrc resolves whatever the browser actually picked for
      // srcset/sizes images; src is the fallback for plain ones.
      img.src = trigger.currentSrc || trigger.src;
      img.alt = trigger.alt || '';

      // Caption: a sibling figcaption wins, else the title attribute, which is
      // where a markdown image's ![alt](src "title") ends up.
      var fig = trigger.closest('figure');
      var figcap = fig && fig.querySelector('figcaption');
      if (figcap) {
        // Already-rendered first-party markup from the template, so keep its
        // links and emphasis intact.
        caption.innerHTML = figcap.innerHTML;
        caption.style.display = 'block';
      } else {
        // A title attribute is plain text by definition - assign it as text so
        // markup in a caption can never be parsed as HTML.
        var title = trigger.getAttribute('title') || '';
        caption.textContent = title;
        caption.style.display = title ? 'block' : 'none';
      }

      box.style.display = 'block';
      box.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      var close = box.querySelector('.lightbox-close');
      if (close) close.focus();
    }

    function close() {
      box.style.display = 'none';
      box.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus) {
        lastFocus.focus();
        lastFocus = null;
      }
    }

    document.addEventListener('click', function (e) {
      var target = e.target;
      if (!target || typeof target.closest !== 'function') return;

      var trigger = target.closest('.lightbox-trigger');
      if (trigger) {
        e.preventDefault();
        open(trigger);
        return;
      }

      // Backdrop and close button dismiss; the enlarged image itself does not,
      // so a mis-click on the photo does not shut the overlay.
      if (isOpen() && target !== img && box.contains(target)) {
        close();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) {
        close();
        return;
      }
      if (e.key !== 'Enter' && e.key !== ' ') return;

      var active = document.activeElement;
      if (active && active.classList && active.classList.contains('lightbox-trigger')) {
        e.preventDefault();
        open(active);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
