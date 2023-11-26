const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const isDarkMode = localStorage.getItem("darkMode") === "enabled";
if (isDarkMode) {
  body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

const submitButton = document.getElementById("submitForm");

submitButton.addEventListener("click", function () {
  const name = document.getElementsByName("name")[0].value;
  const email = document.getElementsByName("email")[0].value;
  const message = document.getElementsByName("message")[0].value;

  const mailtoLink =
    "mailto:cvamorocamson@gmail.com?subject=Message from " +
    " " +
    name +
    "&body=" +
    encodeURIComponent(message);

  window.location.href = mailtoLink;
});
