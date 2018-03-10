const fs = require('fs');

const folder = '.';
const distFolder = 'cleanup';
const things = fs.readdirSync(folder);

// Create the destination folder
fs.mkdirSync(distFolder);

// Checks if there is a folder inside the dist folder that has a given name
function isThereAFolder(name) {
	const folders = fs.readdirSync(distFolder);
	let result = false;

	folders.map((item) => {
		if (item === name) {
			result = true;
		}
		return true;
	});

	return result;
}

// Filter out the invisible files, the cleanup.js file and folders
const visibleFiles = things.filter((name) => {
	if (name[0] !== '.' && name !== 'cleanup.js') {
		if (!fs.lstatSync(name).isDirectory()) {
			return true;
		}
	}

	return false;
});

visibleFiles.map((filename) => {
	let extension = filename.split('.');

	if (extension.length > 1) {
		extension = extension[extension.length - 1];
	}
	else {
		// In case the file doesn't have an extension
		extension = 'other';
	}

	// Create a folder inside the dist folder named after the file's extension
	if (!isThereAFolder(extension)) {
		fs.mkdirSync(`${distFolder}/${extension}`);
	}

	// Move (copy and delete, actually) the file
	fs.copyFileSync(filename, `./${distFolder}/${extension}/${filename}`);
	fs.unlink(filename, (err) => {
		if (err) throw err;
	});

	return true;
});

// eslint-disable-next-line
console.log('All your file(s) have been moved inside a folder called "cleanup".');

