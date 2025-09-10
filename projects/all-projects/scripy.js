const burgerBtn = document.getElementById('burger');
const header = document.getElementById('header');

burgerBtn.addEventListener('click', () => {
  header.classList.toggle('header--open');
});

const radios = document.querySelectorAll('input[name="list"]');
const block1 = document.getElementById('news');
const block2 = document.getElementById('grid');

radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.value === '1') {
      block1.style.display = 'block';
      block2.style.display = 'none';
    } else if (radio.value === '2') {
      block1.style.display = 'none';
      block2.style.display = 'block';
    }
  });
});