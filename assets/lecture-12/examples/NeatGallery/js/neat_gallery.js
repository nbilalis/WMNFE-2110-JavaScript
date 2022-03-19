// @ts-check

"use strict"

// Enable/disable log messages globally
const DEBUG = true;

/*
 * NeatGallery constructor function
 * -------------------------------------------------- */
function NeatGallery(id) {
  const self = this;  // Little trick to solve the 'this' issue inside event handlers
  const element = document.getElementById(id); // element to place the gallery
  const urls = [];    // Image array

  let currentIndex;   // Current image index
  let intervalInSec;  // Swap image interval
  let interval;       // Store the id from setInterval
  let img;            // Main img element

  /*
   * Create all necessary elements for the gallery
   * -------------------------------------------------- */
  this.init = function(args) {
    // If args are "undefinded", set them to an empty object, so that code below works without issues
    args = args || { };
    currentIndex = args.current || 0;   // If no currentIndex is given set it to 0
    intervalInSec = args.interval || 2; // If no intervalInSec is given set it to 2

    // Create wrapper div for helping with the placing of the buttons
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    element.insertBefore(wrapper, element.firstChild);

    // Create main image element
    img = document.createElement("img");
    img.classList.add("main-img");
    img.addEventListener('mouseover', this.stop);
    img.addEventListener('mouseout', this.start);
    img.addEventListener('mousewheel', this.changeInterval)
    wrapper.appendChild(img);

    // Create "previous" button
    const prevBtn = document.createElement("span");
    prevBtn.innerHTML = "&laquo;";
    prevBtn.classList.add("previous-btn");
    prevBtn.addEventListener('click', this.previous);
    wrapper.appendChild(prevBtn);

    // Create "next" button
    const nextBtn = document.createElement("span");
    nextBtn.innerHTML = "&raquo;";
    nextBtn.classList.add("next-btn");
    nextBtn.addEventListener('click', this.next);
    wrapper.appendChild(nextBtn);

    // Create thumbnails list
    const thumbList = document.createElement("div");
    thumbList.classList.add("thumb-list");
    element.appendChild(thumbList);

    // For each image in the div
    let i = 0, max_width = 0;
    for (let el of element.querySelectorAll(".neat-gallery > img")) {
      el.classList.add("thumb");                        // add a class
      thumbList.appendChild(el);                        // append to the thumb list area
      urls.push(el.src);                                // Keep the url in an array
      max_width = el.naturalWidth > max_width ? el.naturalWidth : max_width; // Get the maximun width of all images
      el.dataset.index = i++;                           // Set an index to help with the event handler
      el.addEventListener('click', this.thumbClicked);  // Add the click event handler
    }

    // Use the maximun width from images to style the thumbnails list
    thumbList.style.width = `${max_width}px`;

    // Start teh slideshow
    this.start();
  };

  /*
   * Show current image
   * -------------------------------------------------- */
  this.show = function() {
    // Show the current image
    img.src = urls[currentIndex];
    // For every thumbnail...
    for (let el of element.getElementsByClassName("thumb")) {
      if (el.dataset.index * 1 === currentIndex) {  // If it's the current one showing
        el.classList.add("current");                // set an appropriate class
        // This is somewhat problematic, but it's included as a proof of concept
        el.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});
      } else {                                      // else, if it's not the current one...
        el.classList.remove("current");             // remove the class
      }
    }
    if (DEBUG) console.log(`Showing: ${currentIndex}`);
  };

  /*
   * Start the slideshow
   * -------------------------------------------------- */
  this.start = function() {
    self.show();
    interval = setInterval(self.next, intervalInSec * 1000);
    if (DEBUG) console.log("Started");
  };

  /*
   * Show previous image
   * -------------------------------------------------- */
  this.previous = function() {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex += urls.length;
    }
    self.show();
  };

  /*
   * Show next image
   * -------------------------------------------------- */
  this.next = function() {
    currentIndex = (currentIndex + 1) % urls.length;
    self.show();
  };

  /*
   * Show image from thumbnail
   * -------------------------------------------------- */
  this.thumbClicked = function(event) {
    currentIndex = event.target.dataset.index * 1;
    self.show();
  }

  /*
   * Stop the slideshow
   * -------------------------------------------------- */
  this.stop = function() {
    clearInterval(interval);
    if (DEBUG) console.log("Stopped");
  }

  /*
   * Change interval time
   * -------------------------------------------------- */
  this.changeInterval = function(event) {
    if (event.deltaY > 0) {                           // Use the deltaY property to determine if we need to increase or decrease the interval time
      intervalInSec = Math.max(intervalInSec - 1, 1); // Don't let the interval time be less than 1 sec
    } else {
      intervalInSec += 1;
    }
    event.preventDefault();                           // Don't let the page scroll
    if (DEBUG) console.log(intervalInSec);
  };
}