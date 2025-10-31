/**
 * Initializes a smooth, continuous horizontal scroll for the reviews track.
 * Pauses on hover.
 */
export function initAutoScroller() {
  const scroller = document.querySelector('.reviews-scroller');
  const track = document.getElementById('reviews-track');

  if (!scroller || !track) {
    console.error("Required elements for auto-scroller not found.");
    return;
  }

  // 1. Clone the review cards to create a seamless loop
  const reviewCards = Array.from(track.children);
  if (reviewCards.length === 0) return; // Don't run if there are no cards

  reviewCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', true);
    track.appendChild(clone);
  });

  // 2. Add a CSS animation to the track
  const scrollSpeed = 80; // pixels per second
  const trackWidth = track.scrollWidth / 2;
  const animationDuration = trackWidth / scrollSpeed;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-${trackWidth}px - var(--spacing-gap))); }
    }
    .reviews-track {
      animation: scroll ${animationDuration}s linear infinite;
    }
  `;
  document.head.appendChild(style);

  // 3. Pause animation on hover
  scroller.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });
  scroller.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });

  // 4. --- THIS IS THE FIX ---
  // Reveal the scroller now that all the setup is complete.
  // Use a small timeout to ensure the browser has processed the DOM changes.
  setTimeout(() => {
    scroller.classList.add('ready');
  }, 100); 
}