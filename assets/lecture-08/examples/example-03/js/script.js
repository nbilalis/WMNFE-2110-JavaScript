let current = 0;

document.getElementById('button').addEventListener('click', () => {
  const links = document.getElementsByTagName('a');

  // .href, .target
  for (const link of links) {
    console.log(link.href);
    link.target = !link.target ? '_blank' : '';
  }

  // .src
  const img = document.getElementById('image');
  img.src = `https://picsum.photos/200/300?random=${current}`;

  const ul = document.getElementById('list');

  // .children, firstChils, lastChild
  const firstLi = ul.firstElementChild; // ul.children[0];
  const lastLi = ul.lastElementChild; // ul.children[ul.children.length - 1];

  // .classList
  firstLi.classList.toggle('first');
  lastLi.classList.toggle('last');

  // .style
  for (const li of ul.children) {
    li.classList.remove('list-item');
    li.style.textDecoration = 'none'; // Not ideal
  }

  ul.children[current].classList.add('list-item');
  ul.children[current].style.textDecoration = 'underline'; // Not ideal

  current++;

  if (current >= ul.children.length) {
    current = 0;
  }
});
