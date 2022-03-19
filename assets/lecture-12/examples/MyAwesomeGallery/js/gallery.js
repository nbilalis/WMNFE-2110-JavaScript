"use strict"

function Gallery(images, elementId, interval) {
	this.images = images || [];
	this.base_el = document.getElementById(elementId);
	this.interval = interval || 1000;

	let self = this;
	let number_of_images = this.images.length;

	let current_image_index = -1;
	let timetout_id = 0, progress_interval_id = 0;
	let img_el;
	let left_el, right_el, prog_el;

	this.init = function() {
		img_el = document.createElement('img');
		img_el.addEventListener('mouseover', pause);
		img_el.addEventListener('mouseout', restart);
		img_el.addEventListener('mousewheel', setInterval);
		img_el.addEventListener('load', fireTransition);

		left_el = document.createElement('div');
		left_el.innerHTML = "&laquo;"
		left_el.classList.add('gallery__left');
		left_el.addEventListener('click', showPrevious);

		right_el = document.createElement('div');
		right_el.innerHTML = "&raquo;"
		right_el.classList.add('gallery__right');
		right_el.addEventListener('click', showNext);

		prog_el = document.createElement('div');
		prog_el.classList.add('gallery__progress');

		self.base_el.appendChild(img_el);
		self.base_el.appendChild(left_el);
		self.base_el.appendChild(right_el);
		self.base_el.appendChild(prog_el);
	}

	this.start = function () {
		self.init();
		showNext();
	};

	const calculateIndex = function (x) {
		let ret = current_image_index + x;

		if (ret < 0) {
			ret += number_of_images;
		} else if (ret >= number_of_images ) {
			ret -= current_image_index;
		}

		return ret;
	}

	const showNext = function (x) {
		current_image_index = calculateIndex(+1);
		showCurrent();
	};

	const showPrevious = function () {
		current_image_index = calculateIndex(-1);
		showCurrent();
	};

	const showCurrent = function () {
		clearInterval(timetout_id);
		img_el.src = self.images[current_image_index];
		timetout_id = setTimeout(showNext, self.interval * 1000);
		prelodNext();
	}

	const prelodNext = function () {
		let temp = document.createElement('img')
		temp.src = self.images[calculateIndex(+1)];
	}

	const pause = function () {
		clearTimeout(timetout_id);
//		resetProgress();
	};

	const restart = function () {
		showCurrent();
	};

	const resetProgress = function () {
		prog_el.style.transitionDuration = "0s";
		prog_el.style.width = '0%';
	};

	const setInterval = function (event) {
		if (event.deltaY < 0) {
			self.interval += 0.5;
		} else {
			self.interval -= 0.5;
		}
		console.log(self.interval);
	};

	const fireTransition = function () {
		resetProgress();
		setTimeout(() => {
			prog_el.style.transitionDuration = `${self.interval}s`;
			prog_el.style.width = '100%';
		}, 100);
	};
}
