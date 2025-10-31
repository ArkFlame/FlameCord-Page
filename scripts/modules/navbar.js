/**
 * Adds a 'scrolled' class to the header when the user scrolls past a certain point.
 */
export function initNavbar() {
  const header = document.getElementById('header');
  if (!header) {
    console.error("Header element with id 'header' not found.");
    return;
  }

  const scrollThreshold = 100; // Pixels to scroll before the class is added

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Listen for the scroll event
  window.addEventListener('scroll', handleScroll);

  // Run once on load in case the page is reloaded past the scroll threshold
  handleScroll();
}