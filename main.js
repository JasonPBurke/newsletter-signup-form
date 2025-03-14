const signupForm = document.getElementById('sign-up');
const successForm = document.getElementById('success');
const form = document.getElementById('form');
const dismissBtn = document.getElementById('dismiss-btn');

// TODO create a validation function. return t/f
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

// console.log(successForm.lastElementChild);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  if (validateEmail(data.email)) {
    toggleDisplay(signupForm);
    toggleDisplay(successForm);
    localStorage.setItem('email', data.email);
    document.getElementById('user-email').textContent = data.email;
    form.reset();
  } else {
    const emailInput = document.getElementById('email');
    const labelContainer =
      document.getElementById('label-container').lastElementChild;
    emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
    emailInput.style.backgroundColor = 'hsla(4, 100%, 67%, 0.158)';
    emailInput.style.color = 'hsl(4, 100%, 67%)';
    labelContainer.style.display = 'block';
  }
});

dismissBtn.addEventListener('click', function (e) {
  e.preventDefault();
  toggleDisplay(signupForm);
  toggleDisplay(successForm);
});
