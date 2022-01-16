'use strict';

// 1st way

function load() {
	console.log('Page loaded 1');
}

window.addEventListener('load', load);

// 2nd way

window.addEventListener('load', function () {
	console.log('Page loaded 2');
});

// 3rd way

window.addEventListener('load', () => {
	console.log('Page loaded 3');
});

// 4th way

document.addEventListener('DOMContentLoaded', () => {
	console.log('Page loaded 4');
});
