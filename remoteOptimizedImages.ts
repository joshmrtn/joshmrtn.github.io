/** Required by next-image-export-optimizer to optimize remote images during build-time. */

module.exports = new Promise((resolve) =>
  resolve([
    // Example/placeholder images from placehold.co
    'https://placehold.co/800x450.png?text=Thumbnail+\nExample',
    'https://placehold.co/1600x900.png?text=Hero+\nExample',
  ])
);
