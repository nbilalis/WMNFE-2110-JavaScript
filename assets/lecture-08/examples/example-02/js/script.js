const text = document.getElementById('text');
const output = document.getElementById('output');

text.addEventListener('keyup', () => {
  const value = text.value.trim();
  output.textContent = value; // innerHTML
});
