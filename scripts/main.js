// src/scripts/main.js

// --- Import all the necessary modules ---
import { initNavbar } from './modules/navbar.js';
import { initTypewriter } from './modules/typewriter.js';
import { initClipboard } from './modules/clipboard.js';
import { initAutoScroller } from './modules/autoScroller.js';
import { initCharts } from './modules/charts.js'; // <-- ADD THIS IMPORT
import { initUtils } from './utils.js';

/**
 * Main application entry point.
 */
function main() {
  // Initialize each module
  initNavbar();
  initTypewriter();
  initClipboard();
  initAutoScroller();
  initCharts(); // <-- ADD THIS INITIALIZER
  initUtils();

  console.log("FlameCord website scripts initialized.");
}

document.addEventListener('DOMContentLoaded', main);