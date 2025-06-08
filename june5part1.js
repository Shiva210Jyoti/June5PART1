document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const website = document.getElementById("website");
  const message = document.getElementById("message");

  let isValid = true;

  clearErrors();

  if (name.value.trim() === "") {
    showError(name, "This field is required.");
    isValid = false;
  }

  if (email.value.trim() === "") {
    showError(email, "A valid email address is required.");
    isValid = false;
  } else if (!validateEmail(email.value)) {
    showError(email, "Enter a valid email.");
    isValid = false;
  }

  if (website.value.trim() === "") {
    showError(website, "A valid url is required.");
    isValid = false;
  } else if (!validateURL(website.value)) {
    showError(website, "Enter a valid URL.");
    isValid = false;
  }

  if (message.value.trim() === "") {
    showError(message, "This field is required.");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
});

function showError(input, message) {
  const small = input.nextElementSibling;
  small.innerText = message;
  small.style.display = "block";
  input.classList.add("error");
}

function clearErrors() {
  document.querySelectorAll("input, textarea").forEach(input => {
    input.classList.remove("error");
    input.nextElementSibling.style.display = "none";
  });
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateURL(url) {
  const re = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  return re.test(url);
}
