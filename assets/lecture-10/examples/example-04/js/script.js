'use strict';

const anchors = document.getElementsByTagName('a');

Array.from(anchors).forEach((a) => {
  a.addEventListener('click', (event) => {
    if (a.href) {
      fetch(a.href)
        .then((response) => response.text())
        .then((text) => {
          document.querySelector('html').innerHTML = text;
          history.pushState({}, '', a.href);
        });

      event.preventDefault();
    }
  });
});
