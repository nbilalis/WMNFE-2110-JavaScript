'use strict';

function listener() {
	console.log('Some event...');
}

document.addEventListener('DOMContentLoaded', () => {
	const btnEl = document.getElementById('btn');

	btnEl.addEventListener('mouseover', listener);
	btnEl.addEventListener('click', listener);

	/* ['mouseover', 'click'].forEach((item) => {
		btnEl.addEventListener(item, listener);
	}); */
});
