document.getElementById("js-email").addEventListener("keydown", () => {
  document.getElementById("js-email").removeAttribute("data-invalid");
});

document.getElementById("js-subscribe").addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("js-email");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (emailRegex.test(email.value)) {
    document
      .querySelector(".newsletter-signup")
      .setAttribute("data-hidden", "true");

    document
      .querySelector(".newsletter-success")
      .setAttribute("data-hidden", "false");
  } else {
    email.setAttribute("data-invalid", "");
  }
});

document.getElementById("js-dismiss-message").addEventListener("click", () => {
  document
    .querySelector(".newsletter-signup")
    .setAttribute("data-hidden", "false");

  document
    .querySelector(".newsletter-success")
    .setAttribute("data-hidden", "true");
});
