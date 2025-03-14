const signupForm = document.getElementById('sign-up');
const successForm = document.getElementById('success');
const form = document.getElementById('form');
const dismissBtn = document.getElementById('dismiss-btn');

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function toggleDisplay(element) {
  console.log(getComputedStyle(element).display);
  getComputedStyle(element).display === 'none'
    ? (element.style.display = 'grid')
    : (element.style.display = 'none');
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const emailInput = document.getElementById('email');
  const errorMsgContainer =
    document.getElementById('label-container').lastElementChild;

  if (validateEmail(data.email)) {
    toggleDisplay(signupForm);
    toggleDisplay(successForm);
    localStorage.setItem('email', data.email);
    document.getElementById('user-email').textContent = data.email;
    errorMsgContainer.style.display = 'none';
    emailInput.style.borderColor = 'black';
    emailInput.style.backgroundColor = 'hsl(0, 0%, 100%)';
    emailInput.style.color = 'black';

    form.reset();
  } else {
    errorMsgContainer.style.display = 'block';
    emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
    emailInput.style.backgroundColor = 'hsla(4, 100%, 67%, 0.158)';
    emailInput.style.color = 'hsl(4, 100%, 67%)';
  }
});

dismissBtn.addEventListener('click', function (e) {
  e.preventDefault();
  toggleDisplay(signupForm);
  toggleDisplay(successForm);
});
