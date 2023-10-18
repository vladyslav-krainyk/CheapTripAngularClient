const fs = require('fs-extra');

const sourceDirectory = './src/index';
const destinationDirectory = './dist/cheapTrip';

// Copy the files from source to destination
fs.copy(sourceDirectory, destinationDirectory, { overwrite: false }, (err) => {
  if (err) {
    console.error('Error copying files:', err);
  } else {
    console.log('Files copied successfully.');
  }
});