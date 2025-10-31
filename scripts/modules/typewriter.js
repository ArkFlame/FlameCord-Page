/**
 * Initializes a typewriter effect on a given element, cycling through an array of words.
 */
export function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter');
  if (!typewriterElement) {
    console.error("Element with id 'typewriter' not found.");
    return;
  }

  const words = ['Powerful', 'Efficient', 'Lightweight', 'Strong', 'Unbreakable'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeSpeed = 150; // Speed of typing
  const deleteSpeed = 100; // Speed of deleting
  const delayBetweenWords = 1500; // Pause after a word is fully typed

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Deleting characters
      typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Typing characters
      typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    // Check if word is fully typed or deleted
    if (!isDeleting && charIndex === currentWord.length) {
      // Word is fully typed, pause, then start deleting
      setTimeout(() => { isDeleting = true; }, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      // Word is fully deleted, move to the next word
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Loop back to the start
    }

    // Determine the speed for the next character
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    setTimeout(type, speed);
  }

  // Start the typing effect
  type();
}