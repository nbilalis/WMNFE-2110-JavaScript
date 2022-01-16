'use strict';

const btnColl = document.getElementsByTagName('button');


for (const btn of btnColl) {
	btn.addEventListener('click', (event) => {
		event.target.style.backgroundColor = 'red';
	});
}

/* for (let i = 0; i < btnColl.length; i++) {
	btnColl[i].addEventListener('click', () => {});
} */
