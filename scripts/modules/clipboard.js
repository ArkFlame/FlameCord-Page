/**
 * Initializes the copy-to-clipboard functionality for the discount code.
 */
export function initClipboard() {
  const copyButton = document.getElementById('copy-btn');
  const discountInput = document.getElementById('discount-code');

  if (!copyButton || !discountInput) {
    console.error("Required elements for clipboard functionality not found.");
    return;
  }

  const originalIcon = copyButton.innerHTML;
  const copiedIcon = '<span>&#x2713;</span>'; // Checkmark character

  const handleCopy = () => {
    const codeToCopy = discountInput.value;

    // Use the modern Navigator Clipboard API
    navigator.clipboard.writeText(codeToCopy).then(() => {
      // --- Success ---
      // Provide visual feedback
      copyButton.innerHTML = copiedIcon;
      copyButton.classList.add('copied');

      // Revert back to the original state after a delay
      setTimeout(() => {
        copyButton.innerHTML = originalIcon;
        copyButton.classList.remove('copied');
      }, 3000); // Revert after 3 seconds
    }).catch(err => {
      // --- Error ---
      console.error('Failed to copy text: ', err);
      // You could display an error message to the user here
    });
  };

  copyButton.addEventListener('click', handleCopy);
}