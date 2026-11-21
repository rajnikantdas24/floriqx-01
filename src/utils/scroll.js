// Smooth-scroll helpers (ported from the original MenuScroll logic)
let headerOffset = 120;

// The original measured the header once, at start-up, before the page was scrolled.
export function initHeaderOffset() {
  const header = document.querySelector('.header-area') || document.querySelector('header');
  headerOffset = header ? header.offsetHeight : 120;
}

function scrollToTarget(selector) {
  let target = null;
  try {
    target = document.querySelector(selector);
  } catch (e) {
    return;
  }
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: top - headerOffset, behavior: 'smooth' });
}

// onClick handler for in-page anchor links (#About, #Works ...)
export function handleAnchorClick(e) {
  const targetId = e.currentTarget.getAttribute('href');
  if (targetId && targetId.startsWith('#')) {
    e.preventDefault();
    scrollToTarget(targetId);
  }
}

// Page opened with a hash (e.g. /index-onepage#Pricing)
export function scrollToLocationHash() {
  if (window.location.hash) {
    const hash = window.location.hash;
    setTimeout(() => scrollToTarget(hash), 200);
  }
}
