const consultationButton = document.getElementsByClassName('consultation-button')[0];
const form = document.getElementsByClassName('form-container')[0];
const closeButton = document.getElementsByClassName('form__close-wrapp')[0];

consultationButton.addEventListener('click', () => {
  form.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  form.style.display = 'none';
});